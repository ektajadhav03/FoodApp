import React, { useContext } from "react";

import Navigation from "./Navigation";
import classes from "./MainHeader.module.css";
import AuthContext from "../../context/auth-context";

const MainHeader = (props) => {
  const ctx = useContext(AuthContext);
  return (
    <header className={classes["main-header"]}>
      <h1>Food's Restaurant</h1>
      <Navigation onLogout={ctx.showMenu} />
    </header>
  );
};

export default MainHeader;
