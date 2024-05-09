import { fetchContests } from "../api-client";
import { useEffect, useState } from "react";
const Contest = ({ initialContest, onContestListClick }) => {
  const [contest, setContest] = useState(initialContest);

  useEffect(
    () => {
      if (!contest.names) {
        fetchContests(contest.id).then((contest) => {
          setContest(contest);
        });
      }
    },
    contest.id,
    contest.names,
  );

  const handleClickContestList = (event) => {
    event.preventDefault();
    onContestListClick();
  };

  return (
    <div className="contest">
      <div className="title">Contest Description</div>
      <div className="description">{contest.description}</div>
      <a
        href="/"
        className="link"
        onClick={handleClickContestList}
      >
        Contest List
      </a>
    </div>
  );
};

export default Contest;
