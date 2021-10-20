import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTopics } from "../utils/api";
import "../styles/Nav.css";

const Nav = () => {
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

export default Nav;
