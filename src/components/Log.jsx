import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

const Log = () => {
  return (
    <div className="other-pages">
      {/* <h2 className="quote">
        “Everything you can imagine is real.”―Pablo Picasso
      </h2> */}
      <form className="form">
        <p className="form-title">Log</p>
        <label className="form-text" for="sleep">
          Sleep:
        </label>
        <input id="range" type="range" />
        <label className="form-text" for="water">
          Water:
        </label>
        <input id="range" type="range" />
        <label className="form-text" for="food">
          Food:
        </label>
        <input id="range" type="range" />
        <div className="checkbox-div">
          <label className="form-text" for="exercise">
            Exercise:
          </label>
          <input type="checkbox" />
          <label id="meditation" className="form-text" for="meditation">
            Meditation:
          </label>
          <input type="checkbox" />
        </div>
        <label id="mood" className="form-text" for="mood">
          Mood:
        </label>
        <input type="text" />
        <button id="form-submit">Submit</button>
      </form>
    </div>
  );
};

export default Log;
