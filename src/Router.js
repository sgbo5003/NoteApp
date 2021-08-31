import React, { useState } from "react";
import { Route, Switch } from "react-router";
import Main from "../src/components/Main";
import Write from "../src/components/Write";
import WriteEdit from "./components/WriteEdit";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={Main} />
      <Route path="/Write" component={Write} />
      <Route path="/WriteEdit" component={WriteEdit} />
    </Switch>
  );
};

export default Router;
