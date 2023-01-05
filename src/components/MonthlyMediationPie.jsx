import { PieChart, Pie, Cell, Legend } from "recharts";

const COLORS = ["#bbe116", "#ff7678"];

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
// looping array to find number of Meditation counts
const getMeditationCountByMeditation = (logs) => {
  const meditationCountByMeditation = {}
  logs.forEach((log) => {
    // console.log(meditationCountByMeditation)
    if (meditationCountByMeditation[log.meditation]) {
      meditationCountByMeditation[log.meditation]++
    } else {
      meditationCountByMeditation[log.meditation] = 1
    }
  })
  return meditationCountByMeditation
}

export default function MonthlyMeditationPie ({logs}) {
  // latest monthly data
  const meditationCountByMeditation = getMeditationCountByMeditation(logs.slice(-30))
  // console.log(meditationCountByMeditation)
  const data = [
    { name: " Meditated ", value: meditationCountByMeditation[true] },
    { name: " Did Not Meditate ", value: meditationCountByMeditation[false] }
  ];

  return (
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
      <Legend/>
    </PieChart>
    </div>
  );
}
