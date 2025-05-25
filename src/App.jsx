import { useState } from 'react'
import { NavBar } from './Components/NavBar'
import { TextArea } from './Components/TextArea'
import Alert from './Components/Alert'
// import About from './Components/About'
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Link,
// } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')
  const [alert, setalert] = useState(null)

  const showAlert = (message, type) => {
    setalert({
      msg: message,
      typ: type
    })
    setTimeout(() => {
      setalert(null)
    }, 1500);
  }

  const togglemode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#6c757d'
      document.body.style.color = 'white'
      showAlert("Dark Mode activated", "Success")
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      showAlert("Light Mode activated", "Success")
    }
  }

  return (
    <>
      {/* <Router>
        <NavBar title1="TextUtil" title2="Home" title3="About" theme={mode} togglemode={togglemode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route path='/textutil' element={<TextArea heading="Enter Your Text Below" alert={alert} showAlert={showAlert} />} />
            <Route path='/home' element={<TextArea heading="Enter Your Text Below" alert={alert} showAlert={showAlert} />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </div>
      </Router> */}
      <NavBar title1="TextUtil" title2="Home" title3="About" theme={mode} togglemode={togglemode} />
      <Alert alert={alert} />
      <div className="container my-3">
        <TextArea heading="Enter Your Text Below" alert={alert} showAlert={showAlert} />
      </div>
    </>
  )
}

export default App
