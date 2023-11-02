import axios from 'axios';

export const readMyDiaryAPI = async (diaryData, setDiaryData) => {

    try {
        const storedTokens = JSON.parse(localStorage.getItem('Tokens'));

        if (storedTokens) {
            const accessToken = storedTokens.accessToken;

            // 요청 헤더에 사용자 토큰 추가
            const headers = {
                Authorization: `Bearer ${accessToken}`,
            };

            const res = await axios.get(
                'http://localhost:8080/api/diary/MydiaryRead',
                {
                    timeout: 5000,
                    headers: headers, // 헤더 추가
                }
            );
            diaryData = res.data.data;
            // console.log('--------&&', diaryData[0].rid);
            // console.log('--------&&', diaryData[0].content);
            // console.log('--------&&', diaryData[0].time);
            // const rid = diaryData[0].rid;
            const content = diaryData[0].content;
            const time = diaryData[0].time;
            const id = res.data.id[0].id;
            //console.log(diaryData[0].content)
           // console.log(res.data)
            setDiaryData({ id, content, time });
        }
    } catch(error) {
        console.log('내 일기 읽어오기 실패'); 
        console.error('Error: ', error); 
    }
}

export default readMyDiaryAPI;