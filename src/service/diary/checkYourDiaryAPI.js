import axios from 'axios';
import { useState } from 'react';
import readYourDiaryAPI from './readYourDiaryAPI';

export const checkOtherDiaryAPI = async (accessToken, yourID, setDiaryData) => {

    try {
        const headers = {
            Authorization: `Bearer ${accessToken}`,
        };

       // console.log(yourID);
        const res = await axios.get(
            `http://localhost:8080/api/diary/${yourID}`,
            {
                timeout: 5000,
                headers: headers,
                params: {
                    ID: yourID,
                },
            }
        );

        if (res.data.ok === true) {
            console.log('상대방 일기 읽어오기 성공');
            window.location.href=`/chainary/conn/readdiary/${yourID}`;
    
        } else {
            console.log('상대방 일기 없음');
            window.location.href = `/chainary/conn/yourempty/${yourID}`;
        }
    } catch(error) {
        console.log('상대방 일기 읽어오기 실패'); 
        console.error('Error: ', error); 
    }
}

export default checkOtherDiaryAPI;