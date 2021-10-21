import { useState } from "react";
import { getVotes } from "../utils/api";
import "../styles/Voting.css";

const Voting = ({ votes, article_id }) => {
  const [votesNew, setVotesNew] = useState(0);
  const handleVotes = (num) => {
    setVotesNew((currVotes) => currVotes + num);
    getVotes(article_id, num).catch(() => {
      setVotesNew((currVotes) => currVotes - num);
    });
  };

  return (
    <div className="voting">
      <button className="voting_upvote" onClick={() => handleVotes(1)}>
        YEEAH!
      </button>
      <p className="voting_showVotes">{votes + votesNew}</p>
      <button className="voting_downvote" onClick={() => handleVotes(-1)}>
        NAAAH!
      </button>
    </div>
  );
};

export default Voting;
