import React, {useEffect, useState} from 'react';
import {Screen1} from "./Screen1";
import {Button} from "../Button";


type CounterPropsType = {
    max: number
    start: number
    screenValue: string
    setScreen: (screenValue: string) => void
}

export const Counter1 = ({max, start, screenValue, setScreen}: CounterPropsType) => {



    // useEffect(() => {
    //     let numberAsString = localStorage.getItem('number')
    //     if (numberAsString) {
    //         let localNumber = JSON.parse(numberAsString)
    //         setNumber(prev => localNumber = prev)
    //     }
    // }, [])
    //
    // useEffect(() => {
    //     localStorage.setItem('number', JSON.stringify(number))
    // }, [number])

    const incrementHandler = () => {
        setScreen(String(Number(screenValue) + 1))
    }
    const resetHandler = () => {
        setScreen(String(start))
    }

    return (
        <div className="counter">
            <Screen1 number={String(screenValue)} max={max}/>

            <div>
                <Button onClickHandler={incrementHandler}
                        titleButton={'inc'}
                        disabled={Number(screenValue) === max}/>
                <Button onClickHandler={resetHandler}
                        titleButton={'reset'}
                        disabled={Number(screenValue) === start}/>
            </div>
        </div>
    );
};
