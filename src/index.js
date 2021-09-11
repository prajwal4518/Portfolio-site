import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./index.css";
import App from "./App";
import ProjectInfo from "./Pages/Project Info/ProjectInfo";
import reportWebVitals from "./reportWebVitals";
import Railway from "./Pages/Project Info/Railways/Railway";

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/ProjectInfo" component={ProjectInfo} />
      <Route path="/Railway" component={Railway} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
