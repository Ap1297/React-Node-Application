import Header from "./header";
import {useState} from "react";
const App = () => {

    //Example of state and event handler
    const [counter,setCounter] = useState(0);

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