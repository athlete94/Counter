import React from 'react';
import {Screen1} from "./Screen1";
import {Button} from "../Button";


type CounterPropsType = {
    max: number
    start: number
    screenValue: string
    disabledCounterBtn: boolean
    incrementHandler: () => void
    resetHandler: () => void
}

export const Counter1 = (props: CounterPropsType) => {

    const {
        max,
        start,
        screenValue,
        disabledCounterBtn,
        incrementHandler,
        resetHandler
    } = props

    return (
        <div className="counter">
            <Screen1 screen={String(screenValue)} max={max}/>

            <div>
                <Button onClickHandler={incrementHandler}
                        titleButton={'inc'}
                        disabled={Number(screenValue) === max || disabledCounterBtn}
                />
                <Button onClickHandler={resetHandler}
                        titleButton={'reset'}
                        disabled={Number(screenValue) === start || disabledCounterBtn}/>
            </div>
        </div>
    );
};
