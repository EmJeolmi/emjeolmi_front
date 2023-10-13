import axios from 'axios';

export const diaryUploadAPI = async (event, formData) => {
    event.preventDefault();
    console.log('formData: ', formData);
    console.log('formData.content: ', formData.content);

    try {
        // 로컬 스토리지에서 사용자 토큰을 불러옴
        const storedTokens = JSON.parse(localStorage.getItem('Tokens'));

        if (storedTokens) {
            const accessToken = storedTokens.accessToken;

            // 요청 헤더에 사용자 토큰 추가
            const headers = {
                Authorization: `Bearer ${accessToken}`,
            };

            const res = await axios.post(
                'http://localhost:8080/api/diary/diaryUpload',
                formData,
                {
                    timeout: 5000,
                    headers: headers, // 헤더 추가
                }
            );

            console.log('res: ', res);
            console.log('res.data.ok: ', res.data.ok);
            if (res.data.ok === true) {
                console.log('일기 등록 성공');
                window.location.href = "/chainary/savediary";
            }
        }
    } catch (error) {
        // 일기 등록 실패
        console.log('일기 등록 실패');
        console.error('Error: ', error);
    }
}

export default diaryUploadAPI;