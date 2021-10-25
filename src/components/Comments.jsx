import React, { useContext, useEffect, useState } from "react";
import { getComments, deleteComment } from "../utils/api";
import { useParams } from "react-router";
import "../styles/Article.css";
import PostComment from "./PostComment";
import { UserContext } from "../context/User";

const Comments = () => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const { article_id } = useParams();
  const { signIn } = useContext(UserContext);

  useEffect(() => {
    setIsError(false);
    setIsLoading(true);
    getComments(article_id)
      .then((commentsFromApi) => {
        setIsLoading(false);
        setComments((currComments) => {
          return [...currComments, ...commentsFromApi];
        });
      })
      .catch((err) => {
        setIsError(true);
        console.dir(err);
      });
  }, [article_id]);

  const handleDeleteComment = (commentId) => {
    deleteComment(commentId)
      .then((oldComment) => {
        setComments((currComments) => {
          const newComments = currComments.filter(
            (comment) => commentId !== comment.comment_id
          );
          return newComments;
        });
      })
      .catch((err) => {
        console.dir(err);
      });
  };

  if (isLoading) return <p className="isLoading">Reading the manuals...</p>;

  if (isError) return <p className="isError">Chasing the hamsters...</p>;

  return (
    <div className="comments">
      <h1 className="comments_title">Comments</h1>
      <section className="comments_list">
        <ul>
          {comments.map((comment) => {
            return (
              <li key={comment.comment_id} className="comments_singleList">
                <p className="comments_author">{comment.author}</p>
                <p className="comments_body">{comment.body}</p>
                {signIn && signIn.username === comment.author && (
                  <button
                    className="comments_deletebutton"
                    onClick={() => handleDeleteComment(comment.comment_Id)}
                  >
                    Delete
                  </button>
                )}
              </li>
            );
          })}
        </ul>
      </section>
      <section className="comments_new">
        {signIn && <PostComment setComments={setComments} />}
      </section>
    </div>
  );
};

export default Comments;
