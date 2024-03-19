import axios from "axios";

const instanse = axios.create({
  // withCredentials: true,
  baseURL: process.env.REACT_APP_API_APP_URL,
});

// Токен доступа
instanse.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${process.env.REACT_APP_APP_TOKEN}`;
  return config;
});

// Проверка на авторизацию
// $api.interceptors.response.use(
//   (config) => {
//     return config;
//   },
//   async (error) => {
//     const originalRequest = error.config;
//     if (
//       error.response.status == 401 &&
//       error.config &&
//       !error.config._isRetry
//     ) {
//       originalRequest._isRetry = true;
//       try {
//         const response =
//           (await axios.get) <
//           AuthResponse >
//           (`${API_URL}/refresh`, { withCredentials: true });
//         localStorage.setItem("token", response.data.accessToken);
//         return $api.request(originalRequest);
//       } catch (e) {
//         console.log("НЕ АВТОРИЗОВАН");
//       }
//     }
//     throw error;
//   }
// );

export default instanse;
