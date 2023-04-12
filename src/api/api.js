import axios from "axios";
axios.defaults.baseURL = "http://localhost:9000";  // API 연동
axios.defaults.withCredentials = true;  // 쿠키 값을 전송한다.
export const api = async (method, url, data) => {
  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");
  const headers =
    accessToken && refreshToken
      ? {
          Authorization: accessToken,
          RefreshToken: refreshToken,
        }
      : {};
  const response = await axios({
    method,
    data,
    url,
    headers,
  });
  return response;
};