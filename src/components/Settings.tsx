import React, {ChangeEvent, useState} from 'react';
import {valuesType} from "../App";

type SettingsPropsType = {
    setValues: (max:string, start: string) => void
    values: valuesType
}

export const Settings = ({setValues, values}:SettingsPropsType) => {

    const [max, setMax] = useState(String(values.max))
    const [start, setStart] = useState(String(values.start))
    const [error, setError] = useState('')

    const maxValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setMax(e.currentTarget.value)
    }
    const startValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setStart(e.currentTarget.value)
    }
    const setValuesHandler = () => {
        if (Number(max) > Number(start)) {
            setValues(max, start)
            setError('')
        } else {
            setError('Start value must be less than max value')
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

            <button onClick={setValuesHandler}>Set values</button>

        </div>
    );
};

