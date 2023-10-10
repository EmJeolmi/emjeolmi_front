import React from "react";
import '../../pages/Screen2-3/screen2-3.css';
import 'bootstrap/dist/css/bootstrap.css';

import diaryBox from '../../images/diarybox.png';
import cloudImg from '../../images/cloud.png';

import showMyDiaryAPI from "../../service/diary/readMyDiaryAPI";
import context from "react-bootstrap/esm/AccordionContext";

export function DiaryContent(props) {

    const {handleModalScroll, diaryData, setDiaryData} = props;
 
    return (
        <div className="center-container">
            <div className="image-container">
                <img src={diaryBox} alt="DiaryBox" />
            </div>
            <div className='text-container'>
                <label className='datewritten'>{diaryData.time}</label>
                    <div className="scrollable-content" onWheel={handleModalScroll}>
                        <label className='contents'>
                            {diaryData.content}
                        </label>
                    </div>
                <label className='diarywriter'>w. {diaryData.id}</label>
            </div>
        </div>
    );
};

export function ChangedBtn(props) {

    const {openChDiary} = props;

    return (
        <div className='changedBtn'>
            <img src={cloudImg} alt="ChangedBtn" />
            <button className='chBtn'
                onClick={openChDiary}
            >교환한 일기</button>
        </div>
    );
};

export function CopyBtn() {

    return (
        <div className='copyBtn'>
            <img src={cloudImg} alt="CopyBtn" />
            <button className='cpBtn'>
                주소 복사하기
            </button>
        </div>
    );
};