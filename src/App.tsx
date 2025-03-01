import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"
import Menu from "./components/Menu"
import './App.css'
import Footer from "./components/Footer"


function App() {
 

  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Menu" element={<Menu/>}/>
        <Route path="About/" element={<About/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
      </BrowserRouter>

    </div>
  )
}

export default App