import axios from 'axios';

export const authAPI = async (event, formData) => {
    event.preventDefault();
    console.log(formData);
    try {
        const res = await axios.post('http://localhost:8080/api/user/auth', formData, { timeout: 5000 }, {
            headers: {
                "Content-Type": 'application/json'
            }});

            axios.defaults.headers.common['Authorization'] = 'Bearer ' + res.data;
        
        // 로그인 성공
        // 토큰 로컬에 저장 
        localStorage.setItem('Tokens', JSON.stringify({
            'accessToken': res.data.AccessToken,
            'refreshToken': res.data.RefreshToken
        }))
        alert('로그인 성공'); 
    } catch (error) {
        // 로그인 실패
        if (error.response.status === 401) {
            alert('비밀번호가 일치하지 않습니다.');
        }
        else {
            alert('로그인 실패');
        }  
    }
}

export default authAPI;
