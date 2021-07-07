import React from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import "./App.css";
// Main pages

import Home from "./Home";
import Sales from "./Sales";
const FourOhFour = () => {
  const { pathname } = useLocation();

  return (
    <h3>
      No match for <code>{pathname}</code>
    </h3>
  );
};
function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Sales" component={Sales} />
        <Route path="*">
          <FourOhFour />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
