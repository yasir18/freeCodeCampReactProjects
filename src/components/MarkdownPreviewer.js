import React, { useState } from "react";
import marked from "marked";

const MarkdownPreviewer = () => {
  const [editorText, setEditorText] = React.useState(
    `# Hi!

    ## Welcome to my React previewer
    
    Heres some code, \`<div></div>\`, between 2 backticks.
    
    \`\`\`
    // this is multi-line code:
    
    function anotherExample(firstLine, lastLine) {
      if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
        return multiLineCode;
      }
    }
    \`\`\`
    
    You can also make text **bold**
    Or _italic_.
    Or **_both!_**
    And  ~~cross stuff out~~ if you want to.
    
    There's also [links](https://codepen.io/bmansk14/), and
    > Block Quotes
    
    - And of course there are lists.
      - Some are bulleted.
         - With different indentation levels.
            - That look like this.
    
    
    1. And there are numbererd lists too.
    1. Use just 1s if you want! 
    1. But the list goes on...
    - Even if you use dashes or asterisks.
    * And last but not least, let's not forget embedded images:
    
    ![React Logo w/ Text](https://goo.gl/Umyytc)
    `
  );
  function createMarkup() {
    return { __html: marked(editorText) };
  }
  console.log(editorText);
  return (
    <>
      <div style={{ width: "40vw", marginRight: "5%" }}>
        <h3>Editor</h3>
        <textarea
          style={{ height: "60vh", width: "40vw", border: "2px solid black" }}
          id="editor"
          onChange={(e) => setEditorText(e.target.value)}
          value={editorText}
        />
      </div>
      <div>
        <h3>Preview window</h3>

        <div
          id="preview"
          style={{
            height: "60vh",
            overflow: "scroll",
            width: "40vw",
            padding: "0 1em",
            border: "2px solid black",
            backgroundColor: "#fab1a0",
          }}
          dangerouslySetInnerHTML={createMarkup()}
        ></div>
      </div>
    </>
  );
};

export default MarkdownPreviewer;
