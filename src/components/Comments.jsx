import React, { useContext, useEffect, useState } from "react";
import { StyledCard } from "../styles/Card.styled";
import { Button } from "../styles/Button.styled";
import { getComments, deleteComment } from "../utils/api";
import { useParams } from "react-router";
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

  const handleDeleteComment = (comment_id) => {
    deleteComment(comment_id)
      .then((oldComment) => {
        setComments((currComments) => {
          const newComments = currComments.filter(
            (comment) => comment_id !== comment.comment_id
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
    <div>
      <h1>Comments</h1>
      <section>{signIn && <PostComment setComments={setComments} />}</section>
      <section>
        <ul>
          {comments.map((comment) => {
            return (
              <StyledCard>
                <li key={comment.comment_id}>
                  <p>{comment.author}</p>
                  <p>{comment.body}</p>
                  {signIn && signIn.username === comment.author && (
                    <Button
                      onClick={() => handleDeleteComment(comment.comment_id)}
                    >
                      Delete
                    </Button>
                  )}
                </li>
              </StyledCard>
            );
          })}
        </ul>
      </section>
    </div>
  );
};

export default Comments;
