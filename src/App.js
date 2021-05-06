import React from "react";
//---------Router-------------
import { Switch, Route } from "react-router-dom";
//----------------------------

import "./App.css";
import HomePage from "./pages/homepage/homepage.com";
import ShopPage from "./pages/shop/shop.com";
import Header from "./components/header/header.com";
import SignInAndUp from "./pages/signin-signup/signin-signup.com";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/signin" component={SignInAndUp} />
      </Switch>
    </div>
  );
}

export default App;
