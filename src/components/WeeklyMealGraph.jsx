import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";

const getMealCountByMeal = (logs) => {
    const mealCountByMeal = {}
    logs.forEach((log) => {
        if (mealCountByMeal[log.meals]) {
            mealCountByMeal[log.meals]++
        } else {
            mealCountByMeal[log.meals] = 1
        }
    })
    return mealCountByMeal
}

  
  export default function WeeklyMealGraph({logs}) {
      
      const mealWeekCountByMeal = getMealCountByMeal(logs.slice(-7))
      console.log(mealWeekCountByMeal)

      //for total count if necessary
      const mealTotalCountByMeal = getMealCountByMeal(logs)
      
      const data = [
        {
          name: "<= 1 meal",
          meals: mealWeekCountByMeal[1],
          amt: mealTotalCountByMeal[1]
        },
        {
          name: "2 meals",
          meals: mealWeekCountByMeal[2],
          amt: mealTotalCountByMeal[2]
        },
        {
          name: "3 meals",
          meals: mealWeekCountByMeal[3],
          amt: mealTotalCountByMeal[3]
        },
        {
          name: "4 meals",
          meals: mealWeekCountByMeal[4],
          amt: mealTotalCountByMeal[4]
        },
        {
          name: " 5 meals",
          meals: mealWeekCountByMeal[5],
          amt: mealTotalCountByMeal[5]
        },
        {
          name: "6 meals",
          meals: mealWeekCountByMeal[6],
          amt: mealTotalCountByMeal[6]
        },
        {
          name: "7 => meals ",
          meals: mealWeekCountByMeal[7],
          amt: mealTotalCountByMeal[7]
        }
      ];
  return (
    <BarChart
      width={1300}
      height={600}
      data={data}
      margin={{
        top: 5,
        right: 35,
        left: 20,
        bottom: 5
      }}
    >
      <XAxis dataKey="name"/>
      <YAxis label="Days"/>
      <Tooltip />
      <Legend />
      <Bar dataKey="meals" fill="#ed9480" />
    </BarChart>
  );
}