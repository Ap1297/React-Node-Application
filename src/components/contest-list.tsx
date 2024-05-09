import axios from "axios";
import ContestPreview from "./contest-preview";
import { useEffect, useState } from "react";
import { fetchContestList } from "../api-client";

const ContestList = ({ initialContests, onContestClick }) => {
  const [contests, setContests] = useState(
    initialContests ?? [],
  );

  useEffect(() => {
    if (!initialContests) {
      // fetch or axios to connect api server url
      fetchContestList().then((contests) => {
        // state
        setContests(contests);
      });
    }
  }, [initialContests]);

  return (
    <div className="contest-list">
      {contests.map((contest) => {
        return (
          <ContestPreview
            key={contest.id}
            contest={contest}
            onClick={onContestClick}
          />
        );
      })}
    </div>
  );
};

export default ContestList;
