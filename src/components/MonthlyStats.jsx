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
    <div className="chart-container">
      <h2 className="stat-title">YOUR MONTHLY DIGEST</h2>
        <div>
        <button className="select-category" onClick={()=>setChosenMonthlyChart(<MonthlySleepGraph logs={logs}/>)}>SLEEP</button>
        <button className="select-category" onClick={()=>setChosenMonthlyChart(<MonthlyMoodPie logs={logs}/>)}>MOOD</button>
        <button className="select-category" onClick={()=>setChosenMonthlyChart(<MonthlyWaterGraph logs={logs}/>)}>WATER</button>
        <button className="select-category" onClick={()=>setChosenMonthlyChart(<MonthlyMealGraph logs={logs}/>)}>MEALS</button>
        <button className="select-category" onClick={()=>setChosenMonthlyChart(<MonthlyExercisePie logs={logs}/>)}>EXERCISE</button>
        <button className="select-category" onClick={()=>setChosenMonthlyChart(<MonthlyMeditationPie logs={logs}/>)}>MEDITATION</button>
      <div/>
      </div>
       {chosenMonthlyChart=== "default" ? <MonthlySleepGraph logs={logs}/> : chosenMonthlyChart}
    </div>
  );
};

export default MonthlyStats;