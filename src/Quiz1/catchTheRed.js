import { useState } from "react";
import React from "react";
import ThePlayer from "./thePlayer";

export default function CatchTheRed() {
  const startDict = {
    0: "#808080",
    1: "#808080",
    2: "#808080",
    3: "#808080",
    4: "#808080",
    5: "#808080",
    6: "#808080",
    7: "#808080",
    8: "#808080",
    9: "#FF4500",
  };
  const [colorOfPlayer, setColorOfPlayer] = useState(startDict);
  const [scoure, setScoure] = useState(0);
  const rndInt = Math.floor(Math.random() * 8) + 1;

  function changeTheColorVal(key) {
    const newDict = { ...colorOfPlayer };
    if (newDict[key] === "#FF4500") {
      newDict[key] = "#808080";
      newDict[rndInt] = "#FF4500";
      upCounter();
    } else {
      downCounter();
    }

    setColorOfPlayer(newDict);
  }

  function upCounter() {
    setScoure((value) => value + 10);
  }

  function downCounter() {
    setScoure((value) => value - 5);
  }
  function newGame() {
    setScoure(0);
    setColorOfPlayer(startDict);
  }

  return (
    <>
      {Object.keys(colorOfPlayer).map((id) => {
        return (
          <ThePlayer
            key={id}
            func={changeTheColorVal}
            idPlayer={id}
            color={colorOfPlayer[id]}
          />
        );
      })}
      <br />
      <br />
      <div>{scoure}</div>
      <button onClick={newGame}>New Game</button>
    </>
  );
}
