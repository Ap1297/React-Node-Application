import { fetchContests } from "../api-client";
import { useEffect, useState } from "react";
const Contest = ({ initialContest }) => {
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
  return (
    <div className="contest">
      <div className="title">Contest Description</div>
      <div className="description">{contest.description}</div>
    </div>
  );
};

export default Contest;
