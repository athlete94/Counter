import React, {ChangeEvent, useEffect, useState} from 'react';
import {Button} from "../Button";

type SettingsPropsType = {
    max: string
    start: string
    disabled: boolean
    titleButton: string
    error: string
    maxValueHandler: (e: ChangeEvent<HTMLInputElement>) => void
    startValueHandler: (e: ChangeEvent<HTMLInputElement>) => void
    setValuesHandler: () => void
}


export const Settings2 = (props: SettingsPropsType) => {
    const {
        max,
        start,
        titleButton,
        disabled,
        error,
        maxValueHandler,
        startValueHandler,
        setValuesHandler
    } = props

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

