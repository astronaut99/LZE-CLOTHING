import React from "react";
//---------Router-------------
import { Switch, Route } from "react-router-dom";
//----------------------------

import "./App.css";
import HomePage from "./pages/homepage/homepage.com";
import ShopPage from "./pages/shop/shop.com";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
