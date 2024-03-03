import "./App.css";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Homepage from "./Pages/Homepage/Homepage";
import About from "./Pages/About/About";
import Games from "./Pages/Games/Games";
import Locations from "./Pages/Locations/Locations";
import News from "./Pages/News/News";
import Feedback from "./Pages/Feedback/Feedback";
import Notfound from "./Pages/Notfound/Notfound";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" Component={Homepage} />
        <Route path="/about" Component={About} />
        <Route path="/games" Component={Games} />
        <Route path="/locations" Component={Locations} />
        <Route path="/news" Component={News} />
        <Route path="/feedback" Component={Feedback} />
        <Route path="/notfound" Component={Notfound} />
      </Routes>
    </div>
  );
}

export default App;
