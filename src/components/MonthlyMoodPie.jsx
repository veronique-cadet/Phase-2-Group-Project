import { PieChart, Pie, Cell, Legend } from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#ffc0cb"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  name //add name text to label
}) => {
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
      <>
      {/* {name} */}
      {`${(percent * 100).toFixed(0)}%`}
      </>
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

export default function WeeklyMoodPie ({logs}) {
  // latest weekly data
  const moodCountByMood = getMoodCountByMood(logs.slice(-30))
  // console.log(moodCountByMood)
  const data = [
    { name: " 1 >:( ", value: moodCountByMood[1] },
    { name: " 2 :( ", value: moodCountByMood[2] },
    { name: " 3 :| ", value: moodCountByMood[3] },
    { name: " 4 :) ", value: moodCountByMood[4] }, 
    { name: " 5 :D ", value: moodCountByMood[5] }, 
  ];

  return (
    <div className="description-box">
      <h1 className="title">Mood</h1>
      <p className="description">How have you been feeling lately? Each slice of this pie indicates the percent of the past month that you reported feeling terrible >:( , bad :( , neutral :| , good :) and great :D .</p>
      <div className="pie-container">
      <PieChart width={400} height={400}>
        <Pie
          data={data}
          cx={150}
          cy={150}
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={150}
          fill="#8884d8"
          dataKey="value"
          strokeWidth={0}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Legend />
      </PieChart>
      </div>
    </div>
  );
}
