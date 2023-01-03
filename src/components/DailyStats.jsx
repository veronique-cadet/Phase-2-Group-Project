import { useState } from "react";

const DailyStats = ({ log, date }) => {
  return (
    <div className="daily-stats">
      <p>
        {date.month} {date.day},{date.year}
      </p>
      <p>Sleep: {log.sleep} hours</p>
      <p>Water: {log.water} cups</p>
      <p>Meals: {log.meals} meals</p>
      <p>Exercied? {log.Exercise ? "Yes" : "No"}</p>
      <p>Meditated? {log.Meditation}</p>
      <p>Mood: {log.Mood}/5</p>
    </div>
  );
};

export default DailyStats;
