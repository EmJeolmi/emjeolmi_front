import React from 'react';
import './mainpart.css';
import 'bootstrap/dist/css/bootstrap.css';
import { TitleText, Login, ClickBtn2 } from '../../components/Login/login';
import inputIdImg from '../../images/input_id.PNG';

function MainPart() {

  return (
    <>
    <TitleText />
    <div class="wrapper-login">
      <div className='main_login'>
        <Login 
           // IdInfo="내 일기주소를 입력해주세요 !"
           // PwInfo="로그인 시 비밀번호를 입력해주세요 !"
            labelText="아이디" 
            idText="아이디를 입력해주세요 ~" 
            pwText="비밀번호를 입력해주세요 ~"
        /> 
      </div>
      <ClickBtn2 className="main_ClickBtn2" />
    </div>

    {/* 아이디 오류일 때 */}
    <label className='logincheck'>이미 있는 아이디이거나 비밀번호 오류입니다.</label>
    </>
  );
}

export default MainPart;
