import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import { Footer } from './components/Footer';
import {Header} from "./components/Header"
import { DoctorsFound } from './pages/DoctorsFound';
import { Home } from './pages/Home';



function App() {
  const [selectedCity, setSelectedCity] = useState('')
  const [selectedSpeciality, setSelectedSpeciality] = useState('')
  const [checkCrm, setCheckCrm] = useState('')
  
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home 
        setSelectedCity={setSelectedCity} 
        setSelectedSpeciality={setSelectedSpeciality} 
        setCheckCrm={setCheckCrm} 
        selectedSpeciality={selectedSpeciality} 
        selectedCity={selectedCity}/>} />
        
        <Route path="/doctors" element={<DoctorsFound 
        selectedCity={selectedCity} 
        selectedSpeciality={selectedSpeciality} 
        checkCrm={checkCrm} 
        setCheckCrm={setCheckCrm}/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;