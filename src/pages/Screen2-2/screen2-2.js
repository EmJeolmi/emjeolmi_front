import React, { useState } from 'react';
import './screen2-2.css';
import 'bootstrap/dist/css/bootstrap.css';
import { ChDiary } from '../../components/Screen3-p/screen3-p';
import diaryBox from '../../images/diarybox.png';
import cloudImg from '../../images/cloud.png';
import closepImg from '../../images/closep.png';

import { ContentTextarea, ChangedBtn, SaveBtn } from '../../components/Screen2/screen2-2.js';

function Screen2n2() {
  const [ChDiaryOn, setChDiaryOn] = useState(false); // 팝업

  const openChDiary = () => { setChDiaryOn(true); };
  const closeChDiary = () => { setChDiaryOn(false); };

  const [formData, setFormData] = useState({
    content:""
  });
  
  return (
    <>
    <div className="center-container">
        <div className="image-container">
            <img src={diaryBox} alt="DiaryBox" />
        </div>
        <ContentTextarea 
            formData={formData}
            setFormData={setFormData}
        />
    </div>
    <div className='cloudBtns'>
        <ChangedBtn openChDiary={openChDiary} />
        <SaveBtn formData={formData} />
    </div>

    {/* 팝업 닫기 */}
    {ChDiaryOn && (
        <div className="chdiary-p">
            <div className="chdiary-content">
                <ChDiary />
                <button className='close-chdiary' onClick={closeChDiary}>
                    <img src={closepImg} alt="CloseP" />
                </button>
            </div>
        </div>
    )}
    </>
  );
}

export default Screen2n2;