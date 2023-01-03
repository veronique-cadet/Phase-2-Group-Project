// export default function GetZen() {
//   return <div className="other-pages"></div>;
// }

import React from "react";
import { PieChart, Pie, Cell } from "recharts";



const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index
}: any) => {
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
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
export default function WeeklyStats ({logs}) {
const data = [
  { name: "Group A", value: logs.filter((log)=>{
    if (log.mood === 5){
      return true;
    }
  }) },
  { name: "Group B", value: logs.mood.count(4) },
  { name: "Group C", value: logs.mood.count(3) },
  { name: "Group D", value: logs.mood.count(2) }, 
];

  return (
    <PieChart width={400} height={400}>
      <Pie
        data={data}
        cx={200}
        cy={200}
        labelLine={false}
        label={renderCustomizedLabel}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
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
