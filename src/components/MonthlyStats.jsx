import React, {useState} from "react";
import MonthlySleepGraph from "./MonthlySleepGraph";
import MonthlyMoodPie from "./MonthlyMoodPie";
import MonthlyWaterGraph from "./MonthlyWaterGraph";
import MonthlyMealGraph from "./MonthlyMealGraph";
import MonthlyExercisePie from "./MonthlyExercisePie";
import MonthlyMeditationPie from "./MonthlyMediationPie";


const MonthlyStats = ({logs}) => {

  const [chosenMonthlyChart, setChosenMonthlyChart] = useState("default")

  return (
    <div>
        <div>
        <button onClick={()=>setChosenMonthlyChart(<MonthlySleepGraph logs={logs}/>)}>SLEEP</button>
        <button onClick={()=>setChosenMonthlyChart(<MonthlyMoodPie logs={logs}/>)}>MOOD</button>
        <button onClick={()=>setChosenMonthlyChart(<MonthlyWaterGraph logs={logs}/>)}>WATER</button>
        <button onClick={()=>setChosenMonthlyChart(<MonthlyMealGraph logs={logs}/>)}>MEALS</button>
        <button onClick={()=>setChosenMonthlyChart(<MonthlyExercisePie logs={logs}/>)}>EXERCISE</button>
        <button onClick={()=>setChosenMonthlyChart(<MonthlyMeditationPie logs={logs}/>)}>MEDITATION</button>
      <div/>
      </div>
       {chosenMonthlyChart=== "default" ? <MonthlySleepGraph logs={logs}/> : chosenMonthlyChart}
    </div>
  );
};

export default MonthlyStats;