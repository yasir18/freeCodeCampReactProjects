import React, { useState } from "react";
import { Container } from "reactstrap";

const RandomQuoteGenerator = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  React.useEffect(() => {
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
        console.log(`${data.content} —${data.author}`);
      });
  }, []);

  const newQuote = (e) => {
    console.log("inside new Quote");
    fetch("https://api.quotable.io/random")
      .then((response) => response.json())
      .then((data) => {
        setQuote(data.content);
        setAuthor(data.author);
        console.log(`${data.content} —${data.author}`);
      });
  };

  return (
    <div style={{ width: "50rem" }}>
      <h2>Random Quote Generator</h2>
      <div id="quote-box">
        <div class="card">
          <div
            class="card-header"
            style={{
              display: "flex",
            }}
          >
            Quote of the day
            <span style={{ marginLeft: "auto" }}>
              <a id="tweet-quote" href="https://twitter.com/intent/tweet/">
                <i class="fa fa-twitter fa-lg" aria-hidden="true"></i>
              </a>
            </span>
          </div>
          <div class="card-body">
            <blockquote class="blockquote mb-0">
              <p id="text">{quote}</p>
              <footer class="blockquote-footer" id="author">
                {author}
              </footer>
            </blockquote>
          </div>
        </div>
        <div className="container" style={{ margin: "1em 40%" }}>
          <button id="new-quote" onClick={newQuote} className="btn btn-primary">
            new Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default RandomQuoteGenerator;
