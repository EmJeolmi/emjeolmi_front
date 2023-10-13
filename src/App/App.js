import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import MainPart from '../pages/MainPage/mainpart.js';
import Footer from '../components/Footer/footer.js';
import LandingPart from '../pages/LandingPage/landingpart';
import Screen1n3 from '../pages/Screen1-3/screen1-3';
import Screen1n4 from '../pages/Screen1-4/screen1-4';
import Screen2n2 from '../pages/Screen2-2/screen2-2';
import Screen2n3 from '../pages/Screen2-3/screen2-3';
import { NoDiary } from '../pages/Screen1-2/screen1-2';
import { ChDiary } from '../components/Screen3-p/screen3-p';
import diaryDeleteAPI from '../service/diary/diaryDeleteAPI';

function App() {

  useEffect(() => {
    // diaryDeleteAPI()
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/chainary" element={<MainPart />} />
          <Route path="/chainary/conn/:yourID" element={<LandingPart />} />
          <Route path="/chainary/conn/myempty/:yourID" element={<NoDiary />} />
          <Route path="/chainary/conn/readdiary/:yourID" element={<Screen1n3 />} />
          <Route path="/chainary/conn/yourempty/:yourID" element={<Screen1n4 />} />
          <Route path="/chainary/writediary" element={<Screen2n2 />} />  
          <Route path="/chainary/savediary" element={<Screen2n3 />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;