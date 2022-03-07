import React, {ChangeEvent, useEffect, useState} from 'react';
import {Button} from "../Button";

type SettingsPropsType = {
    setStartValue: (start: string) => void,
    setMaxValue: (max: string) => void
    max: string
    start: string
    setScreen: (screenValue: string) => void
    setDisabledCounterBtn: (disabledCounterBtn: boolean) => void
    disabledSettingsBtn: boolean
    setDisabledSettingsBtn: (disabledSettingsBtn: boolean) => void
}

export const Settings = (props: SettingsPropsType) => {
    const {
        setStartValue,
        setMaxValue,
        max,
        start,
        setScreen,
        setDisabledCounterBtn,
        disabledSettingsBtn,
        setDisabledSettingsBtn
    } = props

    const [error, setError] = useState('')



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
            <Button onClickHandler={setValuesHandler} disabled={disabledSettingsBtn} titleButton={'Set'}/>

        </div>
    );
};

