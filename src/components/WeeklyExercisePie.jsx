import { PieChart, Pie, Cell, Legend } from "recharts";

const COLORS = ["#0088FE", "#00C49F"];

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
// looping array to find number of exercise counts
const getExerciseCountByExercise = (logs) => {
  const exerciseCountByExercise = {}
  logs.forEach((log) => {
    // console.log(exerciseCountByExercise)
    if (exerciseCountByExercise[log.exercise]) {
      exerciseCountByExercise[log.exercise]++
    } else {
      exerciseCountByExercise[log.exercise] = 1
    }
  })
  return exerciseCountByExercise
}

export default function WeeklyExercisePie ({logs}) {
  // latest weekly data
  const exerciseCountByExercise = getExerciseCountByExercise(logs.slice(-7))
  // console.log(exerciseCountByExercise)
  const data = [
    { name: " Exercised " , value: exerciseCountByExercise[true] },
    { name: " Did Not Exercise ", value: exerciseCountByExercise[false] }
  ];

  return (
    <div className="description-box">
      <h1 className="title">Exercise</h1>
      <p className="description">Have you moved your body this week? Each slice of this pie indicates the percent of the past week that you reported exercising or not.</p>
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
        <Legend align="left"/>
      </PieChart>
      </div>
    </div>
  );
}
