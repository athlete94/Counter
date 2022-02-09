import React, {useEffect, useState} from 'react';
import {Screen} from "./Screen";
import {Button} from "./Button";
import {valuesType} from "../App";

type CounterPropsType = {
    values: valuesType
}

export const Counter = ({values}: CounterPropsType) => {

    const [number, setNumber] = useState(values.start)

    useEffect(() => {
        localStorage.setItem('number', JSON.stringify(number))
    }, [number])

    const incrementHandler = () => {
        setNumber(number + 1)
    }
    const resetHandler = () => {
        setNumber(values.start)
    }

    return (
        <div className="counter">
            <Screen number={number} max={values.max}/>

            <div className='button'>
                <Button onClickHandler={incrementHandler}
                        title={'inc'}
                        disabled={number === values.max}/>
                <Button onClickHandler={resetHandler}
                        title={'reset'}
                        disabled={number === values.start}/>
            </div>
        </div>
    );
};
