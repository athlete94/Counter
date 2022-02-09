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

let titleButton = 'Settings'

function App() {
    const [toggle, setToggle] = useState(false) // переключатель counter и settings

    const onClickHandler = () => {
        setToggle(!toggle)
        toggle ? titleButton = 'Settings' : titleButton = 'Counter'
    }

    // задаем значения max и start из компоненты Settings
    const setValues = (max: string, start: string) => {
        values.max = Number(max)
        values.start = Number(start)
    }

    return (
        <div className={'App'}>
            {toggle ? <Settings values={values} setValues={setValues}/> : <Counter values={values}/>}

            <button className={'AppButton'} onClick={onClickHandler}>{titleButton}</button>

        </div>

    );
}

export default App