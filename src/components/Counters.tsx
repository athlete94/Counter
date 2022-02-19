import React from 'react';
import {Route, Routes} from "react-router-dom";
import AppCounter1 from "./First/AppCounter1";
import AppCounter2 from "./Second/AppCounter2";


export const PATH = {
    COUNTER_1: '/',
    COUNTER_2: '/counter2'
}

const Counters = () => {
    return (
        <div>
            <Routes>
                <Route path={PATH.COUNTER_1} element={<AppCounter1 />}/>
                <Route path={PATH.COUNTER_2} element={<AppCounter2 />}/>
            </Routes>
        </div>
    );
};

export default Counters;