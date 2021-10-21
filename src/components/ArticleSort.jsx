import React from "react";
import { useEffect, useState } from "react";
import { getTopics } from "../utils/api";
import { Link } from "react-router-dom";
import "../styles/Nav.css";

const ArticleSort = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then((topicsFromApi) => {
      setTopics(topicsFromApi);
    });
  }, []);

  return (
    <div className="nav">
      <ul className="nav_topics">
        {topics.map((topic) => {
          return (
            <li className="nav_topic">
              <Link
                className="nav_topicLink"
                to={`/topics/${topic.slug}`}
                key={topic.slug}
              >
                {topic.slug}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ArticleSort;
