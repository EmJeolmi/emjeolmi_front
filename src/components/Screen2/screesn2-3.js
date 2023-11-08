import React from "react";
import '../../pages/Screen2-3/screen2-3.css';
import 'bootstrap/dist/css/bootstrap.css';

import diaryBox from '../../images/diarybox.png';
import cloudImg from '../../images/cloud.png';

export function DiaryContent(props) {

    const {handleModalScroll, diaryData } = props;
 
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

export function SvChangedBtn(props) {

    const {openChDiary} = props;

    return (
        <div className='svchangedBtn'>
            <img src={cloudImg} alt="SvChangedBtn" />
            <button className='svchBtn' onClick={openChDiary}>
                교환한 일기
            </button>
        </div>
    );
};

export function CopyBtn(props) {

    const { diaryData } = props;
    const id = diaryData.id;

    const copyToClipboard = async () => {
        const textToCopy = `http://localhost:3000/chainary/conn/${id}`;
        try {
            await navigator.clipboard.writeText(textToCopy);
            console.log('복사 성공')
        } catch (error) {
            console.log('복사 실패', error);
        }
    };

    return (
        <div className='copyBtn'>
            <img src={cloudImg} alt="CopyBtn" />
            <button className='cpBtn' onClick={copyToClipboard}>
                주소 복사하기
            </button>
        </div>
    );
};