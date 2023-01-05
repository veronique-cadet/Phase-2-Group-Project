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
    return sleepCountBySleep
}

  
  export default function WeeklySleepGraph({logs}) {
      
      const sleepWeekCountBySleep = getSleepCountBySleep(logs.slice(-7))

      //for total count if necessary
      const sleepTotalCountBySleep = getSleepCountBySleep(logs)
      
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
          hours: sleepWeekCountBySleep[1,2,3,4,5],
          amt: sleepTotalCountBySleep [1,2,3,4,5]
        },
        {
          name: "6 hours",
          hours: sleepWeekCountBySleep[6],
          amt: sleepTotalCountBySleep [6]
        },
        {
          name: "7 hours ",
          hours: sleepWeekCountBySleep[7],
          amt: sleepTotalCountBySleep [7]
        },
        {
          name: "8 hours",
          hours: sleepWeekCountBySleep[8],
          amt: sleepTotalCountBySleep[8]
        },
        {
          name: "9 hours ",
          hours: sleepWeekCountBySleep[9],
          amt: sleepTotalCountBySleep[9]
        },
        {
          name: "10 hours",
          hours: sleepWeekCountBySleep[10],
          amt: sleepTotalCountBySleep[10]
        },
        {
          name: "11 hours ",
          hours: sleepWeekCountBySleep[11],
          amt: sleepTotalCountBySleep[11]
        },
        {
          name: "12 => hours",
          hours: sleepWeekCountBySleep[12],
          amt: sleepTotalCountBySleep[12]
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