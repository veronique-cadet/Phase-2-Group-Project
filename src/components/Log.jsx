import rangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { useState } from "react";

const Log = ({ logs, setLogs }) => {
  let currentDate = new Date().toJSON().slice(0, 10);
  // let newMonth = currentDate.getMonth() + 1;
  // let newYear = currentDate.getFullYear();
  // let newDay = currentDate.getDate();

  const [sleep, setSleep] = useState(0);
  const [water, setWater] = useState(0);
  const [food, setFood] = useState(0);
  const [exercise, setExercise] = useState(false);
  const [meditation, setMeditation] = useState(false);
  const [mood, setMood] = useState(1);
  const [date, setDate] = useState(currentDate);

  const getBackgroundSizeSleep = () => {
    return { backgroundSize: `${(sleep * 100) / 12}% 100%` };
  };
  const getBackgroundSizeWater = () => {
    return { backgroundSize: `${(water * 100) / 16}% 100%` };
  };
  const getBackgroundSizeFood = () => {
    return { backgroundSize: `${(food * 100) / 7}% 100%` };
  };

  const newSubmit = {
    date: {
      month: date,
      day: date,
      year: date,
    },
    sleep: sleep,
    water: water,
    meals: food,
    exercise: exercise,
    meditation: meditation,
    mood: mood,
  };

  const handleSubmit = () => {
    fetch("http://localhost:3005/logs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newSubmit),
    })
      .then((response) => response.json())
      .then((data) => {
        setLogs([...logs, newSubmit]);
      });
  };
  return (
    <div className="other-pages">
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
        <p className="form-title">Log</p>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        ></input>
        <div className="slider">
          <label className="form-text" for="sleep">
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
          <label className="form-text" for="water">
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
          <label className="form-text" for="food">
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
          <label id="exercise" className="form-text" for="exercise">
            Exercise
          </label>
          <input
            className="checkbox"
            type="checkbox"
            value={exercise}
            onChange={(e) => setExercise(e.target.checked)}
          />
          <label id="meditation" className="form-text" for="meditation">
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
          <label id="mood" className="form-text" for="mood">
            Mood
          </label>
          <input
            className="mood"
            type="number"
            min={1}
            max={5}
            value={mood}
            onChange={(e) => setMood(e.target.valueAsNumber)}
          />
        </div>
        <button onClick={() => handleSubmit()} id="form-submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Log;
