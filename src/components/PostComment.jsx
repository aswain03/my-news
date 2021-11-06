import { useState, useContext } from "react";
import { UserContext } from "../context/User";
import { postComment } from "../utils/api";
import { useParams } from "react-router";

const PostComment = ({ setComments }) => {
  const [addComment, setAddComment] = useState("");
  const [isError, setIsError] = useState(false);
  const { signIn } = useContext(UserContext);
  const { article_id } = useParams();

  const handleComment = (event) => {
    event.preventDefault();
    setIsError(false);
    postComment(article_id, addComment, signIn.username)
      .then((commentFromApi) => {
        setComments((currComments) => {
          const copyCurrComments = [...currComments];
          copyCurrComments.pop();
          return [commentFromApi, ...copyCurrComments];
        });
        setAddComment("");
      })
      .catch((err) => {
        setIsError(true);
        console.dir(err);
      });
  };

  if (isError) return <p>This is not the page you are looking for...</p>;

  return (
    <div>
      <form onSubmit={handleComment}>
        <input
          type="textarea"
          value={addComment}
          onChange={(event) => setAddComment(event.target.value)}
          required
        />
        <button>Post comment</button>
      </form>
    </div>
  );
};

export default PostComment;
