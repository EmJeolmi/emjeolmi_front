import React, { useState, useEffect } from "react";
import "./screen3-p.css";
import 'bootstrap/dist/css/bootstrap.css';
import DiaryBox from '../../images/diarybox.png';
import { readVisitorsByUserRidAPI } from '../../service/visitor/visitorAPI'// API 호출을 위한 함수를 가져옴
import { Route } from "react-router-dom";

export function ChDiary(props) {
    const [visitors, setVisitors] = useState([]); // 방문자 데이터를 저장할 상태
    const {diaryData} = props;

    //console.log(diaryData);
    //console.log(diaryData.id)

    useEffect(() => {
        // API를 호출하고 데이터를 상태로 설정
        readVisitorsByUserRidAPI(diaryData.id, setVisitors);
    }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때만 API를 호출

    return(
        <>
        <div className="c-center-container">
            <div className="c-image-container">
                <img src={DiaryBox} alt="DiaryBox" />
            </div>
            <div className="diarylist-p">
                <label className="chainarytitle">교환한 일기</label>
                <div className='c-text-container'>
                    {/* 방문자 목록을 매핑하여 화면에 표시 */}
                    {visitors.map((value) => (
                            <a href={`http://localhost:3000/chainary/conn/readdiary/${value.visit_id}`} target="_blank">{value.visit_id}</a>                      
                    ))}
                </div>
            </div>
        </div>
        </>
    );
}