import React from "react";
import { useState } from "react";

export default function FilterInput(props) {
  const { setFilterFrom } = props;
  const { filterUse } = props;

  function setValue(e) {
    setFilterFrom(e.target.value);
  }

  return <input placeholder="Filter here!" onChange={setValue} />;
}
