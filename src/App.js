//import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
// import About from './component/About';
import Alert from './component/Alert';
import Navbar from './component/Navbar';
import TextForm from "./component/TextForm";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route
// } from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light');
  const [modeColor, setModeColor] = useState('white')

  const [alert, setAlert] =  useState(null);

  const showAlert = (message, type)=> {
    setAlert({
      msg: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode = (color) => {
    if(mode==='light'){
      setMode('dark');
      setModeColor(color);
      document.body.style.backgroundColor=color;
      showAlert("Dark mode has been enabled", "success");
      document.title = 'TextUtils - Dark Mode';
      // setInterval(() => {
      //   document.title = 'Install TextUtils Now';
      // }, 1500);

      // setInterval(() => {
      //   document.title = 'TextUtils is Amazing';
      // }, 2000);
    }
    else{
      setMode('light');
      setModeColor('white');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled", "success");
      document.title = 'TextUtils - Light Mode';
    }
  }
  return (

    // <Router>
          <>
    <Navbar title="Textutils" aboutText="About" mode={mode} modeColor={modeColor} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
     <div className='container my-3'>

     {/* <Routes>
          <Route exact path="/about" element={<About />}/>
          
          <Route exact path="/" element={<TextForm heading="Enter the text to analyze" mode={mode} modeColor={modeColor} showAlert={showAlert}/>}/>
            
          
      </Routes> */}
      <TextForm heading="Enter the text to analyze" mode={mode} modeColor={modeColor} showAlert={showAlert}/>
    </div>
    </>
    // </Router>
  );
}

export default App;
