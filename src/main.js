import React from "react";
import ReactDOM from "react-dom";
import "../css/main.css";
import Quiz3 from "./Quiz3/quiz3Solution";
import PrintAndMove from "./Quiz21/printAndMove";
import Register from "./Quiz21/register";
const App = () => {
  return (
    <>
      <Register />
    </>
  );
};

// main.js
const root = document.querySelector("main");
ReactDOM.render(<App />, root);
