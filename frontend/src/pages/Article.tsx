import React, { useEffect, useState } from "react";
import instance from "../api/api";
import { Token } from "../api/models/Token";
import { useHistory, useLocation } from "react-router-dom";
import { ContentBase } from "../api/models/ContentBase";
import MDEditor from "@uiw/react-md-editor";

const Article = () => {
  const [newContent, setNewContent] = useState<string | undefined>("");
  const [message, setMessage] = useState<string>("");
  const [content, setContent] = useState<null | ContentBase>(null);
  const updateArticle = () => {
    instance
      .put<ContentBase>(`/content/${title}`, { content: newContent })
      .then((res) => {
        setContent(res.data);
      })
      .catch((error) => {
        setMessage(error.message);
      });
  };
  let history = useHistory();
  let location = useLocation();
  const title = location.pathname.slice(3);
  useEffect(() => {
    instance
      .get<ContentBase>(`/content/${title}`)
      .then((res) => {
        setContent(res.data);
        setNewContent(res.data.content);
      })
      .catch((error) => {
        setMessage(error.message);
      });
  }, [title]);
  return (
    <div>
      {message}
      {content ? (
        <div>
          <h2
            style={{
              color: "blue",
              marginBottom: "1rem",
              textDecoration: "underline",
            }}
          >
            {content.id}
          </h2>

          <MDEditor.Markdown source={content.content} />
        </div>
      ) : (
        "..."
      )}
      {localStorage.getItem("jwt-token") !== null ? (
        <>
          <div style={{ marginTop: "10rem" }}></div>
          <MDEditor value={newContent} onChange={setNewContent} />
          <button onClick={updateArticle}>Submit</button>
        </>
      ) : null}
    </div>
  );
};

export default Article;
