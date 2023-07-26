import React, { useState } from "react";

export default function TextForm(props) {
  const changeUppercase = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Uppercase", "success");
  };

  const changeLowercase = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lowercase", "success");
  };

  const clearText = () => {
    let newText = "";
    setText(newText);
    props.showAlert("Text is Cleared", "success");
  };

  const copyText = () => {
    let textArea = document.getElementById("myTextarea");
    textArea.select();
    navigator.clipboard.writeText(text);
    props.showAlert("Text is Copied", "success");
  };

  const removeExtraSpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert("Extra spaces has been Removed", "success");
  };

  const handleOnChange = (event) => {
    // console.log("On change");
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  //   text = "Software Developer"; //Wrong way to change the state
  //   setText("New text"); //Correct way to change the state
  return (
    <>
      <div
        className="container my-4 "
        style={{
          color: props.mode === "light" ? "black" : "white",
        }}
      >
        <div className="fs-5 my-4">{props.heading}</div>
        <div className="mb-3">
          <textarea
            className="form-control device-width"
            value={text}
            onChange={handleOnChange}
            id="myTextarea"
            rows="10"
            style={{
              backgroundColor: props.mode === "dark" ? "#343a40" : "white",
              color: props.mode === "light" ? "black" : "white",
            }}
          ></textarea>
        </div>
        <div>
          <button className="btn btn-light mx-3 my-3" onClick={changeUppercase}>
            Convert to Uppercase
          </button>
          <button className="btn btn-light mx-3 my-3" onClick={changeLowercase}>
            Convert to Lowercase
          </button>
          <button className="btn btn-light mx-3 my-3" onClick={clearText}>
            Clear
          </button>
          <button className="btn btn-light mx-3 my-3" onClick={copyText}>
            Copy
          </button>
          <button
            className="btn btn-light mx-3 my-3"
            onClick={removeExtraSpaces}
          >
            Remove Extra Spaces
          </button>
        </div>
      </div>
      <div className="container">
        <h2 style={{ color: props.mode === "dark" ? "white" : "black" }}>
          Your Text Summary
        </h2>
        <p style={{ color: props.mode === "dark" ? "white" : "black" }}>
          {
            text.split(" ").filter((e) => {
              return e.length !== 0;
            }).length
          }{" "}
          Words and {text.length} Characters
        </p>
      </div>
    </>
  );
}
