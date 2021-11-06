import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getArticle } from "../utils/api";
import Voting from "./Voting";
import Comments from "./Comments";

const Article = () => {
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [invalidId, setInvalidId] = useState(false);
  const { article_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    setInvalidId(true);
    getArticle(article_id)
      .then((articleFromApi) => {
        setArticle(articleFromApi.article[0]);
        setIsLoading(false);
        setInvalidId(false);
      })
      .catch((err) => {
        setInvalidId(true);
        console.dir(err);
      });
  }, [article_id]);

  if (invalidId) return <p className="invalid">Finding the page...</p>;

  if (isLoading) {
    return <p className="isLoading">Biting our nails...</p>;
  }

  return (
    <div>
      <section>
        <p>{article.topic}</p>
        <h1>{article.title}</h1>
        <p>{article.author}</p>
        <p>{article.body}</p>
      </section>
      <Comments />
      <section>
        <span>
          <Voting votes={article.votes} article_id={article_id} />
        </span>
      </section>
    </div>
  );
};

export default Article;
