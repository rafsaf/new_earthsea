import React, { useState } from "react";
import { Link } from "react-router-dom";
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
      <button onClick={getMe}>me</button>
      <div>{message}</div>
      <h2>
        <Link to="/asdasd">Lorem ipsum dolor sit amet</Link>
      </h2>
      Consectetur adipisicing elit. Cum pariatur illum architecto, ea explicabo
      quos incidunt a consequatur voluptates, officiis aperiam dignissimos nam
      obcaecati provident aliquid quo et? Corrupti, eum.
    </div>
  );
};

export default Index;
