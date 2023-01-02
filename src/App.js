import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Log from "./components/Log";
import Stats from "./components/Stats";
import GetZen from "./components/GetZen.jsx";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Log />
      <Stats />
      <GetZen />
      <Footer />
    </div>
  );
}

export default App;
