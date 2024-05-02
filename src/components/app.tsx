import Contest from "./contest";
import ContestList from "./contest-list";
import Header from "./header";
import { useState, useEffect } from "react";

const App = ({ initialData }) => {
  const [page, setPage] = useState<"contestList" | "contest">(
    "contestList",
  );
  const [currentContestId, setCurrentContestId] = useState<
    String | undefined
  >();
  const navigateToContest = (id) => {
    setPage("contest");
    setCurrentContestId(id);
  };

  const pageContent = () => {
    switch (page) {
      case "contestList":
        return (
          <ContestList
            initialContests={initialData.contests}
            onContestClick={navigateToContest}
          />
        );
      case "contest":
        return <Contest id={currentContestId} />;
    }
  };

  return (
    <div className="container">
      <Header message="Naming Contest" />
      {pageContent()}
    </div>
  );
};

export default App;
