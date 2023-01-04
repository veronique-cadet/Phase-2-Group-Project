// export default function GetZen() {
//   return <div className="other-pages"></div>;
// }

import React from "react";
import { PieChart, Pie, Cell } from "recharts";



const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#ffc0cb"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  ...props
}) => {
  console.log(props)
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      <tspan dy="1em">{props.name}</tspan>
      <tspan dy="1em">
        {`${(percent * 100).toFixed(0)}%`}
      </tspan>
    </text>
  );
};
// looping array to find number of mood counts
const getMoodCountByMood = (logs) => {
  const moodCountByMood = {}
  logs.forEach((log) => {
    // console.log(moodCountByMood[log.mood])
    if (moodCountByMood[log.mood]) {
      moodCountByMood[log.mood]++
    } else {
      moodCountByMood[log.mood] = 1
    }
  })
  return moodCountByMood
}

export default function WeeklyStats ({logs}) {
  // latest weekly data
  const moodCountByMood = getMoodCountByMood(logs.slice(-7))
  // console.log(moodCountByMood)
  const data = [
    { name: "Group A", value: moodCountByMood[1] },
    { name: "Group B", value: moodCountByMood[2] },
    { name: "Group C", value: moodCountByMood[3] },
    { name: "Group D", value: moodCountByMood[4] }, 
    { name: "Group E", value: moodCountByMood[5] }, 
  ];

  return (
    <PieChart width={610} height={600}>
      <Pie
        data={data}
        cx={300}
        cy={300}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={300}
        fill="#8884d8"
        dataKey="value"
        strokeWidth={0}
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
}



// const WeeklyStats = ({logs}) => {


//   return (
//     <div>
//       {/* <h2>YOUR WEEKLY STATS</h2>
//             <h3>Data from db.json will appear here on graphs and charts</h3> */}
//     </div>
//   );
// };

// export default WeeklyStats;
