import React, { useState } from 'react';
import './screen2-2.css';
import 'bootstrap/dist/css/bootstrap.css';
import { ChDiary } from '../../components/Screen3-p/screen3-p';
import diaryBox from '../../images/diarybox.png';
import cloudImg from '../../images/cloud.png';
import closepImg from '../../images/closep.png';

function Screen2_2() {
  const [ChDiaryOn, setChDiaryOn] = useState(false); // 팝업

  const openChDiary = () => { setChDiaryOn(true); };
  const closeChDiary = () => { setChDiaryOn(false); };
  
  return (
    <>
    <div className="center-container">
      <div className="image-container">
        <img src={diaryBox} alt="DiaryBox" />
      </div>
      <div className='text-container'>
        <label className='datewritten'></label>
            <textarea className='wirte-contents textarea-custom' 
                placeholder=' 일기를 작성해보세요 !'
                spellCheck="false"
                // ref={contentRef}
                // value={content}
                // onChange={(e) => setContent(e.target.value)}
            />
        <label className='diarywriter'></label>
      </div>
    </div>
    <div className='cloudBtns'>
      <div className='changedBtn'>
        <img src={cloudImg} alt="ChangedBtn" />
        <button className='chBtn'
          onClick={openChDiary}
        >교환한 일기</button>
      </div>
      <div className='saveBtn'>
        <img src={cloudImg} alt="SaveBtn" />
        <button className='svBtn'>
          저장하기
        </button>
      </div>
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

export default Screen2_2;