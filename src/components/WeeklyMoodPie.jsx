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
      {name}
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
  const moodCountByMood = getMoodCountByMood(logs.slice(-7))
  // console.log(moodCountByMood)
  const data = [
    { name: " Rated 1 ", value: moodCountByMood[1] },
    { name: " Rated 2", value: moodCountByMood[2] },
    { name: " Rated 3", value: moodCountByMood[3] },
    { name: " Rated 4", value: moodCountByMood[4] }, 
    { name: " Rated 5", value: moodCountByMood[5] }, 
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
