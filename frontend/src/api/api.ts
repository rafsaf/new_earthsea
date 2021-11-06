import axios from "axios";
import { Token } from "./models/Token";


export const BASE_API_URL = process.env.REACT_APP_API_LINK;

const instance = axios.create({
  baseURL: BASE_API_URL,
  timeout: 2000,
  headers: {
    "Content-Type": "application/json"
  }
});

const getBearerToken = (): string | null => {
  // THIS RUNS ON EVERY REQUEST
  // fetch token from localStorage
  const tokenOrNull = localStorage.getItem("jwt-token");
  // if fetched
  if (tokenOrNull) {
    const token: Token = JSON.parse(tokenOrNull);
    // if not valid fetch new and save it to localStoarge
    if (new Date() > new Date(token.expire_at)) {
      localStorage.removeItem("jwt-token");
      axios
        .post<Token>(`${BASE_API_URL}/refresh-token`, {
          refresh_token: token.refresh_token
        })
        .then((res) => {
          localStorage.setItem("jwt-token", JSON.stringify(res.data));
          return `Bearer ${res.data.access_token}`;
        }).catch(err => {
          localStorage.removeItem("jwt-token");
        })
    }
    return `Bearer ${token.access_token}`;
  }
  return null;
};

instance.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    const token = getBearerToken();
    if (token !== null) {
      if (config.headers !== undefined) {
        config.headers["Authorization"] = token;
      }
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

export default instance;

