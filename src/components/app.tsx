import Header from "./header";
import {useState,useEffect} from "react";
const App = () => {

    //Example of state and event handler
    const [counter,setCounter] = useState(0);

    //Example of useEffect
    useEffect(() => {
       const intervalId = setInterval(() => {
            setCounter(counter+1);
        }, 1000);

        //Clean up function
        return () => {
            clearInterval(intervalId);
        };
    })

    
    return( 
    <div className="container" >
        <Header message = "Naming Contest"/>
        <button onClick={() => {
            setCounter(counter + 1);
        }}>{counter}</button>
    </div>
    );
};

export default App;