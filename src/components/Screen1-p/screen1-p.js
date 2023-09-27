import React from "react";
import "./screen1-p.css";
import 'bootstrap/dist/css/bootstrap.css';
import MinidiaryBox from '../../images/minidiarybox.png';

export function NoDiary(props) {

    return(
        <>
        <div className="s-center-container">
            <div className="s-image-container">
                <img src={MinidiaryBox} alt="MiniDiaryBox" />
            </div>
            <div className='s-text-container'>
                <label>작성한 일기가 없어서 열람할 수 없어요.</label>
                <tr />
                <label>새로운 일기를 작성해주세요 !</label>
            </div>
        </div>
        </>
    );
}
