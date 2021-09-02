import { useState } from "react";
import React from "react";

export default function Page1(props) {
  const { username, setUsername } = props;
  const { password, setPassword } = props;

  return (
    <>
      <input
        type="text"
        name="username"
        value={username}
        placeholder="Username"
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        name="password"
        value={password}
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
    </>
  );
}
