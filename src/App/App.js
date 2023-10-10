import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import MainPart from '../pages/MainPage/mainpart.js';
import Footer from '../components/Footer/footer.js';
import LandingPart from '../pages/LandingPage/landingpart';
import Screen1n3 from '../pages/Screen1-3/screen1-3';
import Screen1n4 from '../pages/Screen1-4/screen1-4';
import Screen2n2 from '../pages/Screen2-2/screen2-2';
import Screen2n3 from '../pages/Screen2-3/screen2-3';
import { NoDiary } from '../components/Screen1-p/screen1-p';
import { ChDiary } from '../components/Screen3-p/screen3-p';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPart />} />
          <Route path="landingpage" element={<LandingPart />} />
          <Route path="popupcheck" element={<NoDiary />} />
          <Route path="readdiary" element={<Screen1n3 />} />
          <Route path="visitempty" element={<Screen1n4 />} />
          <Route path="writediary" element={<Screen2n2 />} />  
          <Route path="savediary" element={<Screen2n3 />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;