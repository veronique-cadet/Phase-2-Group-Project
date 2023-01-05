import React, {useState} from "react";
import WeeklySleepGraph from "./WeeklySleepGraph";
import WeeklyMoodPie from "./WeeklyMoodPie";
import WeeklyWaterGraph from "./WeeklyWaterGraph";
import WeeklyMealGraph from "./WeeklyMealGraph";
import WeeklyExercisePie from "./WeeklyExercisePie";
import WeeklyMeditationPie from "./WeeklyMeditationPie";


const WeeklyStats = ({logs}) => {

  const [chosenWeeklyChart, setChosenWeeklyChart] = useState("default")
  // const [buttonClass, setButtonClass] = useState("select-category")

  return (
    <div>
      <div>
        <button onClick={()=>setChosenWeeklyChart(<WeeklySleepGraph logs={logs}/>)}>SLEEP</button>
        <button onClick={()=>setChosenWeeklyChart(<WeeklyMoodPie logs={logs}/>)}>MOOD</button>
        <button onClick={()=>setChosenWeeklyChart(<WeeklyWaterGraph logs={logs}/>)}>WATER</button>
        <button onClick={()=>setChosenWeeklyChart(<WeeklyMealGraph logs={logs}/>)}>MEALS</button>
      <div/>
      </div>
       {chosenWeeklyChart=== "default" ? <WeeklySleepGraph logs={logs}/> : chosenWeeklyChart}          
    </div>
  );
};

export default WeeklyStats;