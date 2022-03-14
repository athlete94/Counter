import React, {ChangeEvent, useEffect, useState} from 'react';
import {Settings} from "./Settings1";
import {Counter1} from "./Counter1";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {RootStateType} from "../../redux/store";
import {
    initialStateType, setDisabledCounterBtn,
    setDisabledSettingsBtn,
    setError,
    setMaxValue,
    setScreen,
    setStartValue
} from "../../redux/CounterReducer1";


export const AppCounter1 = (props: AppCounter1PropsType) => {

   const {
       max,
       start,
       screenValue,
       disabledCounterBtn,
       disabledSettingsBtn,
       error,
       setMaxValue,
       setStartValue,
       setScreen,
       setDisabledSettingsBtn,
       setDisabledCounterBtn
   } = props


    useEffect(() => {
        let valueMax = localStorage.getItem('max')
        let valueStart = localStorage.getItem('start')
        let screenValue = localStorage.getItem('screen')
        if(Number(valueMax) <= Number(valueStart) || (Number(valueMax) < 0 || Number(valueStart) < 0 )) {
            setDisabledCounterBtn(true)
            setDisabledSettingsBtn(true)
        }
        else {
            setDisabledCounterBtn(false)
            setDisabledSettingsBtn(false)
        }
        if (valueMax) {
            setMaxValue(valueMax)
        }
        if (valueStart) {
            setStartValue(valueStart)
        }
        if (screenValue) {
            setScreen(screenValue)
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('max', max)
        localStorage.setItem('start', start)
        localStorage.setItem('screen', screenValue)
    }, [max, start, screenValue])



    //settings
    const maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setDisabledSettingsBtn(false)
        setError('')
        setScreen('Enter values and press set')
        setMaxValue(e.currentTarget.value)

        if (Number(e.currentTarget.value) < 0 || Number(start) < 0) {
            setScreen('Incorrect value!')
            setDisabledSettingsBtn(true)
        } else if (Number(e.currentTarget.value) <= Number(start)) {
            setScreen('Max value should be bigger than start value')
            setDisabledSettingsBtn(true)
        } else if (e.currentTarget.value === '' || start === '') {
            setDisabledSettingsBtn(true)
        } else {
            setDisabledSettingsBtn(false)
        }
    }
    const startValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setDisabledSettingsBtn(false)
        setError('')
        setScreen('Enter values and press set')
        setStartValue(e.currentTarget.value)

        if (Number(e.currentTarget.value) < 0 || Number(max) < 0) {
            setScreen('Incorrect value!')
            setDisabledSettingsBtn(true)
        } else if (Number(e.currentTarget.value) >= Number(max)) {
            setScreen('Max value should be bigger than start value')
            setDisabledSettingsBtn(true)
        } else if (e.currentTarget.value === '' || max === '') {
            setDisabledSettingsBtn(true)
        } else {
            setDisabledSettingsBtn(false)
        }
    }
    const setValuesHandler = () => {
        setDisabledSettingsBtn(false)
        setDisabledCounterBtn(false)
        setError('')
        setScreen(start)
    }

    //counter
    const incrementHandler = () => {
        setScreen(String(Number(screenValue) + 1))
    }
    const resetHandler = () => {
        setScreen(String(start))
    }


    return (
        <div className={'AppCounter'}>
            <Settings
                max={max}
                start={start}
                maxValueHandler={maxValueHandler}
                startValueHandler={startValueHandler}
                setValuesHandler={setValuesHandler}
                error={error}
                disabledSettingsBtn={disabledSettingsBtn}
            />
            <Counter1 max={Number(max)}
                      start={Number(start)}
                      screenValue={screenValue}
                      disabledCounterBtn={disabledCounterBtn}

                      incrementHandler={incrementHandler}
                      resetHandler={resetHandler}
            />

        </div>

    );
}

export type AppCounter1PropsType = MapStateToPropsType & MapDispatchToPropsType

type MapStateToPropsType = initialStateType
const mapStateToProps = (state: RootStateType): MapStateToPropsType => {
    return {
        max: state.CounterReducer1.max,
        start: state.CounterReducer1.start,
        screenValue: state.CounterReducer1.screenValue,
        disabledCounterBtn: state.CounterReducer1.disabledCounterBtn,
        disabledSettingsBtn: state.CounterReducer1.disabledSettingsBtn,
        error: state.CounterReducer1.error,
    }
}

type MapDispatchToPropsType = {
    setMaxValue: (max: string) => void,
    setStartValue: (start: string) => void,
    setScreen: (screen: string) => void,
    setError: (error: string) => void,
    setDisabledSettingsBtn: (disabled: boolean) => void,
    setDisabledCounterBtn: (disabled: boolean) => void,

}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        setMaxValue: (max: string) => (dispatch(setMaxValue(max))),
        setStartValue: (start: string) => (dispatch(setStartValue(start))),
        setScreen: (screen: string) => (dispatch(setScreen(screen))),
        setError: (error: string) => (dispatch(setError(error))),
        setDisabledSettingsBtn: (disabled: boolean) => dispatch(setDisabledSettingsBtn(disabled)),
        setDisabledCounterBtn: (disabled: boolean) => dispatch(setDisabledCounterBtn(disabled))
    }
}

export const AppCounter1Container = connect(mapStateToProps, mapDispatchToProps)(AppCounter1);