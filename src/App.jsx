import { useState } from 'react'
import viteLogo from '/vite.svg'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Footer from "./components/Footer"
import Explain from "./components/Explain"
import './index.css';

import './App.css'
const App = () => {
  
  return (
    <div>
     <Navbar></Navbar>
     <Hero></Hero>
     <Explain></Explain>
     <div className="white-line-break"></div>
     <Footer></Footer>
    </div>
    
  );

};

export default App;
