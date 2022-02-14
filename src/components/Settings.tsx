import React, {ChangeEvent, useEffect, useState} from 'react';
import {Button} from "./Button";

type SettingsPropsType = {
    setStartValue: (start: string) => void,
    setMaxValue: (max: string) => void
    max: string
    start: string

    titleButton: string
    toggleHandler: () => void
}


export const Settings = ({setStartValue, setMaxValue, max, start, titleButton, toggleHandler}: SettingsPropsType) => {

    const [error, setError] = useState('')
    const [disabled, setDisabled] = useState(false)


    const maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setDisabled(false)
        setError('')
        setMaxValue(e.currentTarget.value.replace(/[^\d]/g, ''))

    }
    const startValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setDisabled(false)
        setError('')
        setStartValue(e.currentTarget.value.replace(/[^\d]/g, ''))
    }


    const setValuesHandler = () => {

        if (Number(max) <= Number(start)) {
            setDisabled(true)
            setError('Max value should be more than start value')
        } else {
            debugger
            setDisabled(false)
            toggleHandler()
        }
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
            <Button onClickHandler={setValuesHandler} titleButton={titleButton} disabled={disabled}/>

        </div>
    );
};

