import React from 'react';
import './App.css';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import Header from './components/header/Header';
import Home from './components/Home/Home';
import Qualification from './components/qualification/Qualification';
import Services from './components/Services/Services';
import Skill from './components/skill/Skill';
import Testimonial from './components/testimonial/Testimonial';

function App() {
  return (
    <>
      <Header></Header>
      <main className="main">
        <Home></Home>
        <About></About>
        <Skill></Skill>
        <Services></Services>
        <Qualification></Qualification>
        <Testimonial></Testimonial>
        <Contact></Contact>
      </main>
    </>
  );
}

export default App;
