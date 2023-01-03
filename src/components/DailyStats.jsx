import { useState } from "react";

const DailyStats = ({ log, date }) => {
  return (
    <div className="daily-stats">
      <strong>
        <p>
          {date.month} {date.day},{date.year}
        </p>
      </strong>
      <p>Sleep: {log.sleep} hours</p>
      <p>Water: {log.water} cups</p>
      <p>Meals: {log.meals} meals</p>
      <p>Exercied? {log.exercise ? "Yes" : "No"}</p>
      <p>Meditated? {log.meditation ? "Yes" : "No"}</p>
      <p>Mood: {log.mood}/5</p>
    </div>
  );
};

export default DailyStats;
