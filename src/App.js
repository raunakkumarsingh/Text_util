import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import * as React from 'react';
import Navbar from './components/Navbar';
import Aboutus from './components/Aboutus';
import Textform from './components/Textform';
// import Alert from './components/Alert';
// import Textform from './components/About';



// const raun = 'Josh Perez';

 {/* const element = <h1>Hello, {raun}</h1>; */}
 function App() {
  const [Mode,setMode]=useState({
    color: '#495057',
    backgroundColor: 'white'

  });
  const [text,setText] =useState("Light");
   const toggleMode=()=>{
    console.log("toggle clicked");
     if(Mode.color==="#495057"){
     setMode({
       color: 'white',
       backgroundColor: '#495057'
      });
      document.body.style.backgroundColor='#495057';
      setText("Dark");
    }
     else{
      setMode({
        color: '#495057',
        backgroundColor: 'white'
      });
      document.body.style.backgroundColor='white';
      setText("Light");
     }
 }

  return (
        <Router>

 <Navbar title="Text" toggleMode={toggleMode} Mode={Mode}/>
 {/* <Alert mod="text"/> */}
 
 <div className="container my-4">
        <Routes>
 {/* <Textform heading="Enter the Text to analyze" Mode={Mode}/> */}
 {/* <Aboutus /> */}
 
 <Route path="/" element={ <Textform heading="Enter the Text to analyze" Mode={Mode}/>}/>
 <Route path="/aboutus" element={<Aboutus />}/>
        </Routes>
  </div>
 

 </Router>

     
  );
}

export default App;
