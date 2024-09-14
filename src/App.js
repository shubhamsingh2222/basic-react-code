import { useState } from 'react';
import './App.css';
import About from './components/About';
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm" 
import Alert from './components/Alert';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {

  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })

    setTimeout(()=>
    {
      setAlert(null)
    }, 1500)
  }

  const toggelMode = () =>
  {
    if(mode === 'light')
    {
      setMode('dark')
      document.body.style.backgroundColor = '#042743';
      showAlert("Dark mode enabled", "success")
      document.title = 'TextUtils - Dark'
    }
    else{
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Light mode enabled", "success")
      document.title = 'TextUtils - Light'
    }
  }
  return (
    <>
    <Router>
    <Navbar title= "TextUtils" aboutText= "About" mode = {mode} toggelMode = {toggelMode}/>
    <Alert alert = {alert}/>
    <div className="container my-3">
    <Routes>
        <Route exact path="/about" element={<About />} />
        <Route exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze below" mode={mode} />} />
      </Routes>
    </div>
    </Router>
    </>
    
  );
}

export default App;
