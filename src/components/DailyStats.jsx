import { useState } from "react";

const DailyStats = ({ log, date }) => {
  return (
    <div className="daily-stats">
      <p className="daily-date-header">
        {date.month} {date.day},{date.year}
      </p>
      <div className="daily-info_containter">
        <p className="daily-keys">
          {" "}
          <p className="key">Sleep:&nbsp;</p> {log.sleep} hours
        </p>
        <p className="daily-keys">
          <p className="key">Water:&nbsp;</p> {log.water} cups
        </p>
        <p className="daily-keys">
          <p className="key">Meals:&nbsp;</p> {log.meals} meals
        </p>
        <p className="daily-keys">
          <p className="key">Exercied?&nbsp;</p> {log.exercise ? "Yes" : "No"}
        </p>
        <p className="daily-keys">
          <p className="key">Meditated?&nbsp;</p>{" "}
          {log.meditation ? "Yes" : "No"}
        </p>
        <p className="daily-keys">
          <p className="key">Mood:&nbsp;</p> {log.mood}/5
        </p>
      </div>
    </div>
  );
};

export default DailyStats;
