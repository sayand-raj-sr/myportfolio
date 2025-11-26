
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Header from  './components/Header'

import Home from './pages/Home'
import About from './components/About'
import Skills from './components/Skill'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Name from './components/Name'
import Footer from './components/Footer'
function App() {
  

  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/skills' element={<Skills/>}/>
        <Route path='/projects' element={<Projects/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
    </>
  )
}

export default App
