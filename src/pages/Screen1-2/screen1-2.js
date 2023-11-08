import React from "react";
import "./screen1-2.css";
import 'bootstrap/dist/css/bootstrap.css';
import MinidiaryBox from '../../images/minidiarybox.png';
import { useNavigate } from "react-router-dom";

export function NoDiary(props) {

    const navigate = useNavigate();
    const handleGoDiary = () => { // 일기쓰러가기 버튼 클릭 시 호출되는 함수
        navigate('/chainary/writediary'); 
    };

    return(
        <>
        <div className="s-center-container">
            <div className="s-">
                <img src={MinidiaryBox} alt="MiniDiaryBox" />
            </div>
            <div className='s-text-container'>
                <label>작성한 일기가 없어서 열람할 수 없어요.</label>
                <tr />
                <label>새로운 일기를 작성해주세요 !</label>
            </div>
        </div>
        <button className='GoDiary2' onClick={handleGoDiary}>↪ 일기 쓰러가기</button>
        </>
    );
}
