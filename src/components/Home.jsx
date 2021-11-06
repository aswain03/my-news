import { StyledCard } from "../styles/Card.styled";
import React from "react";
import { useState, useEffect } from "react";
import { getArticles } from "../utils/api";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import Nav from "./Nav";

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [sortBy, setSortBy] = useState("created_at");

  const { topic } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getArticles({ topic, sortBy })
      .then((articlesFromApi) => {
        setArticles(() => {
          return [...articlesFromApi.articles];
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
    <section>
      <Nav setSortBy={setSortBy} sortBy={sortBy} />
      <ul>
        {articles.map((article) => {
          return (
            <Link to={`/articles/${article.article_id}`} className="Link">
              <StyledCard>
                <li key={article.article_id}>
                  <section className="home_article">
                    <p>{article.topic}</p>
                    <h1>{article.title}</h1>
                    <p>{article.created_at}</p>
                    <p>Comments:{article.comment_count}</p>
                    <p>By {article.author}</p>
                  </section>
                </li>
              </StyledCard>
            </Link>
          );
        })}
      </ul>
    </section>
  );
};

export default Home;
