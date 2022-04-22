// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


// let name = "Harry";
function App() {
  const [mode,setMode]= useState('light')//Whether dark mode is enable or not 
  const [alert,setAlert] = useState(null)

  const showAlert =(message,type)=>{
   setAlert({
     msg:message,
     type:type
   })
  }
 const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor = 'gray';
        showAlert("Dark mode has been enabled","succes")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white';
       showAlert("white mode has been enabled","succes")

    }
  }
  return (
    <>
    <Router>
          <Navbar title = "TextUtils2" aboutText = "About Us" mode = {mode} toggleMode = {toggleMode} />
           <Alert alert ={alert}/>
           <div className='container my-3'>
            <Switch>
              <Route exact path="/about">
                <About />
              </Route>
              <Route exact path="/">
              <TextForm heading = "Enter the text to analyze" mode = {mode} />
              </Route>
            </Switch>
           </div>
     
    </Router>
   
  
  {/* <Navbar title = "TextUtils2" /> */}
  {/* <Navbar/> */}
  {/* <div className="container my-3">
  <TextForm heading = "Enter the text to analyze" mode = {mode} />
  </div> */}
  {/* <About/> */}
    </>
  );
}

export default App;
