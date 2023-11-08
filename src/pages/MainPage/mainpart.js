import React, { useState } from 'react';
import './mainpart.css';
import 'bootstrap/dist/css/bootstrap.css';
import { TitleText, Login, ClickBtnM } from '../../components/Login/login';
// import inputIdImg from '../../images/input_id.PNG';
import styled from 'styled-components';

const Error = styled.strong`
  display: ${(props) => (props.display ? 'block' : 'none')};
`;

const InputNullError = styled.strong`
  display: ${(props) => (props.display ? 'block' : 'none')};
`;

function MainPart() {

  const [formData, setFormData] = useState({
    id:"",
    password:"",
  });

  const [error, setError] = useState(false);
  const [inputNullError, setInputNullError] = useState(false);


  return (
    <>
    <TitleText />
    <label className='join_msg'>로그인 시 자동으로 계정이 생성돼요 ♪</label>
    <div class="wrapper-login">
      <div className='main_login'>
        <Login
            labelText="아이디" 
            idText="아이디를 입력해주세요 ~" 
            pwText="비밀번호를 입력해주세요 ~"
            formData={formData}
            setFormData={setFormData}
        /> 
      </div>
      <ClickBtnM className="main_ClickBtnM" formData={formData} setError={setError} setInputNullError={setInputNullError} />
    </div>

    {/* 아이디 오류일 때 */}
    <div className='errormsg'>
      <Error display={error}>
          <div>
              <label className='logincheck1' >이미 있는 아이디이거나 비밀번호 오류입니다.</label>
          </div>
      </Error>
      <InputNullError display={inputNullError}>
          <div>
              <label className='logincheck2' >아이디와 비밀번호를 입력해주세요.</label>
          </div>
      </InputNullError>
    </div>
    </>
  );
}

export default MainPart;