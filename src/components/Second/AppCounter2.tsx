import React, {useEffect, useState} from 'react';
import {Settings2} from "./Settings2";
import {Counter2} from "./Counter2";

let titleButton = 'Set'

const AppCounter2 = () => {
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
        <div className={'AppCounter'}>
            {toggle ? <Settings2 setMaxValue={setMaxValue}
                                 setStartValue={setStartValue}
                                 max={max}
                                 start={start}

                                 titleButton={titleButton}
                                 toggleHandler={toggleHandler}
            /> : <Counter2 max={Number(max)}
                           start={Number(start)}
                           titleButton={titleButton}
                           toggleHandler={toggleHandler}/>}

        </div>

    );
};

export default AppCounter2;