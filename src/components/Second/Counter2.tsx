import React, {useEffect, useState} from 'react';
import {Screen2} from "./Screen2";
import {Button} from "../Button";


type CounterPropsType = {
    max: number
    start: number
    titleButton: string
    toggleHandler: () => void
}

export const Counter2 = ({max, start, titleButton, toggleHandler}: CounterPropsType) => {

    const [number, setNumber] = useState(Number(start))

    useEffect(() => {
        let numberAsString = localStorage.getItem('number')
        if(numberAsString) {
            let localNumber = JSON.parse(numberAsString)
            setNumber(prev =>  localNumber = prev)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('number', JSON.stringify(number))
    }, [number])

    const incrementHandler = () => {
        setNumber(number + 1)
    }
    const resetHandler = () => {
        setNumber(Number(start))
    }

    const onClickHandler = () => {
        toggleHandler()
    }

    return (
        <div className="counter">
            <Screen2 number={number} max={max}/>

            <div >
                <Button onClickHandler={incrementHandler}
                        titleButton={'inc'}
                        disabled={number === max}/>
                <Button onClickHandler={resetHandler}
                        titleButton={'reset'}
                        disabled={number === start}/>
                <Button titleButton={titleButton} onClickHandler={onClickHandler} />
            </div>
        </div>
    );
};
