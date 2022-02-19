import React, {useEffect, useState} from 'react';
import {Settings} from "./Settings1";
import {Counter1} from "./Counter1";


const AppCounter1 = () => {

    const [max, setMax] = useState('')
    const [start, setStart] = useState('')
    const [screenValue, setScreenValue] = useState('')

    console.log(screenValue)
    // useEffect(() => {
    //     let valueMax = localStorage.getItem('max')
    //     let valueStart = localStorage.getItem('start')
    //     if(valueMax){
    //         setMax(valueMax)
    //     }
    //     if(valueStart) {
    //         setStart(valueStart)
    //     }
    //
    //
    // }, [])

    // useEffect(() => {
    //     localStorage.setItem('max', max)
    //     localStorage.setItem('start', start)
    // },[max, start])

    const setMaxValue = (max: string) => {
        setMax(max)
    }
    const setStartValue = (start: string) => {
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


            />
            <Counter1 max={Number(max)}
                      start={Number(start)}
                      screenValue={screenValue}
                      setScreen={setScreen}
            />

        </div>

    );
};

export default AppCounter1;