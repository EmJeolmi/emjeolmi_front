import axios from 'axios';

export const showMyDiaryAPI = async (setwrittenDiary) => {

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
            console.log('res.....: ', res);
        }
    } catch(error) {
        console.log('내 일기 읽어오기 실패'); 
        console.error('Error: ', error); 
    }
}

export default showMyDiaryAPI;