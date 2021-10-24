import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import instance from "../api/api";
import { ContentShort } from "../api/models/ContentShort";

const Index = () => {
  const [input, setInput] = useState<string>("");
  const [articles, setArticles] = useState<ContentShort[]>([]);
  const [count, setCount] = useState<string>("0");
  const [message, setMessage] = useState<string>("");
  const [offset, setOffset] = useState<number>(0);
  const [limit, setLimit] = useState<number>(50);

  const onChangeHandle = (e: React.FormEvent<HTMLInputElement>) => {
    const newValue = e.currentTarget.value;
    setInput(newValue);
  };

  useEffect(() => {
    instance
      .get<ContentShort[]>(
        `/content/?limit=${limit}&offset=${offset}&ilike=${input}`
      )
      .then((res) => {
        setArticles(res.data);
        setCount(res.headers["total-count"]);
      })
      .catch((error) => setMessage(JSON.stringify(error)));
  }, [input, offset, limit]);

  return (
    <div>
      <div>{message}</div>

      <div className="input-group">
        <input onChange={onChangeHandle} className="index-input" />

        <h4 className="total-count">Liczba wyników: {count}</h4>
      </div>
      {articles.map((article) => (
        <div id={article.id}>
          <h2>
            <Link to={`/-/${article.id}`}>{article.id}</Link>
          </h2>
          {article.desc}
        </div>
      ))}
    </div>
  );
};

export default Index;
