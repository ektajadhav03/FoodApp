import React, { useContext } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import AuthContext from "./context/auth-context";
import MenuItem from "./components/MenuItems/MenuItem";

function App() {
  const ctx = useContext(AuthContext);
  return (
    <>
      <MainHeader />
      <main>
        {!ctx.isLoggedIn && <Login />}
        {ctx.isLoggedIn && !ctx.showMenu && <Home />}
        {ctx.isLoggedIn && ctx.showMenu && <MenuItem />}
      </main>
    </>
  );
}

export default App;
