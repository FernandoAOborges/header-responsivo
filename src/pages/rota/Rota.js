import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "../header/Header";
import Main from "../main/Main";

const Rota = () => {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/">
          <Main />
        </Route>
      </Switch>
    </Router>
  );
};

export default Rota;
