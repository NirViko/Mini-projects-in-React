import { useState } from "react";
import React from "react";
import styled from "styled-components";
export default function Page3(props) {
  const { city } = props;
  const { country } = props;
  const { username } = props;
  const { password } = props;

  return (
    <>
      <ul>
        <li>{city}</li>
        <li>{country}</li>
        <li>{username}</li>
        <li>{password}</li>
      </ul>
    </>
  );
}
