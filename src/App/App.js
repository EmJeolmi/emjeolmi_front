import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import MainPart from '../pages/MainPage/mainpart';
import Footer from '../components/Footer/footer.js';
import LandingPart from '../pages/LandingPage/landingpart';
import Screen1_3 from '../pages/Screen1-3/screen1-3';
import Screen1_4 from '../pages/Screen1-4/screen1-4';
import Screen2_2 from '../pages/Screen2-2/screen2-2';
import Screen2_3 from '../pages/Screen2-3/screen2-3';
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
          <Route path="readdiary" element={<Screen1_3 />} />
          <Route path="visitempty" element={<Screen1_4 />} />
          <Route path="writediary" element={<Screen2_2 />} />
          <Route path="savediary" element={<Screen2_3 />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;