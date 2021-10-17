import React, { useState } from "react";
import instance from "../api/api";
import { Token } from "../api/models/Token";
import { User } from "../api/models/User";

interface IndexProps {}

const Index: React.FC<IndexProps> = () => {
  const [message, setMessage] = useState<string>("start");
  const login = () => {
    const form = new FormData();
    form.append("username", "example@example.com");
    form.append("password", "vRekSnaoSOxIKmljqUjO");
    instance
      .post<Token>("/login/access-token", form, {
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
      })
      .then((res) => setMessage(`${res.data} token!`))
      .catch((error) => setMessage(JSON.stringify(error)));
  };
  const getMe = () => {
    instance
      .get<User>("/users/me")
      .then((res) => setMessage(`${res.data.email} me!`))
      .catch((error) => setMessage(JSON.stringify(error)));
  };
  return (
    <div>
      <h1>index page</h1>
      <button onClick={login}>login</button>
      <button onClick={getMe}>me</button>
      <div>{message}</div>
    </div>
  );
};

export default Index;
