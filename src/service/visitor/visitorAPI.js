import axios from 'axios';

export const readVisitorsByUserRidAPI = async (userId, setVisitData) => {
 
  try {
    const storedTokens = JSON.parse(localStorage.getItem('Tokens'));

    if (storedTokens) {
      const accessToken = storedTokens.accessToken;

      // 요청 헤더에 사용자 토큰 추가
      const headers = {
        Authorization: `Bearer ${accessToken}`,
      };

      console.log(`read API에서 넘겨주는 ID는 ${userId}`)
      
      const res = await axios.get(
        `http://localhost:8080/api/visitor/${userId}`,
        {
          timeout: 5000,
          headers: headers, // 헤더 추가
          params: {
            ID: userId,
          },
        }
      );

    // console.log(res.data);
      const visitorsData = res.data; // 서버에서 반환한 방문자 데이터
      console.log(visitorsData)
     // coonsole.log(visitorsData);
      // 방문자 데이터를 상태로 설정
      setVisitData(visitorsData);
    //  console.log('--------&&', visitorsData);
    }
  } catch (error) {
    console.log('방문자 목록 불러오기 실패');
    console.error('Error: ', error);
  }
};
