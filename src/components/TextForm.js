import React, { useState } from "react"; //importing usestate hook from react

export default function TextForm(props) {
  const handleUpClick = () => {
    var newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    var newText = text.toLowerCase();
    setText(newText);
  };
  const handle = () => {
    var newText = text.charAt(0).toUpperCase();
    var rem = text.slice(1);
    var final = newText + rem;

    setText(final);
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState(""); //text is a variable and enter text here is default value whenever we update the value of text we will do that through setText function
  return (
    <>
      <div className="container">
        <h1> {props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert To Uppercase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert To LowerCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handle}>
          Convert to normal text
        </button>
      </div>
      <div className="container my-3">
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length - 1} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minute read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}