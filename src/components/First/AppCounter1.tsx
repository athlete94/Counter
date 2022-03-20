import React, {ChangeEvent, useEffect} from 'react';
import {Settings} from "./Settings1";
import {Counter1} from "./Counter1";
import {connect, useDispatch, useSelector} from "react-redux";
import {
    StateType, setDisabledCounterBtn,
    setDisabledSettingsBtn,
    setError,
    setMaxValue,
    setScreen,
    setStartValue, ActionType, selectValues
} from "../../redux/CounterReducer1";
import {Dispatch} from "redux";


export const AppCounter1 = () => {

    const {
        max,
        start,
        screenValue,
        disabledCounterBtn,
        disabledSettingsBtn,
        error,
    } = useSelector(selectValues)

    const dispatch = useDispatch<Dispatch<ActionType>>()


    useEffect(() => {
        let valueMax = localStorage.getItem('max')
        let valueStart = localStorage.getItem('start')
        let screenValue = localStorage.getItem('screen')
        if (Number(valueMax) <= Number(valueStart) || (Number(valueMax) < 0 || Number(valueStart) < 0)) {
            dispatch(setDisabledCounterBtn(true))
            dispatch(setDisabledSettingsBtn(true))
        } else {
            dispatch(setDisabledCounterBtn(false))
            dispatch(setDisabledSettingsBtn(false))
        }
        if (valueMax) {
            dispatch(setMaxValue(valueMax))
        }
        if (valueStart) {
            dispatch(setStartValue(valueStart))
        }
        if (screenValue) {
            dispatch(setScreen(screenValue))
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('max', max)
        localStorage.setItem('start', start)
        localStorage.setItem('screen', screenValue)
    }, [max, start, screenValue])

    //settings
    const maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setDisabledSettingsBtn(false))
        dispatch(setError(''))
        dispatch(setScreen('Enter values and press set'))
        dispatch(setMaxValue(e.currentTarget.value))

        if (Number(e.currentTarget.value) < 0 || Number(start) < 0) {
            dispatch(setScreen('Incorrect value!'))
            dispatch(setDisabledSettingsBtn(true))
        } else if (Number(e.currentTarget.value) <= Number(start)) {
            dispatch(setScreen('Max value should be bigger than start value'))
            dispatch(setDisabledSettingsBtn(true))
        } else if (e.currentTarget.value === '' || start === '') {
            dispatch(setDisabledSettingsBtn(true))
        } else {
            dispatch(setDisabledSettingsBtn(false))
        }
    }
    const startValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        dispatch(setDisabledSettingsBtn(false))
        dispatch(setError(''))
        dispatch(setScreen('Enter values and press set'))
        dispatch(setStartValue(e.currentTarget.value))

        if (Number(e.currentTarget.value) < 0 || Number(max) < 0) {
            dispatch(setScreen('Incorrect value!'))
            dispatch(setDisabledSettingsBtn(true))
        } else if (Number(e.currentTarget.value) >= Number(max)) {
            dispatch(setScreen('Max value should be bigger than start value'))
            dispatch(setDisabledSettingsBtn(true))
        } else if (e.currentTarget.value === '' || max === '') {
            dispatch(setDisabledSettingsBtn(true))
        } else {
            dispatch(setDisabledSettingsBtn(false))
        }
    }
    const setValuesHandler = () => {
        dispatch(setDisabledSettingsBtn(false))
        dispatch(setDisabledCounterBtn(false))
        dispatch(setError(''))
        dispatch(setScreen(start))
    }

    //counter
    const incrementHandler = () => {
        dispatch(setScreen(String(Number(screenValue) + 1)))
    }
    const resetHandler = () => {
        dispatch(setScreen(String(start)))
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

// export type AppCounter1PropsType = MapStateToPropsType & MapDispatchToPropsType
//
// type MapDispatchToPropsType = {
//     setMaxValue: (max: string) => void,
//     setStartValue: (start: string) => void,
//     setScreen: (screen: string) => void,
//     setError: (error: string) => void,
//     setDisabledSettingsBtn: (disabled: boolean) => void,
//     setDisabledCounterBtn: (disabled: boolean) => void,
//
// }
// type MapStateToPropsType = StateType
// // деструктуризация типизации, из state достаем CounterReducer1 и типизируем его
// const mapStateToProps = ({ CounterReducer1 }: {CounterReducer1: StateType}): MapStateToPropsType => {
//     return {
//         max: CounterReducer1.max,
//         start: CounterReducer1.start,
//         screenValue: CounterReducer1.screenValue,
//         disabledCounterBtn: CounterReducer1.disabledCounterBtn,
//         disabledSettingsBtn: CounterReducer1.disabledSettingsBtn,
//         error: CounterReducer1.error,
//     }
// }


// export const AppCounter1Container = connect(mapStateToProps, {
//     // setMaxValue,
//     // setStartValue,
//     // setScreen,
//     // setError,
//     // setDisabledSettingsBtn,
//     // setDisabledCounterBtn,
// })(AppCounter1);
