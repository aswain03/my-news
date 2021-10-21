import React, { useEffect, useState } from "react";
import { getComments } from "../utils/api";
import { useParams } from "react-router";
import "../styles/Comments.css";
import PostComment from "./PostComment";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useParams();

  useEffect(() => {
    setIsLoading(true);
    getComments(article_id)
      .then((commentsFromApi) => {
        setComments(commentsFromApi);
        setIsLoading(false);
      })
      .catch((err) => {
        console.dir(err);
      });
  }, [article_id]);

  if (isLoading) return <p className="isLoading">Reading the manuals...</p>;

  return (
    <div className="comments">
      <section className="comments_list">
        {comments.map((comment) => {
          return (
            <li key={comment.comment_id} className="comments_singleList">
              <p className="comments_author">{comment.author}</p>
              <p className="comments_body">{comment.body}</p>
            </li>
          );
        })}
      </section>
      <section className="comments_new">
        <PostComment setComments={setComments} />
      </section>
    </div>
  );
};

export default Comments;
