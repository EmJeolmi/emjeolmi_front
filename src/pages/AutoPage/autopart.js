import React, { useState } from 'react';
import './autopart.css';
import 'bootstrap/dist/css/bootstrap.css';
import aiImg from '../../images/drawing_sample.jpg';
import AidiaryBox from '../../images/aibox.png';
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
                      {sentiment.todaySummary}
                    </label>
                </div>
            </div>
        </div>
        </>
    );
}

export default AutoPart;
