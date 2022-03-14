import React, {ChangeEvent} from 'react';
import {Button} from "../Button";

type SettingsPropsType = {
    max: string,
    start: string,
    maxValueHandler: (e: ChangeEvent<HTMLInputElement>) => void,
    startValueHandler: (e: ChangeEvent<HTMLInputElement>) => void,
    setValuesHandler: () => void,
    error: string,
    disabledSettingsBtn: boolean,
}

export const Settings = (props: SettingsPropsType) => {
    const {
        max,
        start,
        maxValueHandler,
        startValueHandler,
        setValuesHandler,
        error,
        disabledSettingsBtn
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
            <Button onClickHandler={setValuesHandler} disabled={disabledSettingsBtn} titleButton={'Set'}/>

        </div>
    );
};

