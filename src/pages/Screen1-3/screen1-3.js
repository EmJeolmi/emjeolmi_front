import React from 'react';
import './screen1-3.css';
import 'bootstrap/dist/css/bootstrap.css';
import diaryBox from '../../images/diarybox.png';
import { MoveAiBtn } from '../../components/MoveAi/moveai';

function Screen1n3() {
    const handleModalScroll = (event) => {
      event.stopPropagation();
    };

  return (
    <>
    <div className="center-container">
      <div className="image-container">
        <img src={diaryBox} alt="DiaryBox" />
      </div>
      <div className='text-container'>
        <label className='datewritten'>2019.02.08 08:25</label>
            <div className="scrollable-content" onWheel={handleModalScroll}>
                <label className='contents'>
                    가나다라마바빯쒫마지막꿿뀕뀁쀍왓집가고싶다고내가왜이걸하고잇는지자고십다뀔에뛺뜅ㄹ욥하이고 아니엄ㄹ마나더써야되는거냐진짜뀌찮게그만쓰고슆ㅁㄹ꿄쌇꼻ㄹㄲ딿뙿ㄹㅇ따루ㅠㅣㅁ띠ㅏㄹ뚝ㄹ딿ㅈ일기작성을내가왜히가소있는거냐무슨말을쓰라는건지진자민트초코먹고싶다붕어빵은언제부터파는거지내일학교에외와야헤꿇ㄸ따르이마러이라ㅜㅁㅇ따르를르르르르르를르르를름링나릉ㅁ랑늘마ㅣㅡㄹ아르으를아오왤케길어정말그만좀쓰자르르를르르를르르꾿웷줨줨낡갈꿸뚫사아자차카카카가나다라마바사아자차카카카카카카카카카카카카카카카카카카카카카카카카카카카카카카카카카카카카카캌카카카카카카카카카카카카카캌카카카카카캌k꿇딿skek가나다라마바사아자차카타파하민ㅇ라ㅓ밍라ㅓㅁ마하이오이게 더 낫냐가나다라마바사안녕하세요아집가고시 ㅍ어미친이거 띄어쓰기가 아니 줄바꾸기가 왜이렇게 됨 왜저래 이게ㅔㅔ제이라미마아ㅅ쒸날짜랑 작성자아이디까먹엇어이런이게제일마지막문장
                </label>
            </div>
        <label className='diarywriter'>w. 작성자아이디</label>
      </div>
    </div>
    <MoveAiBtn />
    </>
  );
}

export default Screen1n3;
