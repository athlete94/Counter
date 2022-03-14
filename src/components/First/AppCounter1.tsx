import React, {useEffect, useState} from 'react';
import {Settings} from "./Settings1";
import {Counter1} from "./Counter1";
import {connect} from "react-redux";
import {Dispatch} from "redux";
import {RootStateType} from "../../redux/store";
import {initialStateType, setMaxValue, setScreen, setStartValue} from "../../redux/CounterReducer1";


export const AppCounter1 = (props: AppCounter1ContainerPropsType) => {

   const {
       max,
       start,
       screenValue,
       disabledCounterBtn,
       disabledSettingsBtn,
       error,
       setMaxValue,
       setStartValue,
       setScreen
   } = props


    // useEffect(() => {
    //     let valueMax = localStorage.getItem('max')
    //     let valueStart = localStorage.getItem('start')
    //     let screenValue = localStorage.getItem('screen')
    //     if(Number(valueMax) <= Number(valueStart) || (Number(valueMax) < 0 || Number(valueStart) )) {
    //         setDisabledCounterBtn(true)
    //         setDisabledSettingsBtn(true)
    //     }
    //     if (valueMax) {
    //         setMax(valueMax)
    //     }
    //     if (valueStart) {
    //         setStart(valueStart)
    //     }
    //     if (screenValue) {
    //         setScreenValue(screenValue)
    //     }
    // }, [])
    // useEffect(() => {
    //     localStorage.setItem('max', max)
    //     localStorage.setItem('start', start)
    //     localStorage.setItem('screen', screenValue)
    // }, [max, start, screenValue])
    //


    return (
        <div className={'AppCounter'}>
            <Settings setMaxValue={setMaxValue}
                      setStartValue={setStartValue}
                      max={max}
                      start={start}
                      setScreen={setScreen}
                      setDisabledCounterBtn={setDisabledCounterBtn}

                      disabledSettingsBtn={disabledSettingsBtn}
                      setDisabledSettingsBtn={setDisabledSettingsBtn}


            />
            <Counter1 max={Number(max)}
                      start={Number(start)}
                      screenValue={screenValue}
                      setScreen={setScreen}
                      disabledCounterBtn={disabledCounterBtn}
            />

        </div>

    );
}

export type AppCounter1ContainerPropsType = MapStateToPropsType & MapDispatchToPropsType

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
}
const mapDispatchToProps = (dispatch: Dispatch): MapDispatchToPropsType => {
    return {
        setMaxValue: (max: string) => (dispatch(setMaxValue(max))),
        setStartValue: (start: string) => (dispatch(setStartValue(start))),
        setScreen: (screen: string) => (dispatch(setScreen(screen))),
    }
}

let AppCounter1Container = connect(mapStateToProps, mapDispatchToProps)(AppCounter1);