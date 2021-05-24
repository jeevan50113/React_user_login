import React, { useEffect, useState } from "react";

export default function Autocomp() {
  let sugg = ["Aarna", "Avind", "aarna", "unq coder", "sahith", "srujana"];

  const [allsugg, setallsugg] = useState();

  const suggestions = [];

  const Auto = (event) => {
    sugg.forEach((x) => {
      if (
        x.substr(0, event.target.value.length).toUpperCase() ===
        event.target.value.toUpperCase()
      ) {
        suggestions.push(x);
        setallsugg(
          suggestions.map((x, index) => {
            return <p key={index}>{x}</p>;
          })
        );
        console.log(suggestions);
      } else {
      }
    });
  };

  return (
    <div>
      <h1>hi prends</h1>
      <input className="auto" onChange={(event) => Auto(event)} />
      {allsugg}
    </div>
  );
}
