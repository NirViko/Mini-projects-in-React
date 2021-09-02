import { useState } from "react";
import React from "react";
import Page1 from "./page1";
import Page2 from "./page2";
import Page3 from "./page3";
export default function Quiz3() {
  const [counterIfNext, setCounterIfNext] = useState(-1);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [trueOrFalsePage1, setTrueOrFalsePage1] = useState([
    false,
    false,
    false,
  ]);

  function rightOrWrong1(getTheVal) {
    const newArr = [...trueOrFalsePage1];
    const value = counterIfNext + getTheVal;
    if (0 <= value && value < 3) {
      newArr[counterIfNext] = false;
      newArr[value] = true;
      setCounterIfNext(value);
      setTrueOrFalsePage1(newArr);
    }
  }

  return (
    <>
      <button type="button" id="preBtn" onClick={() => rightOrWrong1(-1)}>
        Previous
      </button>
      <button type="button" id="nextBtn" onClick={() => rightOrWrong1(1)}>
        Next
      </button>
      {trueOrFalsePage1[0] && (
        <Page1
          username={username}
          setUsername={setUsername}
          password={password}
          setPassword={setPassword}
        />
      )}
      {trueOrFalsePage1[1] && (
        <Page2
          country={country}
          setCountry={setCountry}
          city={city}
          setCity={setCity}
        />
      )}
      {trueOrFalsePage1[2] && (
        <Page3
          username={username}
          password={password}
          country={country}
          city={city}
        />
      )}
    </>
  );
}
