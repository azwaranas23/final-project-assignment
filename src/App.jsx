import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import IndonesiaPage from './pages/Indonesia';
import ProgrammingPage from './pages/Programming';
import Covid19Page from './pages/Covid19';
import HomePage from './pages/Home';
import SavedPage from './pages/Saved'; 

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        <Route path="/indonesia" element={<IndonesiaPage />} />
        <Route path="/programming" element={<ProgrammingPage />} />
        <Route path="/covid-19" element={<Covid19Page />} />
        <Route path="/saved" element={<SavedPage />} /> 
      </Routes>
    </BrowserRouter>
  );
};

export default App;