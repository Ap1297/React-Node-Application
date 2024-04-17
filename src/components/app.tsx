import ContestList from "./contest-list";
import Header from "./header";
import {useState,useEffect} from "react";
const App = ({initialData}) => {
    console.log({initialData});

    return( 
    <div className="container" >
        <Header message = "Naming Contest"/>
        <ContestList contests={initialData.contests}/>
        
    </div>
    );
};

export default App;