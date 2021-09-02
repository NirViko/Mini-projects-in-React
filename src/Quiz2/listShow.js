import React from "react";
import { useState } from "react";

export default function ListInfo(props) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const { filterFromUser } = props;

  const getAllItemsFromFilter = months.filter((month) => {
    return filterFromUser === month;
  });

  return (
    <>
      <ul>
        {getAllItemsFromFilter.map((month) => {
          return <li>{month}</li>;
        })}
      </ul>
    </>
  );
}
