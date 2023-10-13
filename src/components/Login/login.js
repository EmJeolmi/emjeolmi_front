import React , { useState } from 'react';
import './login.css';
import 'bootstrap/dist/css/bootstrap.css';
import click1Img from '../../images/click2.png';
import click2Img from '../../images/click1.png';
import authAPI from '../../service/auth/authAPI.js';
import LPauthAPI from '../../service/auth/LPauthAPI';

/* 타이틀 */
export function TitleText() {

    return (
        <label className='MainTitle'>Chainary</label>
    );
}

/* 로그인 input */
export function Login(props) {

    const { labelText, idText, pwText, formData, setFormData } = props;

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    return (
        <>
        <div className='login_input'>
            {/* <label className='id_info' htmlFor='login_info'>{IdInfo}</label> */}
            <div className='login_inputId'>
                <label className='id_label' htmlFor='login_id'>{labelText}</label>
                <div class="background-wrap">
                    <input
                        type='text'
                        name='id'
                        className='login_id'
                        placeholder={idText}
                        onChange={(event) => { handleChange(event) }}
                    />
                </div>
            </div>
            {/* <label className='pw_info' htmlFor='login_info'>{PwInfo}</label> */}
            <div className='login_inputPw'>
                <label className='pw_label' htmlFor='login_pw'>비밀번호</label>
                <div class="background-wrap">
                    <input
                        type='password'
                        name='password'
                        className='login_pw'
                        placeholder={pwText}
                        onChange={(event) => { handleChange(event) }}
                    />
                </div>
            </div>
        </div>
        </>
    );
}

/* 클릭 버튼 (메인화면) */
export function ClickBtnM(props) {

    const { formData, setError, setInputNullError } = props;
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
                onClick={event => { authAPI(event, formData, setError, setInputNullError) }}
            >
            <img
                src={isHovered ? click1Img : click2Img}
                alt='ClickButton'
            />
            </button>
        </div>
    );
}

/* 클릭 버튼 (랜딩화면) */
export function ClickBtnL(props) {

    const { formData, setError, setInputNullError } = props;
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
                onClick={event => { LPauthAPI(event, formData, setError, setInputNullError) }}
            >
            <img
                src={isHovered ? click1Img : click2Img}
                alt='ClickButton'
            />
            </button>
        </div>
    );
}