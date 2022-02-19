import React from 'react';
import {NavLink} from "react-router-dom";
import {PATH} from "./Counters";


const Navigate = () => {
    return (
        <div className={'navigate'}>
            <NavLink to={PATH.COUNTER_1}>Counter1</NavLink>
            <NavLink to={PATH.COUNTER_2}>Counter2</NavLink>
        </div>
    );
};

export default Navigate;