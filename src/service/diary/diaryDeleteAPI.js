import axios from 'axios';

export const diaryDeleteAPI = async () => {

    try {
        await axios.post('http://localhost:8080/api/diary/diaryDelete', { timeout: 5000 });

    } catch (error) {
        console.log('24시간 지난 일기 삭제 실패'); 
        console.error('Error: ', error); 
    };
}

export default diaryDeleteAPI;