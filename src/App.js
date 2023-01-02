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
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/log">
          <Log />
        </Route>
        <Route path="/stats">
          <Stats />
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
