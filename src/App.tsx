import React from 'react';
import './App.css';
import {HashRouter} from "react-router-dom";
import Navigate from "./components/Navigate";
import Counters from "./components/Counters";


function App() {

    return  (
        <HashRouter>
            <Navigate />
            <Counters />
        </HashRouter>

        )

}

export default App