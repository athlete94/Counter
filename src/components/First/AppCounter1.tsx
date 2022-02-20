import React, {useEffect, useState} from 'react';
import {Settings} from "./Settings1";
import {Counter1} from "./Counter1";


const AppCounter1 = () => {

    const [max, setMax] = useState('')
    const [start, setStart] = useState('')
    const [screenValue, setScreenValue] = useState('')
    const [disabledCounterBtn, setDisabledCounterBtn] = useState(false)


    useEffect(() => {
        let valueMax = localStorage.getItem('max')
        let valueStart = localStorage.getItem('start')
        let screenValue = localStorage.getItem('screen')
        if (valueMax) {
            setMax(valueMax)
        }
        if (valueStart) {
            setStart(valueStart)
        }
        if (screenValue) {
            setScreenValue(screenValue)
        }
    }, [])
    useEffect(() => {
        localStorage.setItem('max', max)
        localStorage.setItem('start', start)
        localStorage.setItem('screen', screenValue)
    }, [max, start, screenValue])

    const setMaxValue = (max: string) => {
        setDisabledCounterBtn(true)
        setMax(max)
    }
    const setStartValue = (start: string) => {
        setDisabledCounterBtn(true)
        setStart(start)
    }

    const setScreen = (screenValue: string) => {
        setScreenValue(screenValue)
    }


    return (
        <div className={'AppCounter'}>
            <Settings setMaxValue={setMaxValue}
                      setStartValue={setStartValue}
                      max={max}
                      start={start}
                      setScreen={setScreen}
                      setDisabledCounterBtn={setDisabledCounterBtn}


            />
            <Counter1 max={Number(max)}
                      start={Number(start)}
                      screenValue={screenValue}
                      setScreen={setScreen}
                      disabledCounterBtn={disabledCounterBtn}
            />

        </div>

    );
};

export default AppCounter1;