import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
// import Testing from './fn_comp';
import Testing1 from './fn_comp';
import { Testing_Comp } from './fn_comp_1';
import { Counter } from './displayCounter';

function App() {
  let [a, seta] = useState(0);
  let [isMorning, setDay] = useState(true);
  return (
    <div className={`main ${isMorning ? "dayLight" : ""}`}>

      <React.Fragment> 

        <h1>Good {isMorning ? 'Morning' : 'Night'}</h1>

        {/* <header className="App-header"> */}
        {/* Hello Every One */}
        {/* <Testing1 title="First Child" />
        <Testing_Comp title="Second Child" /> */}

        <Counter value={a} />
        {/* <h2>Counter: {a}</h2> */}
        <button onClick={() => seta(++a)}>Update</button>
        {/* Anonymus Arrow function ()=> */}
        {/* </header> */}

        <button onClick={()=> setDay(!isMorning)}>Change DayTime</button>

      </React.Fragment>

    </div>
  );
}

export default App;
