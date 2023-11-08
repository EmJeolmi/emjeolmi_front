import React, { useState  } from 'react';
import styled from 'styled-components';
import './landingpart.css';
import 'bootstrap/dist/css/bootstrap.css';
import { TitleText, Login, ClickBtnL } from '../../components/Login/login';
import { useNavigate } from "react-router-dom";

const Error = styled.strong`
  display: ${(props) => (props.display ? 'block' : 'none')};
`;

const InputNullError = styled.strong`
  display: ${(props) => (props.display ? 'block' : 'none')};
`;

function LandingPart() {

    const [formData, setFormData] = React.useState({
        id:"",
        passwd:"",
    });

    const [error, setError] = useState(false); // 로그인 오류 상태
    const [inputNullError, setInputNullError] = useState(false);

    const navigate = useNavigate();
    const handleGoDiary = () => { // 일기쓰러가기 버튼 클릭 시 호출되는 함수
        navigate('/chainary'); 
    };

  return (
    <>
    <TitleText />
    <div class="wrapper-login">
        <Login className
            formData={formData}
            setFormData={setFormData}
        /> 
        <ClickBtnL className="main_ClickBtnL" formData={formData} setError={setError} setInputNullError={setInputNullError} />
    </div>

    {/* 아이디 오류일 때 */}
    <div className='errormsg'>
      <Error display={error}>
          <label className='logincheck1' >이미 있는 아이디이거나 비밀번호 오류입니다.</label>
      </Error>
      <InputNullError display={inputNullError}>
          <label className='logincheck2' >아이디와 비밀번호를 입력해주세요.</label>
      </InputNullError>
    </div>
    <button className='GoDiary' onClick={handleGoDiary}>↪ 일기 쓰러가기</button>
    </>
  );
}

export default LandingPart;