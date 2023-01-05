import React, {useState} from "react";
import WeeklySleepGraph from "./WeeklySleepGraph";
import WeeklyMoodPie from "./WeeklyMoodPie";
import WeeklyWaterGraph from "./WeeklyWaterGraph";
import WeeklyMealGraph from "./WeeklyMealGraph";


const WeeklyStats = ({logs}) => {

  const [chosenWeeklyChart, setChosenWeeklyChart] = useState("default")
  // const [buttonClass, setButtonClass] = useState("select-category")

  return (
    <div>
      <div className="category-bar">
        <h2>Your Weekly Digest:</h2>
        <button 
          className= "select-category"
          onClick={()=>{setChosenWeeklyChart(<WeeklySleepGraph logs={logs}/>)
          // {buttonClass ="select-category" ? (setButtonClass("selected-category")) : (setButtonClass("select-category"))} 
          //   
          }}
          >SLEEP
        </button>
        <button 
          className="select-category" 
          onClick={()=>setChosenWeeklyChart(<WeeklyMoodPie logs={logs}/>)}
          >MOOD
        </button>
        <button 
          className="select-category" 
          onClick={()=>setChosenWeeklyChart(<WeeklyWaterGraph logs={logs}/>)}
          >WATER
        </button>
        <button 
          className="select-category" 
          onClick={()=>setChosenWeeklyChart(<WeeklyMealGraph logs={logs}/>)}
          >MEALS
        </button>
      <div/>
      </div>
       {chosenWeeklyChart=== "default" ? <WeeklySleepGraph logs={logs}/> : chosenWeeklyChart}          
    </div>
  );
};

export default WeeklyStats;