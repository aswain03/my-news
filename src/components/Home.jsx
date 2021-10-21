import "../styles/Home.css";
import React from "react";
import { useState, useEffect } from "react";
import { getArticles } from "../utils/api";
import { useParams } from "react-router";
import { Link } from "react-router-dom";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [sortBy] = useState("created_at");
  const [isLoading, setIsLoading] = useState(false);
  const { topic } = useParams();
  useEffect(() => {
    setIsLoading(true);
    getArticles({ topic, sortBy })
      .then((articlesFromApi) => {
        setArticles(() => {
          return articlesFromApi.articles;
        });
        setIsLoading(false);
      })
      .catch((err) => {
        console.dir(err);
      });
  }, [topic, sortBy]);

  if (isLoading) {
    return <p className="isLoading">Searching for more steam...</p>;
  }

  return (
    <div className="home">
      <ul className="home_articleList">
        {articles.map((article) => {
          return (
            <li key={article.article_id} className="home_articleListSingle">
              <Link to={`/articles/${article.article_id}`}>
                <section className="home_article">
                  <p className="home_topic">{article.topic}</p>
                  <h2 className="home_title">{article.title}</h2>
                  <p className="home_timeStamp">{article.created_at}</p>
                  <p className="home_comments">
                    Comments:{article.comment_count}
                  </p>
                  <p className="name_author">By {article.author}</p>
                </section>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Home;
