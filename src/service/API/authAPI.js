import axios from 'axios';

export const authAPI = async (event, formData) => {
    event.preventDefault();
    console.log('formData: ', formData);

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
            return res.data.data.ok;
        }
    } catch (error) {
        // 로그인 실패
        console.log('로그인 실패'); 
        console.error('Error: ', error); 
    }
}

export default authAPI;