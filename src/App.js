import "./App.css";
import Hill from "./icons/Hill";
import Stars from "./icons/Stars";
import Card from "./components/Card";
import { useState } from "react";

function App() {
  const [second, setSecond] = useState(5);
  const [minutes, setMinutes] = useState(5);
  const [hours, setHours] = useState(12);

  setTimeout(() => {
    if (second > 0 && hours > 0 && minutes > 0) setSecond(second - 1);
    if (second === 0) {
      setMinutes(minutes - 1);
      setSecond(59);
    }
    if (minutes === 0) {
      setHours(hours - 1);
      setMinutes(59);
    }
  }, 1000);

  return (
    <div className="App">
      <div className="HillContainer">
        <Stars />
        <Hill />
      </div>
      <h1>We're Launching Soon</h1>
      <div className="Card">
        <Card timer={8} clock="DAYS" />
        <Card timer={hours} clock="HOURS" />
        <Card timer={minutes} clock="MINUTES" />
        <Card timer={second} clock="SECONDS" />
      </div>
    </div>
  );
}

export default App;
