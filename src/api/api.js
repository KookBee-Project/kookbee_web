import axios from "axios";
axios.defaults.baseURL = "http://34.64.173.178:9000";
axios.defaults.withCredentials = true;
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