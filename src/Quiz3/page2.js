import { useState } from "react";
import React from "react";

export default function Page2(props) {
  const { city, setCity } = props;
  const { country, setCountry } = props;
  const [newState, setNewState] = useState(0);
  function inputNewState() {
    debugger;
    const value = newState + 1;
    setNewState(value);
  }
  return (
    <>
      <button type="button" onClick={inputNewState}>
        clear
      </button>
      <div key={newState}>
        <input
          id="btnIdCountry"
          type="text"
          name="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
          placeholder="Country"
        />
        <input
          type="text"
          name="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="City"
        />
      </div>
    </>
  );
}
