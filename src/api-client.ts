import axios from "axios";
import { API_SERVER_URL } from "./public-config";

export const fetchContests = async (contestId) => {
    const resp = await axios.get(`${API_SERVER_URL}/contests/${contestId}`);

    return resp.data.contest;
};

export const fetchContestList = async () => {
    const resp = await axios.get(`${API_SERVER_URL}/contests`);

    return resp.data.contests;
};  