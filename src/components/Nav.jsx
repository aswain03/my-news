import React, { useEffect, useState } from "react";
import { getTopics } from "../utils/api";
import { Link } from "react-router-dom";
import "../styles/Header.css";

const Nav = ({ setSortBy, sortBy }) => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then((topicsFromApi) => {
      setTopics(topicsFromApi);
    });
  }, []);

  return (
    <>
      <div className="nav">
        <Link className="nav_alltopics" to="/">
          All Topics
        </Link>
        <ul className="nav_topics">
          {topics.map((topic) => {
            return (
              <li key={topic.slug} className="nav_topic">
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
        <div className="nav_sortbybuttons">
          <button
            className={sortBy === "author" ? "selectedOrder" : "sort"}
            onClick={() => setSortBy("author")}
          >
            Author
          </button>
          <button
            className={sortBy === "title" ? "selectedOrder" : "sort"}
            onClick={() => setSortBy("title")}
          >
            Title
          </button>
          <button
            className={sortBy === "created_at" ? "selectedOrder" : "sort"}
            onClick={() => setSortBy("created_at")}
          >
            Newest
          </button>
          <button
            className={sortBy === "votes" ? "selectedOrder" : "sort"}
            onClick={() => setSortBy("votes")}
          >
            Votes
          </button>
          <button
            className={sortBy === "comment_count" ? "selectedOrder" : "sort"}
            onClick={() => setSortBy("comment_count")}
          >
            Comments
          </button>
        </div>
      </div>
    </>
  );
};

export default Nav;
