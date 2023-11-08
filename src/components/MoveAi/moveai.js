import React from "react";
import './moveai.css';
import 'bootstrap/dist/css/bootstrap.css';
import { useNavigate } from "react-router-dom";
import cloudImg from '../../images/cloud.png';

export function MoveAiBtn() {
    const navigate = useNavigate();

    const handleShowAi = () => { // 일기쓰러가기 버튼 클릭 시 호출되는 함수
        navigate('/chainary/conn/aidrawing/:yourID'); 
    };

    return (
        <div className='cloudBtns'>
            <img src={cloudImg} alt="MoveBtn" />
            <button className='ShowAi' onClick={handleShowAi}>일기 분석하기</button>
        </div>
    );
};