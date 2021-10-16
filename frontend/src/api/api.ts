import axios from "axios";
import { OpenAPI, LoginService, UsersService, Token } from "./code";

const BASE_API_URL = process.env.REACT_APP_SERVICE_URL
  ? process.env.REACT_APP_SERVICE_URL
  : "http://localhost:8000";

const instance = axios.create({
  baseURL: BASE_API_URL,
  timeout: 10,
});

OpenAPI.BASE = BASE_API_URL;

const getHeaders = () => {
  const tokenOrNull = localStorage.getItem("jwt-token");
  if (tokenOrNull) {
    const token: Token = JSON.parse(tokenOrNull);
    if (new Date() > new Date(token.expire_at)) {
      instance
        .post<Token>(`${BASE_API_URL}/refresh-token`, {
          refresh_token: token.refresh_token,
        })
        .then((res) => {});
    }
  }
  return {};
};

OpenAPI.HEADERS = getHeaders();
