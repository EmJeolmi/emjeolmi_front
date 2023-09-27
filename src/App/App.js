import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import MainPart from '../pages/MainPage/mainpart';
import Footer from '../components/Footer/footer.js';
import LandingPart from '../pages/LandingPage/landingpart';
import Screen1_4 from '../pages/Screen1-4/screen1-4';
import { NoDiary } from '../components/Screen1-p/screen1-p';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPart />} />
          <Route path="landingpage" element={<LandingPart />} />
          <Route path="visitempty" element={<Screen1_4 />} />
          <Route path="popupcheck" element={<NoDiary />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;