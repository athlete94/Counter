import React, {useEffect, useState} from 'react';
import {Screen2} from "./Screen2";
import {Button} from "../Button";


type CounterPropsType = {
    max: number
    start: number
    titleButton: string
    toggleHandler: () => void
    resetHandler: () => void
    incrementHandler: () => void
    screen: number

}

export const Counter2 = ({
                             max,
                             start,
                             titleButton,
                             toggleHandler,
                             resetHandler,
                             incrementHandler,
                             screen
                         }: CounterPropsType) => {


    return (
        <div className="counter">
            <Screen2 screen={screen} max={max}/>

            <div>
                <Button onClickHandler={incrementHandler}
                        titleButton={'inc'}
                        disabled={screen === max}/>
                <Button onClickHandler={resetHandler}
                        titleButton={'reset'}
                        disabled={screen === start}/>
                <Button titleButton={titleButton} onClickHandler={toggleHandler}/>
            </div>
        </div>
    );
};
