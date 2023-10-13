import React, { useState } from 'react';
import axios from 'axios';
import './landingpart.css';
import 'bootstrap/dist/css/bootstrap.css';
import { TitleText, Login } from '../../components/Login/login';
import click1Img from '../../images/click2.png';
import click2Img from '../../images/click1.png';
import { LPauthAPI } from '../../service/auth/LPauthAPI.js';
import { useNavigate } from "react-router-dom";

function LandingPart() {

    const [formData, setFormData] = React.useState({
        id:"",
        passwd:"",
    });

    const [isHovered, setIsHovered] = useState(false); // 클릭 버튼

    const [error, setError] = useState(false); // 로그인 오류 상태
    const [inputNullError, setInputNullError] = useState(false);

    const onMouse = () => { setIsHovered(true); };
    const offMouse = () => { setIsHovered(false); };

    const handleLogin = async (event) => {
        event.preventDefault();
        try {
            // 로그인 시 authAPI 호출
            await LPauthAPI(event, formData, setError, setInputNullError);
        } catch (error) {
            // 필요한 경우 오류 처리
            console.error('로그인 중 오류 발생:', error);
        }
    };

    const navigate = useNavigate();

    const handleGoDiary = () => {
        // GoDiary 버튼을 클릭했을 때 호출되는 함수
        navigate('/chainary'); 
      };


    return (
        <>
            <TitleText className="landing-title" />
            <div className="wrapper-landing">
                <div className='main_login'>
                    <Login
                        IdInfo="로그인 시 아이디를 입력해주세요 !"
                        PwInfo="로그인 시 비밀번호를 입력해주세요 !"
                        labelText="아이디"
                        idText="아이디를 입력해주세요 ~"
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

        </>
    );
}

export default LandingPart;