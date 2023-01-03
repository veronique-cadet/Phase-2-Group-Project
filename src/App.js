import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Log from "./components/Log";
import Stats from "./components/Stats";
import Header from "./components/Header";
import GetZen from "./components/GetZen";
import { Switch, Route } from "react-router-dom";

function App() {
  const [home, setHome] = useState(true);
  return (
    <div>
      <Header home={home} />
      <Switch>
        <Route exact path="/">
          <Home setHome={setHome} />
        </Route>
        <Route path="/log">
          <Log />
        </Route>
        <Route path="/stats">
          <Stats setHome={setHome} />
        </Route>
        <Route path="/getzen">
          <GetZen />
        </Route>
        <Route path="*">
          <h1>404 not found namaste</h1>
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
