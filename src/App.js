import React from 'react';
import './App.css';
import About from './components/about/About';
import Header from './components/header/Header';
import Home from './components/Home/Home';
import Services from './components/Services/Services';
import Skill from './components/skill/Skill';

function App() {
  return (
    <>
      <Header></Header>
      <main className="main">
        <Home></Home>
        <About></About>
        <Skill></Skill>
        <Services></Services>
      </main>
    </>
  );
}

export default App;
