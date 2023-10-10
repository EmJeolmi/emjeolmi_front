import React, { useState, useEffect } from 'react';
import './screen2-3.css';
import 'bootstrap/dist/css/bootstrap.css';
import { ChDiary } from '../../components/Screen3-p/screen3-p';
import diaryBox from '../../images/diarybox.png';
import cloudImg from '../../images/cloud.png';
import closepImg from '../../images/closep.png';

import { DiaryContent, ChangedBtn, CopyBtn } from '../../components/Screen2/screesn2-3.js';
import showMyDiaryAPI from '../../service/diary/readMyDiaryAPI';
import readMyDiaryAPI from '../../service/diary/readMyDiaryAPI';

function Screen2n3() {

    const [writtenDiary, setwrittenDiary] = useState('');

    const [ChDiaryOn, setChDiaryOn] = useState(false); // 팝업

    const openChDiary = () => { setChDiaryOn(true); };
    const closeChDiary = () => { setChDiaryOn(false); };

    const handleModalScroll = (event) => { // 스크롤
        event.stopPropagation();
    };

    const getDiary = () => {{readMyDiaryAPI(setwrittenDiary)}};

    useEffect(() => {
        getDiary();
    }, []);

    return (
        <>
        <DiaryContent 
            handleModalScroll={handleModalScroll}
            writtenDiary={writtenDiary}
            setwrittenDiary={setwrittenDiary}
        />
        <div className='cloudBtns'>
        <ChangedBtn openChDiary={openChDiary} />
        <CopyBtn />
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

export default Screen2n3;
