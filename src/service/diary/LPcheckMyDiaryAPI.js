import axios from 'axios';

export const LPcheckMyDiaryAPI = async (event, accessToken, yourID) => {
    event.preventDefault();

    try {
        const headers = {
            Authorization: `Bearer ${accessToken}`,
        };

        const res = await axios.get(
            `http://localhost:8080/api/diary/MydiaryRead`,
            {
                timeout: 5000,
                headers: headers,
            }
        );
        console.log('res: ', res);
        console.log('res.data: ', res.data);
        if (res.data.ok === true) {
            console.log('내 일기 읽어오기 성공');
            window.location.href = `/chainary/conn/readdiary/${yourID}`;
        } else {
            console.log('내 일기 없음');
            window.location.href = `/chainary/conn/myempty/${yourID}`;
        }
    } catch(error) {
        console.log('내 일기 읽어오기 실패'); 
        console.error('Error: ', error); 
    }
}

export default LPcheckMyDiaryAPI;