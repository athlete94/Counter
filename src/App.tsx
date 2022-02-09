import React, {useState} from 'react';
import './App.css';

import {Counter} from "./components/Counter";
import {Settings} from "./components/Settings";

export type valuesType = {
    max: number
    start: number
}

let values: valuesType = {
    max: 5,
    start: 0
}

function App() {

    const [toggle, setToggle] = useState(false)


    const onClickHandler = () => {
        setToggle(!toggle)
    }

    const setValues = (max: string, start: string) => {
        values.max = Number(max)
        values.start = Number(start)
    }

    return (
        <div className={'App'}>
            {toggle ? <Settings values={values} setValues={setValues}/> : <Counter values={values}/>}

            <button className={'buttonSettings'} onClick={onClickHandler}>Settings</button>

        </div>

    );
}

export default App