
import React from "react";
import WeeklySleepGraph from "./WeeklySleepGraph";
import WeeklyMoodPie from "./WeeklyMoodPie";
import WeeklyWaterGraph from "./WeeklyWaterGraph";
import WeeklyMealGraph from "./WeeklyMealGraph";


const WeeklyStats = ({logs}) => {


  return (
    <div>
      <WeeklySleepGraph logs={logs}/>
      <WeeklyMoodPie logs={logs}/>
      <WeeklyWaterGraph logs={logs}/>
      <WeeklyMealGraph logs={logs}/>
    </div>
  );
};

export default WeeklyStats;
