import React, { useState } from 'react';
import './landingpart.css';
import 'bootstrap/dist/css/bootstrap.css';
import { TitleText, Login } from '../../components/Login/login';
import { NoDiary } from '../../components/Screen1-p/screen1-p';
import click1Img from '../../images/click2.png';
import click2Img from '../../images/click1.png';
import closepImg from '../../images/closep.png';

function LandingPart() {
    const [NoDiaryOn, setNoDiaryOn] = useState(false); // 팝업
    const [isHovered, setIsHovered] = useState(false); // 클릭 버튼

    const openNoDiary = () => { setNoDiaryOn(true); };
    const closeNoDiary = () => { setNoDiaryOn(false); };
    const onMouse = () => { setIsHovered(true); };
    const offMouse = () => { setIsHovered(false); };

    return (
        <>
            <TitleText className="landing-title" />
            <div className="wrapper-landing">
                <div className='main_login'>
                    <Login
                        IdInfo="내 일기주소를 입력해주세요 !"
                        PwInfo="로그인 시 비밀번호를 입력해주세요 !"
                        labelText="일기주소"
                        idText="일기주소를 입력해주세요 ~"
                        pwText="비밀번호를 입력해주세요 ~"
                    />
                </div>

                {/* 클릭 버튼 -- 일기 없을 때만 팝업 뜨도록 수정 */}
                <div className='button-container'>
                    <button className='clickbtn1' 
                        onClick={openNoDiary} 
                        onMouseEnter={onMouse}
                        onMouseLeave={offMouse}
                    >
                        <img src={isHovered ? click1Img : click2Img} alt='ClickButton' />
                    </button>
                </div>
            </div>
            <button className='GoDiary'>↪ 일기 쓰러가기</button>

            {/* 팝업 닫기 */}
            {NoDiaryOn && (
                <div className="nodiary-p">
                    <div className="nodiary-content">
                        <NoDiary />
                        <button className='close-nodiary' onClick={closeNoDiary}>
                            <img src={closepImg} alt="CloseP" />
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default LandingPart;
