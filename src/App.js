import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import { Dashboard } from './Dashboard';
import { HackerNews } from './HackerNews'
import { HooksExamples } from './HooksExamples';
import { Login } from './Login.js';
import { Register } from './Register'
export default function App() {
  return (
    <div className="App">
    <Router>
      {/* <div>
        <ul>
        <li>
          <Link to="/">Dashboard</Link>
          </li>
          <li>
          <Link to="/register">Register</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
          <Link to="/HooksExamples">HooksExamples</Link>
          </li>
        </ul>

        <hr /> */}

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
        <Route exact path="/" component={Dashboard} >
            {/* <Dashboard /> */}
          </Route>
          <Route exact path="/register" component={Register} >
            {/* <Register /> */}
          </Route>
          <Route path="/login" component={Login}>
            {/* <Login /> */}
          </Route>
          <Route path="/HooksExamples" component={HooksExamples}>
          {/* <HooksExamples /> */}
          </Route>
          <Route path="/HackerNews" component={HackerNews}>
          {/* <HooksExamples /> */}
          </Route>
        </Switch>
    </Router>
    </div>
  );
}