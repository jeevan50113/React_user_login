import React, { useState, useEffect } from "react";

export default function Usecase() {
  const check = (e) => {
    e.preventDefault();
    const us_info = localStorage.getItem("userinfo");
    const us = JSON.parse(us_info);

    user === us.username && pass === us.password
      ? sett("login sucess")
      : alert("incorecct password or user name");
  };

  const [user, setuser] = useState();
  const [pass, setpass] = useState();
  const [t, sett] = useState();

  return (
    <div>
      <form className="fr">
        <h1>username</h1>
        <input
          typr="text"
          value={user}
          onChange={(e) => {
            setuser(e.target.value);
          }}
        ></input>
        <h1>password</h1>
        <input
          typr="number"
          value={pass}
          onChange={(e) => {
            setpass(e.target.value);
          }}
        ></input>
        <button onClick={check} className="bt">
          check
        </button>
        <h1>status</h1>
        {t}
      </form>
    </div>
  );
}
