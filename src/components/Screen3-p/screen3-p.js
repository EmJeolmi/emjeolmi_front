import React from "react";
import "./screen3-p.css";
import 'bootstrap/dist/css/bootstrap.css';
import DiaryBox from '../../images/diarybox.png';

export function ChDiary(props) {

    return(
        <>
        <div className="c-center-container">
            <div className="c-image-container">
                <img src={DiaryBox} alt="DiaryBox" />
            </div>
            <div className="diarylist-p">
                <label className="chdiarytitle">교환한 일기</label>
                <div className='c-text-container'>
                    <a href="https://집가고싶다.com">https://집가고싶다.com</a>
                    <a href="https://하기시러저녁뭐먹지목마르다아이스크림좀먹고싶네레몬에이드마시고싶당.com">https://하기시러저녁뭐먹지목마르다아이스크림좀먹고싶네레몬에이드마시고싶당.com</a>
                    <a href="https://바보.net">https://바보.net</a>
                    <a href="https://메롱.net">https://메롱.net</a>
                    <a href="https://민초먹고십.net">https://민초먹고십.net</a>
                    <a href="https://도서관.net">https://도서관.net</a>
                    <a href="https://왤케김.net">https://왤케김.net</a>
                    <a href="https://언제까지.net">https://언제까지.net</a>
                    <a href="https://탕후루.net">https://탕후루.net</a>
                    <a href="https://오마싯겟다.net">https://오마싯겟다.net</a>
                    <a href="https://그만.net">https://그만.net</a>
                </div>
            </div>
        </div>
        </>
    );
}