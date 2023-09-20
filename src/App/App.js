import React, { useEffect } from 'react';
import { BrowserView, MobileView } from 'react-device-detect';
import { Routes, Route } from "react-router-dom";
import './App.css';
import { Mobile, PC, Landing } from '../components/App';

import Screen1M from '../pages/Screen1/screen1m/screen1m';

function App () {
  return (
    <div className="App">
      <BrowserView>
        <h1>데스크톱브라우져!</h1>
      </BrowserView>
      <MobileView>
        <h1>모바일 브라우져!</h1>
      </MobileView>
      
    </div>
  );
}

export default App;