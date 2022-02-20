import React, {useEffect, useState} from 'react';
import {Screen1} from "./Screen1";
import {Button} from "../Button";


type CounterPropsType = {
    max: number
    start: number
    screenValue: string
    setScreen: (screenValue: string) => void
    disabledCounterBtn: boolean
}

export const Counter1 = ({max, start, screenValue, setScreen, disabledCounterBtn}: CounterPropsType) => {


    const incrementHandler = () => {
        setScreen(String(Number(screenValue) + 1))
    }
    const resetHandler = () => {
        setScreen(String(start))
    }

    return (
        <div className="counter">
            <Screen1 screen={String(screenValue)} max={max}/>

            <div>
                <Button onClickHandler={incrementHandler}
                        titleButton={'inc'}
                        disabled={Number(screenValue) === max || disabledCounterBtn }
                />
                <Button onClickHandler={resetHandler}
                        titleButton={'reset'}
                        disabled={Number(screenValue) === start || disabledCounterBtn}/>
            </div>
        </div>
    );
};
