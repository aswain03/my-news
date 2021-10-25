import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getArticle } from "../utils/api";
import Voting from "./Voting";
import Comments from "./Comments";
import "../styles/Article.css";

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
    <>
      <div className="article">
        <Comments />
        <section className="article_votes">
          <span className="article_voteButtons">
            <Voting votes={article.votes} article_id={article_id} />
          </span>
        </section>
        <section className="article_info">
          <p className="article_topic">{article.topic}</p>
          <h1 className="article_title">{article.title}</h1>
          <p className="article_author">{article.author}</p>
          <p className="article_body">{article.body}</p>
        </section>
      </div>
    </>
  );
};

export default Article;
