import React from "react";
import '../../pages/Screen2-2/screen2-2.css';
import 'bootstrap/dist/css/bootstrap.css';
import diaryUploadAPI from "../../service/diary/diaryUploadAPI";
import cloudImg from '../../images/cloud.png';

export function ContentTextarea(props) {
    const { formData, setFormData } = props;

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormData({ ...formData, [name]:value });
    }

    return (
        <div className='w-text-container'>
            <label className='datewritten'></label>
            <textarea className='wirte-contents textarea-custom' 
                placeholder=' 일기를 작성해보세요 !'
                spellCheck="false"
                name='content'
                // ref={contentRef}
                // value={content}
                // onChange={(e) => setContent(e.target.value)}
                value={ formData.content }
                onChange={(event) => { handleChange(event) }}
            />
            <label className='diarywriter'></label>
        </div>
    );
};

export function ChangedBtn(props) {

    const {openChDiary} = props;

    return (
        <div className='changedBtn'>
            <img src={cloudImg} alt="ChangedBtn" />
            <button className='chBtn' onClick={openChDiary}>
                교환한 일기
            </button>
        </div>
    );
};

export function SaveBtn(props) {

    const {formData} = props;

    return (
        <div className='saveBtn'>
            <img src={cloudImg} alt="SaveBtn" />
            <button className='svBtn'
                onClick={event => { diaryUploadAPI(event, formData) }}
            >저장하기</button>
        </div>
    );
};