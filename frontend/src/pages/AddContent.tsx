// @ts-nocheck
import React from "react";
import MDEditor from "@uiw/react-md-editor";
import { Formik, Field, Form, useFormikContext } from "formik";
import instance from "../api/api";

const AutoSaveToken = () => {
  // Grab values and submitForm from context
  const { values, submitForm } = useFormikContext();
  React.useEffect(() => {
    // Submit the form imperatively as an effect as soon as form values.token are 6 digits long
    localStorage.setItem("add-form-title", values.title);
    localStorage.setItem("add-form-categories", values.categories);
  }, [values, submitForm]);
  return null;
};

function MyEditor() {
  const [message, setMessage] = React.useState<string>("");
  const [value, setValue] = React.useState(localStorage.getItem("add-form-md"));

  React.useEffect(() => {
    localStorage.setItem("add-form-md", value);
  }, [value]);

  return (
    <div>
      <div>
        <Formik
          initialValues={{
            title: localStorage.getItem("add-form-title")
              ? localStorage.getItem("add-form-title")
              : "",
            categories: localStorage.getItem("add-form-categories")
              ? localStorage.getItem("add-form-categories")
              : "",
          }}
          onReset={async (values) => {
            values.title = "";
            values.categories = "";
            setValue("");
          }}
          onSubmit={async (values) => {
            if (values.title === "" || values.categories === "") {
              setMessage("Fields cannot be empty");
              return;
            }
            setMessage("");
            localStorage.removeItem("add-form-title");
            localStorage.removeItem("add-form-categories");
            localStorage.removeItem("add-form-md");
          }}
        >
          <Form>
            <br />
            {message}
            <br />
            <Field id="title" name="title" placeholder="title" />
            <br />
            <br />
            <Field id="categories" name="categories" placeholder="categories" />
            <br />
            <br />
            <MDEditor height={500} value={value} onChange={setValue} />
            <div style={{ padding: "20px 0 0 0" }} />
            <button type="submit">Submit</button>
            <button type="reset">Reset all</button>

            <AutoSaveToken></AutoSaveToken>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

const AddContent = () => {
  return (
    <div>
      <MyEditor></MyEditor>
    </div>
  );
};

export default AddContent;
