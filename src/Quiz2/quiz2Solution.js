import React from "react";
import { useState } from "react";
import ListInfo from "./listShow";
import FilterInput from "./inputForChange";

export default function Quiz2Solution() {
  const [filterUse, setFilterUse] = useState("April");

  return (
    <>
      <FilterInput filterUse={filterUse} setFilterFrom={setFilterUse} />
      <ListInfo filterFromUser={filterUse} />
    </>
  );
}
