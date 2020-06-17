import React from "react";
import "./App.css";
import RandomQuoteGenerator from "./components/RandomQuoteGenerator";

function App() {
  return (
    // <div className="container">
    //   <RandomQuoteGenerator />
    // </div>
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <RandomQuoteGenerator />
    </div>
  );
}

export default App;
