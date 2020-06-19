import React from "react";
import "./App.css";
import RandomQuoteGenerator from "./components/RandomQuoteGenerator";
import MarkdownPreviewer from "./components/MarkdownPreviewer";

function App() {
  return (
    // <div className="container">
    //   <RandomQuoteGenerator />
    // </div>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-around",
        width: "100%",
      }}
    >
      {/* <RandomQuoteGenerator /> */}
      <MarkdownPreviewer />
    </div>
  );
}

export default App;
