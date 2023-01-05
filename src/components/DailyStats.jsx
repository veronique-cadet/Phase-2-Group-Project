import { useState } from "react";

const DailyStats = ({ log, date }) => {
  const oneMood = "/assets/one.png";
  const twoMood = "/assets/two.png";
  const threeMood = "/assets/three.png";
  const fourMood = "/assets/four.png";
  const fiveMood = "/assets/five.png";
  const checkMark = "/assets/checkmark.png";
  const exMark = "/assets/xmark.png";

  const setMoodIcon = () => {
    if (log.mood === 1) {
      return oneMood;
    } else if (log.mood === 2) {
      return twoMood;
    } else if (log.mood === 3) {
      return threeMood;
    } else if (log.mood === 4) {
      return fourMood;
    } else if (log.mood === 5) {
      return fiveMood;
    } else return oneMood;
  };

  const setCheckorX = () => {
    if (log.meditation === true) {
      return checkMark;
    } else if (log.meditation === false) {
      return exMark;
    } else return oneMood;
  };

  const setCheckorXTwo = () => {
    if (log.exercise === true) {
      return checkMark;
    } else if (log.exercise === false) {
      return exMark;
    } else return oneMood;
  };
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
          <p className="key">Exercised?&nbsp;</p>{" "}
          {log.exercise ? (
            <img className="daily-image" src={setCheckorXTwo()} />
          ) : (
            <img className="daily-image-two" src={setCheckorXTwo()} />
          )}
        </p>
        <p className="daily-keys">
          <p className="key">Meditated?&nbsp;</p>{" "}
          {log.meditation ? (
            <img className="daily-image" src={setCheckorX()} />
          ) : (
            <img className="daily-image-two" src={setCheckorX()} />
          )}
        </p>
        <p className="daily-keys">
          <p className="key">Mood:&nbsp;</p>{" "}
          <img className="daily-image-three" src={setMoodIcon()} />
        </p>
      </div>
    </div>
  );
};

export default DailyStats;
