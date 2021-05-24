import React, { useEffect, useState } from "react";
import "./App.css";
import { Link } from "react-router-dom";

function Shop() {
  useEffect(() => {
    Get_api();
  }, []);

  const [item, setitem] = useState([]);

  const Get_api = async () => {
    const data = await fetch(
      "https://fortnite-api.theapinetwork.com/upcoming/get"
    );

    const item = await data.json();
    console.log(item.data[0]);
    setitem(item.data);
  };  

  //const f =

  return (
    <div className="container my-3  text-center">
      <button onClick={Get_api}>post</button>
      {/* {JSON.stringify(item[0])} */}

      {item.map((itams) => (
        //key are ust remove the unwany=ted errors in the console
        <h1 key={item.itemId}>
          <Link to={"/shop/&{item.itemId}"}>{itams.item.name}</Link>
        </h1>
      ))}
    </div>
  );
}

export default Shop;
