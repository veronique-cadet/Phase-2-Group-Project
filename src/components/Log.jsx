import rangeSlider from "react-range-slider-input";
import moment from "moment";
import "react-range-slider-input/dist/style.css";
import { useState } from "react";

const Log = ({ logs, setLogs }) => {
  let currentDate = moment().format("MMMM Do, YYYY");
  let newMonth = moment().format("MMMM");
  let newYear = moment().format("YYYY");
  let newDay = moment().format("D");

  const [sleep, setSleep] = useState(0);
  const [water, setWater] = useState(0);
  const [food, setFood] = useState(0);
  const [exercise, setExercise] = useState(false);
  const [meditation, setMeditation] = useState(false);
  const [mood, setMood] = useState(1);
  const [date, setDate] = useState(currentDate);
  const [isClicked, setIsClicked] = useState(true);

  const getBackgroundSizeSleep = () => {
    return { backgroundSize: `${(sleep * 100) / 12}% 100%` };
  };
  const getBackgroundSizeWater = () => {
    return { backgroundSize: `${(water * 100) / 16}% 100%` };
  };
  const getBackgroundSizeFood = () => {
    return { backgroundSize: `${(food * 100) / 7}% 100%` };
  };

  // const loadValues = () => {
  //   localStorage.getItem(u);
  // };

  const newSubmit = {
    date: {
      month: newMonth,
      day: parseInt(newDay),
      year: parseInt(newYear),
    },
    sleep: sleep,
    water: water,
    meals: food,
    exercise: exercise,
    meditation: meditation,
    mood: mood,
  };

  const handleSubmit = () => {
    fetch("http://localhost:3001/logs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSubmit),
    })
      .then((response) => response.json())
      .then(() => {
        setLogs([...logs, newSubmit]);
      });
  };

  // const udpateValue = () => {
  //   localStorage.setItem(sleep);
  // };

  return (
    <div id="form">
      {/* <h2 className="quote">
        “Everything you can imagine is real.”―Pablo Picasso
      </h2> */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
        className="form"
      >
        <p className="form-title">Log for the day!</p>
        <label className="form-text">{date}</label>
        {/* <input
          type="date"
          value={date}
          className="date"
          onChange={(e) => setDate(e.target.value)}
        ></input> */}
        <div className="slider">
          <label className="form-text" htmlFor="sleep">
            Sleep
          </label>
          <input
            value={sleep}
            max={12}
            id="range"
            type="range"
            onChange={(e) => setSleep(e.target.valueAsNumber)}
            style={getBackgroundSizeSleep()}
          />
          <p className="range-value">{sleep} hours</p>
        </div>
        <div className="slider">
          <label className="form-text" htmlFor="water">
            Water
          </label>
          <input
            id="range"
            type="range"
            value={water}
            onChange={(e) => setWater(e.target.valueAsNumber)}
            max={16}
            style={getBackgroundSizeWater()}
          />
          <p className="range-value">{water} cups</p>
        </div>
        <div className="slider">
          <label className="form-text" htmlFor="food">
            Food&nbsp;
          </label>
          <input
            id="range"
            type="range"
            value={food}
            onChange={(e) => setFood(e.target.valueAsNumber)}
            max={7}
            style={getBackgroundSizeFood()}
          />
          <p className="range-value">{food} meals</p>
        </div>
        <div className="checkbox-div">
          <label id="exercise" className="form-text" htmlFor="exercise">
            Exercise
          </label>
          <input
            className="checkbox"
            type="checkbox"
            value={exercise}
            onChange={(e) => setExercise(e.target.checked)}
          />
          <label id="meditation" className="form-text" htmlFor="meditation">
            Meditation
          </label>
          <input
            className="checkbox"
            type="checkbox"
            value={meditation}
            onChange={(e) => setMeditation(e.target.checked)}
          />
        </div>
        <div className="mood-div">
          <label id="mood" className="form-text" htmlFor="mood">
            Mood
          </label>
          <img
            className="mood"
            type="image"
            src="/assets/one.png"
            onClick={(e) => {
              setMood(1);
            }}
          />
          <img
            className="mood"
            type="image"
            src="/assets/two.png"
            onClick={(e) => {
              setMood(2);
            }}
          />
          <img
            className="mood"
            type="image"
            src="/assets/three.png"
            onClick={(e) => {
              setMood(3);
              console.log(mood);
            }}
          />
          <img
            className="mood"
            type="image"
            src="/assets/four.png"
            onClick={(e) => {
              setMood(4);
            }}
          />
          <img
            className="mood"
            type="image"
            src="/assets/five.png"
            onClick={(e) => {
              setMood(5);
            }}
          />
        </div>
        {isClicked ? (
          <button onClick={() => setIsClicked(!isClicked)} id="form-submit">
            Submit Log
          </button>
        ) : (
          <button onClick={() => setIsClicked(!isClicked)} id="form-submit-two">
            Submitted!
          </button>
        )}
      </form>
    </div>
  );
};

export default Log;
