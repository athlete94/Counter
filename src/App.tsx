import React from 'react';
import './App.css';
import {HashRouter} from "react-router-dom";
import Navigate from "./components/Navigate";
import Counters from "./components/Counters";
import {AppCounter1Container} from "./components/First/AppCounter1Container";


function App() {

    return  (
        <HashRouter>
            <Navigate />
            <Counters />
        </HashRouter>

        )

}

export default App