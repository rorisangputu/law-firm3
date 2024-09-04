import { Route, Routes } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Nav from './Components/Nav'
import Home from './Pages/Home'
import About from './Pages/About'
import Service from './Pages/Service'
import Contact from './Pages/Contact'

function App() {


  return (
    <>
      <Nav />
      <Routes>
        <Route path={'/'} element={
          <Home />
        } />
        <Route path={'/about'} element={
          <About />
        } />
        <Route path={'/service'} element={
          <Service />
        } />
        <Route path={'/contact'} element={
          <Contact />
        } />
      </Routes>
      <Footer />
    </>
  )
}

export default App
