import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';

import {Counter} from "./components/Counter";
import {Settings} from "./components/Settings";
import {Button} from "./components/Button";


let titleButton = 'Set'

function App() {
    const [toggle, setToggle] = useState(false) // переключатель counter и settings

    const [max, setMax] = useState('')
    const [start, setStart] = useState('')

    useEffect(() => {
        let valueMax = localStorage.getItem('max')
        let valueStart = localStorage.getItem('start')
        if(valueMax){
            setMax(valueMax)
        }
        if(valueStart) {
            setStart(valueStart)
        }


    }, [])

    useEffect(() => {
        localStorage.setItem('max', max)
        localStorage.setItem('start', start)
    },[max, start])

    const setMaxValue = (max: string) => {
        setMax(max)
    }
    const setStartValue = (start: string) => {
        setStart(start)
    }

    const toggleHandler = () => {
        setToggle(!toggle)
    }


    return (
        <div className={'App'}>
            {toggle ? <Settings setMaxValue={setMaxValue}
                                setStartValue={setStartValue}
                                max={max}
                                start={start}

                                titleButton={titleButton}
                                toggleHandler={toggleHandler}
            /> : <Counter max={Number(max)}
                          start={Number(start)}
                          titleButton={titleButton}
                          toggleHandler={toggleHandler}/>}

        </div>

    );
}

export default App