import React, { useState  } from 'react';
import axios from 'axios';
import './landingpart.css';
import 'bootstrap/dist/css/bootstrap.css';
import { TitleText, Login } from '../../components/Login/login';
import { NoDiary } from '../../components/Screen1-p/screen1-p';
import click1Img from '../../images/click2.png';
import click2Img from '../../images/click1.png';
import closepImg from '../../images/closep.png';
import { LPauthAPI } from '../../service/auth/LPauthAPI.js';
import { useNavigate, useParams } from "react-router-dom";

function LandingPart() {

    const { yourID } = useParams();

    const [formData, setFormData] = React.useState({
        id:"",
        passwd:"",
    });

    const [NoDiaryOn, setNoDiaryOn] = useState(false); // 팝업
    const [isHovered, setIsHovered] = useState(false); // 클릭 버튼

    const [error, setError] = useState(false); // 로그인 오류 상태
    const [inputNullError, setInputNullError] = useState(false);

    const openNoDiary = () => { setNoDiaryOn(true); };
    const closeNoDiary = () => { setNoDiaryOn(false); };
    const onMouse = () => { setIsHovered(true); };
    const offMouse = () => { setIsHovered(false); };

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            // 로그인 시 authAPI 호출
            await LPauthAPI(event, formData, setError, setInputNullError, yourID);
        } catch (error) {
            // 필요한 경우 오류 처리
            console.error('로그인 중 오류 발생:', error);
        }
    };

    const navigate = useNavigate();

    const handleGoDiary = () => {
        // GoDiary 버튼을 클릭했을 때 호출되는 함수
        navigate('/'); 
      };


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
                        formData={formData}
                        setFormData={setFormData}
                    />
                </div>

                {/* 클릭 버튼 -- 일기 없을 때만 팝업 뜨도록 수정 */}
                <div className='button-container'>
                    <button className='clickbtn1' 
                        onClick={handleLogin} 
                        onMouseEnter={onMouse}
                        onMouseLeave={offMouse}
                    >
                        <img src={isHovered ? click1Img : click2Img} alt='ClickButton' />
                    </button>
                </div>
            </div>
            <button className='GoDiary' onClick={handleGoDiary}>↪ 일기 쓰러가기</button>

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