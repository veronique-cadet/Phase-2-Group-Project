import React, { useState } from "react";
import WeeklySleepGraph from "./WeeklySleepGraph";
import WeeklyMoodPie from "./WeeklyMoodPie";
import WeeklyWaterGraph from "./WeeklyWaterGraph";
import WeeklyMealGraph from "./WeeklyMealGraph";
import WeeklyExercisePie from "./WeeklyExercisePie";
import WeeklyMeditationPie from "./WeeklyMeditationPie";

const WeeklyStats = ({ logs }) => {
  const [chosenWeeklyChart, setChosenWeeklyChart] = useState("default");
  // const [buttonClass, setButtonClass] = useState("select-category")

  const button = (but) => {
    if (but === chosenWeeklyChart)
      return {
        className: "select-category-two",
      };
    else {
      return "select-category";
    }
  };
  return (
    <div className="chart-container">
      <div>
        <h2 className="stat-title">YOUR WEEKLY DIGEST</h2>
        <button
          className="select-category"
          onClick={() => setChosenWeeklyChart(<WeeklySleepGraph logs={logs} />)}
        >
          SLEEP
        </button>
        <button
          className="select-category"
          onClick={() => setChosenWeeklyChart(<WeeklyMoodPie logs={logs} />)}
        >
          MOOD
        </button>
        <button
          className="select-category"
          onClick={() => setChosenWeeklyChart(<WeeklyWaterGraph logs={logs} />)}
        >
          WATER
        </button>
        <button
          className="select-category"
          onClick={() => setChosenWeeklyChart(<WeeklyMealGraph logs={logs} />)}
        >
          MEALS
        </button>
        <button
          className="select-category"
          onClick={() =>
            setChosenWeeklyChart(<WeeklyExercisePie logs={logs} />)
          }
        >
          EXERCISE
        </button>
        <button
          className="select-category"
          onClick={() =>
            setChosenWeeklyChart(<WeeklyMeditationPie logs={logs} />)
          }
        >
          MEDITATION
        </button>
      </div>
      {chosenWeeklyChart === "default" ? (
        <WeeklySleepGraph logs={logs} />
      ) : (
        chosenWeeklyChart
      )}
    </div>
  );
};

export default WeeklyStats;
