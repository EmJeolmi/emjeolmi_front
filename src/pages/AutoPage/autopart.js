import React, { useState } from 'react';
import './autopart.css';
import 'bootstrap/dist/css/bootstrap.css';
import aiImg from '../../images/drawing_sample.jpg';
import AidiaryBox from '../../images/aibox.png';

function AutoPart() {
    const handleModalScroll = (event) => {
      event.stopPropagation();
    };

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
                        메롱 ~ 가로 길이는 이 정도까지 가능요 울랄라 
                    </label>
                </div>
            </div>
        </div>
        </>
    );
}

export default AutoPart;
