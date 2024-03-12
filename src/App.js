import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Homepage from "./Pages/Homepage/Homepage";
import About from "./Pages/About/About";
import Games from "./Pages/Games/Games";
import Notfound from "./Pages/Notfound/Notfound";
import ContactUs from "./Pages/ContactUs/ContactUs";
import TugOfWar from "./Pages/Details/Game/TugOfWar";
import EggAndSpoonRace from "./Pages/Details/Game/EggAndSpoonRace";
import GiantYardTwister from "./Pages/Details/Game/GiantYardTwister";
import HulaHoopCompetition from "./Pages/Details/Game/HulaHoopCompetition";
import Gallery from "./Pages/Gallery/Gallery";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" Component={Homepage} />
        <Route path="/about" Component={About} />
        <Route path="/games" Component={Games} />
        <Route path="/gallery" Component={Gallery} />
        <Route path="/contact-us" Component={ContactUs} />
        <Route path="*" Component={Notfound} />
        <Route path="/games/tug-of-war" Component={TugOfWar} />
        <Route
          path="/games/hula-hoop-competition"
          Component={HulaHoopCompetition}
        />
        <Route path="/games/giant-yard-twister" Component={GiantYardTwister} />
        <Route path="/games/egg-and-spoon-race" Component={EggAndSpoonRace} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
