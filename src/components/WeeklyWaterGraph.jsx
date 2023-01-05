import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";

const getWaterCountByWater = (logs) => {
    const waterCountByWater = {}
    logs.forEach((log) => {
        if (waterCountByWater[log.water]) {
            waterCountByWater[log.water]++
        } else {
            waterCountByWater[log.water] = 1
        }
    })
    return waterCountByWater
}

  
  export default function WeeklyWaterGraph({logs}) {
      
      const waterWeekCountByWater = getWaterCountByWater(logs.slice(-7))

      //for total count if necessary
      const waterTotalCountByWater = getWaterCountByWater(logs)
      
      const data = [
        // {
        //   name: "1 cups",
        //   cups: waterCountByWater[1],
        //   amt: 2400
        // },
        // {
        //   name: "2 cups",
        //   cups: waterCountByWater[2],
        //   amt: 2210
        // },
        // {
        //   name: "3 cups",
        //   cups: waterCountByWater[3],
        //   amt: 2290
        // },
        // {
        //   name: "4 cups",
        //   cups: waterCountByWater[4],
        //   amt: 2000
        // },
        {
          name: " <= 5 cups",
          cups: waterWeekCountByWater[1,2,3,4,5],
          amt: waterTotalCountByWater [1,2,3,4,5]
        },
        {
          name: "6 cups",
          cups: waterWeekCountByWater[6],
          amt: waterTotalCountByWater [6]
        },
        {
          name: "7 cups ",
          cups: waterWeekCountByWater[7],
          amt: waterTotalCountByWater [7]
        },
        {
          name: "8 cups",
          cups: waterWeekCountByWater[8],
          amt: waterTotalCountByWater[8]
        },
        {
          name: "9 cups ",
          cups: waterWeekCountByWater[9],
          amt: waterTotalCountByWater[9]
        },
        {
          name: "10 cups",
          cups: waterWeekCountByWater[10],
          amt: waterTotalCountByWater[10]
        },
        {
          name: "11 cups ",
          cups: waterWeekCountByWater[11],
          amt: waterTotalCountByWater[11]
        },
        {
          name: "12 => cups",
          cups: waterWeekCountByWater[12,13,14,15,16,17,18,19,20],
          amt: waterTotalCountByWater[12,13,14,15,16,17,18,19,20]
        }
      ];
  return (
    <div className="pie-container">
    <BarChart
      width={900}
      height={400}
      data={data}
      margin={{
        top: 5,
        right: 35,
        left: 20,
        bottom: 5
      }}
    >
      <XAxis dataKey="name"/>
      <YAxis label=""/>
      {/* <Tooltip /> */}
      {/* <Legend /> */}
      <Bar dataKey="cups" fill="#9acef0" />
    </BarChart>
    </div>
  );
}