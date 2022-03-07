import React, {ChangeEvent, useEffect, useState} from 'react';
import {Button} from "../Button";

type SettingsPropsType = {
    setStartValue: (start: string) => void,
    setMaxValue: (max: string) => void
    max: string
    start: string
    setScreen: (screenValue: string) => void
    setDisabledCounterBtn: (disabledCounterBtn: boolean) => void
}

export const Settings = (props: SettingsPropsType) => {
    const {
        setStartValue,
        setMaxValue,
        max,
        start,
        setScreen,
        setDisabledCounterBtn
    } = props

    const [error, setError] = useState('')
    const [disabled, setDisabled] = useState(false)


    const maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setDisabled(false)
        setError('')
        setScreen('Enter values and press set')
        setMaxValue(e.currentTarget.value)

        if (Number(e.currentTarget.value) < 0 || Number(start) < 0) {
            setScreen('Incorrect value!')
            setDisabled(true)
        } else if (Number(e.currentTarget.value) <= Number(start)) {
            setScreen('Max value should be bigger than start value')
            setDisabled(true)
        } else if (e.currentTarget.value === '' || start === '') {
            setDisabled(true)
        } else {
            setDisabled(false)
        }

    }
    const startValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setDisabled(false)
        setError('')
        setScreen('Enter values and press set')
        setStartValue(e.currentTarget.value)

        if (Number(e.currentTarget.value) < 0 || Number(max) < 0) {
            setScreen('Incorrect value!')
            setDisabled(true)
        } else if (Number(e.currentTarget.value) >= Number(max)) {
            setScreen('Max value should be bigger than start value')
            setDisabled(true)
        } else if (e.currentTarget.value === '' || max === '') {
            setDisabled(true)
        } else {
            setDisabled(false)
        }
    }


    const setValuesHandler = () => {
            setDisabled(false)
            setDisabledCounterBtn(false)
            setError('')
            setScreen(start)
    }

    return (
        <div className={'settings'}>
            <div className={'settingsItem'}>
                <span>max value</span>
                <input type="number"
                       value={max}
                       onChange={maxValueHandler}/>
            </div>

            <div className={'settingsItem'}>
                <span>start value</span>
                <input type="number"
                       value={start}
                       onChange={startValueHandler}/>
            </div>
            <div className={'error'}>
                <span>{error}</span>
            </div>
            <Button onClickHandler={setValuesHandler} disabled={disabled} titleButton={'Set'}/>

        </div>
    );
};

