import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Body from './components/Body'
import About from './components/About'
import Login from './components/Login'
import Team from './components/Team'
import Accordion from './components/accordion/Accordion'
import Header from './components/header/Header'

function App() {

  return (
    <>
   <Header />

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Body />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/team" element={<Team />}></Route>
      <Route path="/accordion" element={<Accordion />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
