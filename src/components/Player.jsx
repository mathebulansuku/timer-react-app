import { useState } from "react";

export default function Player() {
  const [playerName, setPlayerName] = useState(null);
  const [submitName, setSubmitName] = useState(false);

  function handleClick(name) {
    submitName(true);
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
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
