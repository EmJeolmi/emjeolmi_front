import React from 'react';
import './mainpart.css';
import 'bootstrap/dist/css/bootstrap.css';

function MainPart() {

  return (
    <>
    <hr className="hr-szz" />

    {/* 타이틀 & 더보기 */}
    <div className='mainpagetitle'>
      <div className='maindiaryt'>
        <label className="maindiarytitle">한 줄 일기</label>
        <button className='maindiaryplus'>더보기 +</button>
      </div>
      <div className='mainimaget'>
        <label className="mainimagetitle">사진첩</label>
        <button className='mainimageplus'>더보기 +</button>
      </div>
    </div>

    {/* 한 줄 일기 */}
    <div className='maindiary'>
      <div className='maindiaryname'> {/* data 값으로 변경 */}
          <li>김예빈</li>
          <li>김예삔</li>
          <li>김에빈</li>
      </div>
      <div className='maindiarytext'> {/* data 값으로 변경 */}
          <label>쏼라쏼라랄랄랄라라~</label> <tr />
          <label>쏼라쏼라~</label> <tr />
          <label>쏼라쏼라~</label>
      </div>
      <div className='maindiaryheart'> {/* data 값으로 변경 */}
          <label>♡ 250</label> <tr />
          <label>♡ 120</label> <tr />
          <label>♡ 30</label>
      </div>
    </div>
    </>
  );
}

export default MainPart;
