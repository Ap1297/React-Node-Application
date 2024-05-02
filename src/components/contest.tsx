import { fetchContests } from "../api-client";
import { useEffect, useState } from "react";
const Contest = ({ id }) => {
  const [contest, setContest] = useState({});

  useEffect(() => {
    fetchContests(id).then((contest) => {
      setContest(contest);
    });
  });
  return (
    <div className="contest">
      <div className="title">Contest Description</div>
      <div className="description">{contest.description}</div>
    </div>
  );
};

export default Contest;
