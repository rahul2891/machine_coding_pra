import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Body from './components/Body'
import About from './components/About'
import Login from './components/Login'
import Team from './components/Team'
import Accordion from './components/accordion/Accordion'
import Header from './components/header/Header'
import ProtectedRoute from './components/protectedRoutes/ProtectedRoute'
import { LanguageContext } from './components/LanguageContext'
import { useState } from 'react'
import Uber from './components/uber/Uber'
import Meta from './components/meta/Meta'
import Atlassian from './components/atlassian/Atlassian'

function App() {
  const [lang, setLang] = useState('en');

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
   

   {/* // create a wrapper for protected routes
   // create a empty route and load protectedRoute component
   // anything you pass inside protectedRoute will be rendered as children
   // authentication logic will go in protectedRoute component */}

    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Body />}></Route>
      <Route element={<ProtectedRoute />}>
      <Route path="/about" element={<About lang={lang} />}></Route>

      </Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/team" element={<Team />}></Route>
      <Route path="/accordion" element={<Accordion />}></Route>
      <Route path="/uber" element={<Uber />}></Route>
      <Route path="/meta" element={<Meta />}></Route>
      <Route path="/atlassian" element={<Atlassian />}></Route>

      </Routes>
    </BrowserRouter>
    </LanguageContext.Provider>
  )
}

export default App
