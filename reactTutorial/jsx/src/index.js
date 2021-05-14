// Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom";


// Create a react component


const App = () => {
  const buttonText = 'click me'
  return (
    <div>
      <label className="label" HTMLFor="name">
        Enter name:
      </label>
      <input id="name" type="text" />
      <button style={{ backgroundColor: "blue", color: "white" }}>
      {buttonText}
      </button>
    </div>
  );
};

// Take the react component and show it on the screen
ReactDOM.render(<App />, document.querySelector("#root"));