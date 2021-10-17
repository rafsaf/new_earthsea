import React, { useState } from "react";
import { Formik, Field, Form } from "formik";
import instance from "../api/api";
import { Token } from "../api/models/Token";
import { useHistory, useLocation } from "react-router-dom";

const Login = () => {
  const [message, setMessage] = useState<string>("");
  let history = useHistory();
  let location = useLocation();
  // @ts-ignore
  let { from } = location.state || { from: { pathname: "/" } };

  return (
    <div>
      <Formik
        initialValues={{
          username: "",
          password: "",
        }}
        onSubmit={async (values) => {
          if (values.username === "" || values.password === "") {
            setMessage("Fields cannot be empty");
            return;
          }
          const form = new FormData();
          form.append("username", values.username);
          form.append("password", values.password);
          instance
            .post<Token>("/login/access-token", form, {
              headers: {
                "Content-Type": "application/x-www-form-urlencoded",
              },
            })
            .then((res) => {
              localStorage.setItem("jwt-token", JSON.stringify(res.data));
              history.replace(from);
            })
            .catch((error) => setMessage(JSON.stringify(error.message)));
        }}
      >
        <Form>
          <br />
          {message}
          <label htmlFor="username"></label>
          <br />
          <Field id="username" name="username" placeholder="username" />
          <br />
          <label htmlFor="password"></label>
          <br />
          <Field id="password" name="password" placeholder="password" />
          <br />
          <br />
          <button type="submit">Submit</button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
