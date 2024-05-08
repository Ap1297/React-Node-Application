import { fetchContests } from "../api-client";
import { useEffect, useState } from "react";
const Contest = ({ initialContest }) => {
  const [contest, setContest] = useState(initialContest);

  /*useEffect(() => {
    fetchContests(initialContest).then((contest) => {
      setContest(contest);
    });
  });*/
  return (
    <div className="contest">
      <div className="title">Contest Description</div>
      <div className="description">{contest.description}</div>
    </div>
  );
};

export default Contest;
