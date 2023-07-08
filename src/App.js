
import Nav from "./Mycomponents/Nav";
import Sample from "./Mycomponents/Sample";
import Signin from "./Mycomponents/Signin";

import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";


import React, { useState } from 'react'
import Demo from "./Mycomponents/Demo";
import Info from "./Mycomponents/Info";

function App() {
  const [Show, setShow] = useState("1");
  const toggle = () => {
    console.log("hello")
    console.log(Show);
    if (Show === '1')
      setShow('0');
    else
      setShow('1');

  }
  var [name, setName] = useState("");
  var updateinfo = (childData) => {
    setName(childData);
  }
  return (
    <>
    <Router>
      <Nav />
      <Routes>
        <Route index element={<Signin/>}/>
        <Route index element ={Show === '1' ? <Signin takenname={updateinfo} componentdisplay={toggle} /> : <Sample name={name} />}/>
        <Route exact path="/demo" element={<Demo/>}/>
        <Route exact path='/info' element={<Info/>}/>
      
      </Routes>
    </Router>
{/* <Info></Info> */}




     
    </>
  );
}

export default App;
