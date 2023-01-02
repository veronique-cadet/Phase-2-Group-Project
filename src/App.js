import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Log from "./components/Log";
import Stats from "./components/Stats";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Log />
      <Stats />
      <Footer />
    </div>
  );
}

export default App;
