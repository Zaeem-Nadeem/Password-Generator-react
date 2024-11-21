import React, { useContext, useEffect } from "react";
import { userContext } from "../store/stateHandle";

function Select() {
  const { length, setLength, number, character, setCharacter, setNumber } =
    useContext(userContext);
    const handleChange = (e) => {
      console.log(e.target.value);
      setLength(Number(e.target.value));
    };

  return (
    <div className="container">
      <div className="field-container">
        <input
          className="range-input"
          readOnly
          autoFocus
          type="range"
          min={8}
          max={60}
          value={length}
          onChange={handleChange}
        />
        <label className="range-label">{`Length: ${length}`}</label>
      </div>

      <div className="checkbox-container">
        <input
          className="checkbox"
          type="checkbox"
          id="number"
          value={number}
          onChange={() => {
            setNumber((prev)=>!prev)
          }}
        />
        <label className="checkbox-label" htmlFor="number">
          Number
        </label>
        <input
          className="checkbox"
          type="checkbox"
          id="character"
          value={character}
          onChange={() => {
            setCharacter((prev)=>!prev)
          }}
        />
        <label className="checkbox-label" htmlFor="character">
          Character
        </label>
      </div>
    </div>
  );
}

export default Select;
