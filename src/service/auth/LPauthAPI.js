import axios from 'axios';
import LPcheckMyDiaryAPI from '../diary/LPcheckMyDiaryAPI.js';

export const LPauthAPI = async (event, formData, setError, setInputNullError) => {
    event.preventDefault();
    console.log('formData: ', formData);

    if (!formData.id || !formData.password) {
        console.log('아이디 비밀번호 입력하세요');
        setInputNullError(true);
        return;
    } else {

        try {
            const res = await axios.post('http://localhost:8080/api/user/auth', formData, { timeout: 5000 }, {
                headers: {
                    "Content-Type": 'application/json'
                }});

                axios.defaults.headers.common['Authorization'] = 'Bearer ' + res.data;
                
            // 로그인 성공
            // 토큰 로컬에 저장 
            localStorage.setItem('Tokens', JSON.stringify({
                'accessToken': res.data.data.accessToken,
                'refreshToken': res.data.data.refreshToken,
            }))
            if (localStorage.getItem('Tokens') !== null) {
                console.log('로그인 성공'); 
                LPcheckMyDiaryAPI(event, res.data.data.accessToken);
            }
        } catch (error) {
            // 로그인 실패
            setError(true);
            setInputNullError(false);
            console.log('로그인 실패'); 
            console.error('Error: ', error); 
        }
    }
}

export default LPauthAPI;