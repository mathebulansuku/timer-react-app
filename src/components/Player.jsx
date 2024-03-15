import { useState } from "react";

export default function Player() {
  const [playerName, setPlayerName] = useState("");
  const [submitName, setSubmitName] = useState(false);

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  function handleClick() {
    setSubmitName(true);
  }

  return (
    <section id="player">
      <h2>Welcome {submitName ? playerName : "Unknown Entity"}</h2>
      <p>
        <input type="text" onChange={handleChange} value={playerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
