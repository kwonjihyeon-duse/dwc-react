import { useEffect, useRef, useState } from "react";
import logo from "./logo.svg";
// import "./App.css";
import { Tooltip } from "duse-wepcomponents";
// import {Textfield} from './my-element.js';

import React from "react";
import { createComponent } from "@lit/react";

export const TooltipComponent = createComponent({
  tagName: "dwc-tooltip",
  elementClass: Tooltip,
  react: React,
  events: {
    onChange: "onChange",
    onClick: "onClick",
  },
});

function App() {
  const textRef = useRef();
  const [value, setValue] = useState(0);
  // const [dis, setDis] = useState(false);

  // useEffect(() => {
  //   // console.log(textRef.current, window);

  //   if (!textRef.current) return;
  //   // textRef.
  //   // const test = (e) => {
  //   //   // console.log(e);
  //   //   setValue(e.target.value);
  //   // };
  //   textRef.current.boxed = false;

  //   // const element = new Textfield();
  //   // textRef.current.appendChild(element);
  // }, []);
  // console.log(value);

  const clicks = (e) => {
    console.log("pased");
    if (value === -1) return setValue(0);
    if (value === 0) return setValue(-1);
    // if (e.target.value.length > 6) {
    //   setDis(true);
    // }
    // alert("yes");
    // console.log(e, "text");
  };

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p onClick={clicks}>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <TooltipComponent
          // onClick={clicks}
          icon={true}
          status={value}
          // boxed={false}
          // error={value.length > 5}
          title="label"
          // disabled={dis}
          helperText="helperText"
        ></TooltipComponent>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
