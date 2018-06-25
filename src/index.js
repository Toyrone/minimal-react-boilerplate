// console.log('Hey there');

// const arr = [1, 2, 3];

// const es6 = () => console.log(...arr);

// window.es6 = es6;

// es6();

import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <div>
      <p>React here!</p>
    </div>
  );
};

export default App;

ReactDOM.render(<App />, document.getElementById("app"));