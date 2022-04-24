import './App.css';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm'; 
import { useState } from 'react/cjs/react.development';
import Alert from './Components/Alert';
import {  BrowserRouter as Router,
  Switch,
  Route
       } from 'react-router-dom';
import About from './Components/About';


function App() {

  const [darkMode, setdarkMode] = useState('light')
//   const [alert, setAlert] = useState(null)
  const [bg, setbg] = useState({
    backgroundColor : '#cceeff',
    color : 'black'
  })
  const showBg = (backgroundColor, color)=> {
    setbg({
      backgroundColor : backgroundColor,
      color : color,
    })
  }
  const showAlert = (message,type)=>{
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(()=> {
      setAlert(null)
    }, 1500
    )
  }

  const settingMode = (newMode) => {
  
    console.log('In setting mode ', newMode)
    if (newMode === 'light') {
      setdarkMode('light');

      showBg("#cceeff","black");
      document.body.style.backgroundColor = 'white';
      showAlert("Light mode is enabled", "success");
      console.log(bg.backgroundColor, ' ', bg.color)

    }
    else if (newMode === 'dark'){
    

      setdarkMode('dark');
      showBg("grey","white")
      document.body.style.backgroundColor = '#0e2039';
      showAlert("Dark mode is enabled", "success");
      console.log(bg)

    }
    else {
      console.log('In green mode')
      showBg("#66ff66","white")
      setdarkMode('success');
        document.body.style.backgroundColor = "#009900";
      showAlert("Green mode is enabled", "success");
    console.log(bg)


    }
  }

 
  return (
    <>
    <Router>
    <Navbar title = "Text Util" about = "About Us" mode = {darkMode} settingMode = {settingMode} />

     <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/">
               <TextForm mode = {darkMode} showAlert = {showAlert} bg = {bg}/>
           </Route>
         
        </Switch>
    </Router>
  {/* <About/> */}
  </>
  );

}

export default App;
