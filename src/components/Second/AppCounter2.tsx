import React, {ChangeEvent, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {Dispatch} from "redux";
import {
    CounterReducer2ActionType,
    InitialStateType, setDisabled, setError,
    setMax,
    setScreen,
    setStart,
    setToggle
} from "../../redux/CounterReducer2";
import {RootStateType} from "../../redux/store";
import {Settings2} from "./Settings2";
import {Counter2} from "./Counter2";

let titleButton = 'Set'

export const AppCounter2 = () => {
    const {
        max,
        start,
        screen,
        toggle,
        error,
        disabled
    } = useSelector<RootStateType, InitialStateType >(state => state.CounterReducer2)
    const dispatch = useDispatch<Dispatch<CounterReducer2ActionType>>()

    useEffect(() => {
        let valueMax = localStorage.getItem('max1')
        let valueStart = localStorage.getItem('start1')
        let number = localStorage.getItem('number1')
        if(valueMax){
            dispatch(setMax(valueMax))
        }
        if(valueStart) {
            dispatch(setStart(valueStart))
        }
        if(number) {
            dispatch(setScreen(Number(number)))
        }


    }, [])
    useEffect(() => {
        localStorage.setItem('max1', max)
        localStorage.setItem('start1', start)
        localStorage.setItem('number1', screen.toString())
    },[max, start, screen])

    const incrementHandler = () => {
        dispatch(setScreen(screen + 1))
    }
    const resetHandler = () => {
        dispatch(setScreen(Number(start)))
    }
    const toggleHandler = () => {
        dispatch(setToggle(!toggle))
    }

    const maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setDisabled(false))
        dispatch(setError(''))
        dispatch(setMax(e.currentTarget.value))

    }
    const startValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setDisabled(false))
        dispatch(setError(''))
        dispatch(setStart(e.currentTarget.value))
    }
    const setValuesHandler = () => {

        if (Number(max) <= Number(start)) {
            dispatch(setDisabled(true))
            dispatch(setError('Max value should be more than start value'))
        }
        else if (Number(max) < 0 || Number(start) < 0) {
            dispatch(setDisabled(true))
            dispatch(setError('Values should be more than 0'))
        }
        else {
            dispatch(setDisabled(false))
            dispatch(setScreen(Number(start)))
            toggleHandler()
        }
    }


    return (
        <div className={'AppCounter'}>
            {toggle ? <Settings2
                                 max={max}
                                 start={start}
                                 disabled={disabled}
                                 titleButton={titleButton}
                                 error={error}
                                 maxValueHandler={maxValueHandler}
                                 startValueHandler={startValueHandler}
                                 setValuesHandler={setValuesHandler}


            /> : <Counter2 max={Number(max)}
                           start={Number(start)}
                           titleButton={titleButton}
                           toggleHandler={toggleHandler}

                           incrementHandler={incrementHandler}
                           resetHandler={resetHandler}
                           screen={screen}
            />}
        </div>
    );
};
