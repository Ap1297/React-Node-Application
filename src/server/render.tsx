import { fetchContestList, fetchContests } from "../api-client";
import App from "../components/app";
import ReactDOMServer from "react-dom/server";
const serverRender = async (req) => {
  //fetchContests
  const { contestId } = req.params;

  const initialData = contestId
    ? { currentContest: await fetchContests(contestId) }
    : { contests: await fetchContestList() };

  const initialMarkup = ReactDOMServer.renderToString(
    <App initialData={initialData} />,
  );
  return { initialMarkup, initialData };
};

export default serverRender;
