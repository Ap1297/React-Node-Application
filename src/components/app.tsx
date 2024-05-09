import Contest from "./contest";
import ContestList from "./contest-list";
import Header from "./header";
import { useState, useEffect } from "react";

const App = ({ initialData }) => {
  const [page, setPage] = useState<"contestList" | "contest">(
    initialData.currentContest ? "contest" : "contestList",
  );
  const [currentContest, setCurrentContestId] = useState<
    object | undefined
  >(initialData.CurrentContest);

  useEffect(() => {
    window.onpopstate = (event) => {
      const newPage = event.state?.id
        ? "contest"
        : "contestList";
      setPage(newPage);
      setCurrentContestId({ id: event.state?.id });
    };
  }, []);

  const navigateToContest = (id) => {
    window.history.pushState({ id }, "", `/contest/${id}`);
    setPage("contest");
    setCurrentContestId({ id: id });
  };

  const navigateToContestList = (id) => {
    window.history.pushState({}, "", `/`);
    setPage("contestList");
    setCurrentContestId(undefined);
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
        return (
          <Contest
            initialContest={currentContest}
            onContestListClick={navigateToContestList}
          />
        );
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
