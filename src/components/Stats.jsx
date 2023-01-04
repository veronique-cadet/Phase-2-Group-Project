import SelectTimeBar from "./SelectTimeBar";
import { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";

import DailyComponent from "./DailyComponent";
import WeeklyComponent from "./WeeklyComponent";
import MonthlyComponent from "./MonthlyComponent";

const Stats = ({ setHome, logs, setLogs }) => {

  
  setHome(false);

  useEffect(() => {
    fetch("http://localhost:3005/logs")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setLogs(data)
      }
      );
  }, []);

  return (
    <div className="other-pages">
      <div>
          <SelectTimeBar />
      </div>
        <Switch>
        <Route path="/stats/daily-stats">
          <DailyComponent logs={logs}/>
        </Route>
        <Route path="/stats/weekly-stats">
          <WeeklyComponent logs={logs}/>
      </Route>
      <Route path="/stats/monthly-stats">
          <MonthlyComponent logs={logs}/>
      </Route>
      </Switch>
    </div>
  )

};

export default Stats;
