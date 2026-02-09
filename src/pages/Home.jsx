import React from 'react'
import Name from '../components/Name'
import About from '../components/About'
import Skill from '../components/Skill'
import Contact from '../components/Contact'
import Projects from '../components/Projects'

function Home() {
  return (
    <div>
      <section id="home"><Name /></section>
      <section id="about"><About /></section>
      <section id="skills"><Skill /></section>
      <section id="projects"><Projects /></section>
      <section id="contact"><Contact /></section>
    </div>
  )
}

export default Home