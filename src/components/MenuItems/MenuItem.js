import React from "react";
import data from "../../feeds.json";
import burger from "../../assets/burger.jpeg";
import Card from "../UI/Card/Card";
import classes from "./MenuItem.module.css";

const MenuItem = () => {
  return (
    <div className={classes.grid}>
      {data.map((item) => (
        <div className={classes.shadow}>
          <img
            src="../../assets/burger.jpeg"
            style={{ height: "30vh", width: "20vw" }}
          />
          <p>{item.name}</p>
          <p>{item.price}</p>
          <div className={classes.button}>
            <button className={classes.btn1}>+</button>
            <button className={classes.btn2}>-</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MenuItem;
