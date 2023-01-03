import DailyStats from "./DailyStats";
import WeeklyStats from "./WeeklyStats";
import { useEffect, useState } from "react";

const Stats = ({ setHome }) => {
  const [logs, setLogs] = useState([]);
  setHome(false);

  useEffect(() => {
    fetch("http://localhost:3005/logs")
      .then((response) => response.json())
      .then((data) => setLogs(data));
  }, []);

  const dailyLogs = logs.map((log) => {
    return <DailyStats log={log} key={log.id} date={log.date} />;
  });

  return (
    <div className="other-pages">
      <div className="daily-container">
        <h1 className="daily-title">Daily Stats</h1>
        {dailyLogs}
      </div>
      <WeeklyStats />
    </div>
  );
};

export default Stats;
