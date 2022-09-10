import React, { useContext } from "react";
import AuthContext from "../../context/auth-context";
import MenuItem from "../MenuItems/MenuItem";
import Button from "../UI/Button/Button";

import Card from "../UI/Card/Card";
import classes from "./Home.module.css";

const Home = (props) => {
  const ctx = useContext(AuthContext);
  return (
    <>
      <Card className={classes.home}>
        <h2>Welcome to Food's</h2>
        <h2>Kitchen</h2>
        <Button onClick={ctx.showMenu}>GO TO MENU</Button>
      </Card>
    </>
  );
};

export default Home;
