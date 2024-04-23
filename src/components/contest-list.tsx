import axios from "axios";
import ContestPreview from "./contest-preview";
import { useEffect , useState} from "react";
import { fetchContests } from "../api-client";


const ContestList = ({initialContests}) => {
   
    const [contests, setContests] = useState(initialContests)

   useEffect(() =>{
    // fetch or axios to connect api server url
/*fetchContests().then((contests) => {
    // state
        setContests(contests);
    });*/
 },[]);


    return (<div className="contest-list">{contests.map((contest) => {
        return (<ContestPreview key={contest.id} contest={contest} />);

    })
}</div>
);
};

export default ContestList;