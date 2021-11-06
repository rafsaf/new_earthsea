import React from "react";
import MDEditor from "@uiw/react-md-editor";
import { Formik, Field, Form, useFormikContext } from "formik";
import instance from "../api/api";
import { useHistory } from "react-router-dom";
import { ContentBase } from "../api/models/ContentBase";
import useLocalStorage from "../components/utils/useLocalStorage";

interface AutoSaveInterface {
  setTitle: (value: string | null) => void;
  setDescription: (value: string | null) => void;
  setCategories: (value: string | null) => void;
}

const AutoSyncLocalStorage = (props: AutoSaveInterface) => {
  const { setTitle, setCategories, setDescription } = props;
  const { values } = useFormikContext<{
    title: string;
    categories: string;
    description: string;
  }>();
  React.useEffect(() => {
    setTitle(values.title);
  }, [values.title, setTitle]);
  React.useEffect(() => {
    setDescription(values.description);
  }, [values.description, setDescription]);
  React.useEffect(() => {
    setCategories(values.categories);
  }, [values.categories, setCategories]);
  return null;
};

const AddContent = () => {
  const [message, setMessage] = React.useState<string>("");
  const [text, setText] = useLocalStorage("add-form-md", "");
  const [title, setTitle] = useLocalStorage("add-form-title", "");
  const [description, setDescription] = useLocalStorage(
    "add-form-description",
    ""
  );
  const [categories, setCategories] = useLocalStorage(
    "add-form-categories",
    ""
  );
  let history = useHistory();

  const handleTextChange = (value?: string) => {
    if (value) {
      setText(value);
    }
  };

  return (
    <div>
      <div>
        <Formik
          initialValues={{
            title: title,
            description: description,
            categories: categories
          }}
          onReset={async (values) => {
            values.title = "";
            values.categories = "";
            values.description = "";
            setText("");
            setMessage("");
          }}
          onSubmit={(values, { resetForm }) => {
            if (values.title === "" || values.categories === "") {
              setMessage("Fields cannot be empty");
              return;
            }

            instance
              .post<ContentBase>("/content/", {
                id: values.title,
                desc: values.description,
                categories: values.categories,
                content: text
              })
              .then(() => {
                resetForm();
              })
              .then(() => {
                history.replace("/");
              })
              .catch((error) => {
                setMessage(JSON.stringify(error.message));
              });
          }}
        >
          <Form>
            <br />
            {message}
            <br />
            <Field id="title" name="title" placeholder="title" />
            <br />
            <br />
            <Field
              id="description"
              name="description"
              placeholder="description"
            />
            <br />
            <br />
            <Field id="categories" name="categories" placeholder="categories" />
            <br />
            <br />

            <MDEditor
              height={500}
              value={text ? text : ""}
              onChange={handleTextChange}
            />
            <div style={{ padding: "20px 0 0 0" }} />
            <button type="submit">Submit</button>
            <button type="reset">Reset all</button>

            <AutoSyncLocalStorage
              setCategories={setCategories}
              setDescription={setDescription}
              setTitle={setTitle}
            />
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default AddContent;
