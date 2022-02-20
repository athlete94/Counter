import React, {useEffect, useState} from 'react';
import {Settings2} from "./Settings2";
import {Counter2} from "./Counter2";

let titleButton = 'Set'

const AppCounter2 = () => {
    const [toggle, setToggle] = useState(false) // переключатель counter и settings

    const [max, setMax] = useState('')
    const [start, setStart] = useState('')

    const [number, setNumber] = useState(Number(start))

    useEffect(() => {
        let valueMax = localStorage.getItem('max1')
        let valueStart = localStorage.getItem('start1')
        let number = localStorage.getItem('number1')
        if(valueMax){
            setMax(valueMax)
        }
        if(valueStart) {
            setStart(valueStart)
        }
        if(number) {
            setNumber(Number(number))
        }


    }, [])

    useEffect(() => {
        localStorage.setItem('max1', max)
        localStorage.setItem('start1', start)
        localStorage.setItem('number1', number.toString())
    },[max, start, number])

    const setMaxValue = (max: string) => {
        setMax(max)
    }
    const setStartValue = (start: string) => {
        setStart(start)
    }

    const incrementHandler = () => {
        setNumber(number + 1)
    }
    const resetHandler = () => {
        setNumber(Number(start))
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
                                 setNumber={setNumber}

            /> : <Counter2 max={Number(max)}
                           start={Number(start)}
                           titleButton={titleButton}
                           toggleHandler={toggleHandler}

                           incrementHandler={incrementHandler}
                           resetHandler={resetHandler}
                           number={number}
            />}

        </div>

    );
};

export default AppCounter2;