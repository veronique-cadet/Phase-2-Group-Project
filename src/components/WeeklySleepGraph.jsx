import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";

const getSleepCountBySleep = (logs) => {
    const sleepCountBySleep = {}
    logs.forEach((log) => {
        if (sleepCountBySleep[log.sleep]) {
            sleepCountBySleep[log.sleep]++
        } else {
            sleepCountBySleep[log.sleep] = 1
        }
    })
    console.log(sleepCountBySleep)
    return sleepCountBySleep
}

  
  export default function WeeklySleepGraph({logs}) {
      
      const waterWeekCountByWater = getSleepCountBySleep(logs.slice(-7))

      //for total count if necessary
      const waterTotalCountByWater = getSleepCountBySleep(logs)
      
      const data = [
        // {
        //   name: "1 hours",
        //   hours: sleepCountBySleep[1],
        //   amt: 2400
        // },
        // {
        //   name: "2 hours",
        //   hours: sleepCountBySleep[2],
        //   amt: 2210
        // },
        // {
        //   name: "3 hours",
        //   hours: sleepCountBySleep[3],
        //   amt: 2290
        // },
        // {
        //   name: "4 hours",
        //   hours: sleepCountBySleep[4],
        //   amt: 2000
        // },
        {
          name: " <= 5 hours",
          hours: waterWeekCountByWater[1,2,3,4,5],
          amt: waterTotalCountByWater [1,2,3,4,5]
        },
        {
          name: "6 hours",
          hours: waterWeekCountByWater[6],
          amt: waterTotalCountByWater [6]
        },
        {
          name: "7 hours ",
          hours: waterWeekCountByWater[7],
          amt: waterTotalCountByWater [7]
        },
        {
          name: "8 hours",
          hours: waterWeekCountByWater[8],
          amt: waterTotalCountByWater[8]
        },
        {
          name: "9 hours ",
          hours: waterWeekCountByWater[9],
          amt: waterTotalCountByWater[9]
        },
        {
          name: "10 hours",
          hours: waterWeekCountByWater[10],
          amt: waterTotalCountByWater[10]
        },
        {
          name: "11 hours ",
          hours: waterWeekCountByWater[11],
          amt: waterTotalCountByWater[11]
        },
        {
          name: "12 => hours",
          hours: waterWeekCountByWater[12,13,14,15,16,17,18,19,20],
          amt: waterTotalCountByWater[12,13,14,15,16,17,18,19,20]
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
      <Bar dataKey="hours" fill="##3a5ed0" />
    </BarChart>
  );
}