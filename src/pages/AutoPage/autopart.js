import React, { useState } from 'react';
import './autopart.css';
import 'bootstrap/dist/css/bootstrap.css';
import aiImg from '../../images/drawing_sample.jpg';
import AidiaryBox from '../../images/diarybox.png';
import readSentimentAPI from '../../service/diary/readSentimentAPI';

function AutoPart() {
    const handleModalScroll = (event) => {
      event.stopPropagation();
    };

  const [sentiment, setSentiment] = useState({
        todaySummary:'',
    });

    readSentimentAPI(sentiment, setSentiment);
  
    return (
        <>
        <div className='autoimg'>
            <img src={aiImg} alt="AiImgSample" />    
        </div>
           
        <div className="center-aicontainer">
            <div className="image-aicontainer">
                <img src={AidiaryBox} alt="AiDiaryBox" />
            </div>
            <div className='text-aicontainer'>
                <div className="scrollable-aicontent" onWheel={handleModalScroll}>
                    <label className='aicontents'>
                        {/* 내가 왜 감정분석을 .. 감정분석만 하는 거면 칸이 별로 안 커도 되려나 ?? 이미지 비율은 일단 3:2 고정이고 텍스트 칸도 이미지랑 가로 너비 맞추고 세로는 좀 줄이려고 하는데 어뗘 안 어때도 할 거임 ㅅㄱ     */}
                        {sentiment.todaySummary}
                    </label>
                </div>
            </div>
        </div>
        </>
    );
}

export default AutoPart;
