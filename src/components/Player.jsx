import { useState, useRef } from "react";

export default function Player() {
  const inputName = useRef();

  const [playerName, setPlayerName] = useState("");

  function handleClick() {
    setPlayerName(inputName.current.value);
  }

  return (
    <section id="player">
      <h2>Welcome {playerName ? playerName : "Unknown Entity"}</h2>
      <p>
        <input ref={inputName} type="text" />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
