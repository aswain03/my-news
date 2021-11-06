import React, { useEffect, useState } from "react";
import { Button } from "../styles/Button.styled";
import { getTopics } from "../utils/api";
import { Link } from "react-router-dom";

const Nav = ({ setSortBy, sortBy }) => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then((topicsFromApi) => {
      setTopics(topicsFromApi);
    });
  }, []);

  return (
    <>
      <div>
        <Link className="Link" to="/">
          All Topics
        </Link>
        <ul>
          {topics.map((topic) => {
            return (
              <li key={topic.slug}>
                <Link
                  className="Link"
                  to={`/topics/${topic.slug}`}
                  key={topic.slug}
                >
                  {topic.slug}
                </Link>
              </li>
            );
          })}
        </ul>
        <div>
          <Button
            className={sortBy === "author" ? "selectedOrder" : "sort"}
            onClick={() => setSortBy("author")}
          >
            Author
          </Button>
          <Button
            className={sortBy === "title" ? "selectedOrder" : "sort"}
            onClick={() => setSortBy("title")}
          >
            Title
          </Button>
          <Button
            className={sortBy === "created_at" ? "selectedOrder" : "sort"}
            onClick={() => setSortBy("created_at")}
          >
            Newest
          </Button>
          <Button
            className={sortBy === "votes" ? "selectedOrder" : "sort"}
            onClick={() => setSortBy("votes")}
          >
            Votes
          </Button>
          <Button
            className={sortBy === "comment_count" ? "selectedOrder" : "sort"}
            onClick={() => setSortBy("comment_count")}
          >
            Comments
          </Button>
        </div>
      </div>
    </>
  );
};

export default Nav;
