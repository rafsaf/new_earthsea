import React, { useState } from "react";
import instance from "../api/api";
import { User } from "../api/models/User";

const Index = () => {
  const [message, setMessage] = useState<string>("start");
  const getMe = () => {
    instance
      .get<User>("/users/me")
      .then((res) => setMessage(`${res.data.email} me!`))
      .catch((error) => setMessage(JSON.stringify(error)));
  };
  return (
    <div>
      <h1>index page</h1>
      <button onClick={getMe}>me</button>
      <div>{message}</div>
    </div>
  );
};

export default Index;
