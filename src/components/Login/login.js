import React , { useState } from 'react';
import './login.css';
import 'bootstrap/dist/css/bootstrap.css';
import click1Img from '../../images/click2.png';
import click2Img from '../../images/click1.png';

/* 타이틀 */
export function TitleText(props) {

    return (
        <label className='MainTitle'>Chainary</label>
    );
}

/* 로그인 input */
export function Login(props) {
    const { IdInfo, PwInfo, labelText, idText, pwText } = props;

    return (
        <>
        <div className='login_input'>
            <label className='id_info' htmlFor='login_info'>{IdInfo}</label>
            <div className='login_inputId'>
                <label className='id_label' htmlFor='login_id'>{labelText}</label>
                <div class="background-wrap">
                    <input
                        type='text'
                        className='login_id'
                        placeholder={idText}
                    />
                </div>
            </div>
            <label className='pw_info' htmlFor='login_info'>{PwInfo}</label>
            <div className='login_inputPw'>
                <label className='pw_label' htmlFor='login_pw'>비밀번호</label>
                <div class="background-wrap">
                    <input
                        type='text'
                        className='login_pw'
                        placeholder={pwText}
                    />
                </div>
            </div>
        </div>
        </>
    );
}

/* 클릭 버튼 2 (메인화면) */
export function ClickBtn2(props) {
    const [isHovered, setIsHovered] = useState(false);

    const onMouse = () => {
        setIsHovered(true);
    };
    const offMouse = () => {
        setIsHovered(false);
    };

    return (
        <div className='button-container'>
            <button
                className='clickimgbtn'
                onMouseEnter={onMouse}
                onMouseLeave={offMouse}
            >
            <img
                src={isHovered ? click1Img : click2Img}
                alt='ClickButton'
            />
            </button>
        </div>
    );
}