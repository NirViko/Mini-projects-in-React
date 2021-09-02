import { useState } from "react";
import React from "react";

export default function ThePlayer(props) {
  const { func } = props;
  const { idPlayer } = props;
  const { color } = props;

  return (
    <div
      onClick={() => {
        func(idPlayer);
      }}
      style={{ background: color }}
    />
  );
}
