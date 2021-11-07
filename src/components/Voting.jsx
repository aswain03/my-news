import { useState, useContext } from "react";
import { patchVotes } from "../utils/api";
import { UserContext } from "../context/User";
import { Button } from "../styles/Button.styled";

const Voting = ({ votes, article_id }) => {
  const [votesNew, setVotesNew] = useState(0);
  const [error, setError] = useState(false);
  const { signIn } = useContext(UserContext);

  const handleVotes = (num) => {
    setError(false);
    setVotesNew((currVotes) => currVotes + num);
    patchVotes(article_id, num)
      .catch(() => {
        setVotesNew((currVotes) => currVotes - num);
      })
      .catch((err) => {
        setError(true);
        console.dir(err);
      });
  };

  return (
    <div>
      {signIn && <Button onClick={() => handleVotes(1)}>Upvote</Button>}
      <p>{votes + votesNew}</p>
      {signIn && <Button onClick={() => handleVotes(-1)}>Downvote</Button>}
      {error && <p>Try again later</p>}
    </div>
  );
};

export default Voting;
