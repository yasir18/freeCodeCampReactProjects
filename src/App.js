import React from "react";
import "./App.css";
import RandomQuoteGenerator from "./components/RandomQuoteGenerator";
import MarkdownPreviewer from "./components/MarkdownPreviewer";
import DrumMachine from "./components/DrumMachine";
import Calculator from "./components/Calculator";
import Home from "./components/HomeComponent";
import { Switch, Route } from "react-router-dom";

function App() {
  return (
    // <div className="container">
    //   <RandomQuoteGenerator />
    // </div>
    <Switch>
      <Route path="/" component={Home} exact />
      <Route path="/randomQuoteGenerator" component={RandomQuoteGenerator} />
      <Route path="/markdownPreviewer" component={MarkdownPreviewer} />
      <Route path="/drumMachine" component={DrumMachine} />
      <Route path="/calculator" component={Calculator} />
    </Switch>
    // <div
    //   style={{
    //     display: "flex",
    //     alignItems: "center",
    //     justifyContent: "space-around",
    //     width: "100%",
    //   }}
    // >
    //   {/* <RandomQuoteGenerator /> */}
    //   <MarkdownPreviewer />
    // </div>
  );
}

export default App;
