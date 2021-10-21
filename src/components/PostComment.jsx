import { useContext, useState } from "react";
import { postComment } from "../utils/api";
import { useParams } from "react-router";
import "../styles/PostComment.css";
import { UserContext } from "../context/User";

const PostComment = ({ setComments }) => {
  const [addComment, setAddComment] = useState("");
  const { article_id } = useParams();
  const { user } = useContext(UserContext);

  const handleComment = (event) => {
    event.preventDefault();
    postComment(article_id, addComment, user.username)
      .then((commentFromApi) => {
        setComments((currComments) => {
          const copyCurrComments = [...currComments];
          copyCurrComments.pop();
          return [commentFromApi, ...copyCurrComments];
        });
        setAddComment("");
      })
      .catch((err) => {
        console.dir(err);
      });
  };
  return (
    <div className="postcomment">
      <form className="postComment_form" onSubmit={handleComment}>
        <input
          type="text"
          value={addComment}
          onChange={(event) => setAddComment(event.target.value)}
          className="post_commentInput"
          required
        />
        <button className="postComment_submit">Post comment</button>
      </form>
    </div>
  );
};

export default PostComment;
