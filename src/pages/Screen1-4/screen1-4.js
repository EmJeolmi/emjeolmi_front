import React from 'react';
import './screen1-4.css';
import 'bootstrap/dist/css/bootstrap.css';
import diaryBox from '../../images/diarybox.png';

function Screen1_4() {

  return (
    <div className="center-container">
        <div className="image-container">
            <img src={diaryBox} alt="DiaryBox" />
        </div>
        <div className='text-container'>
            <label>일기장이 비어있어요 ㅠㅠ</label>
        </div>
    </div>
  );
}

export default Screen1_4;
