import React, {useState} from "react";

type CounterPropsType = {
    screen: string
    max: number
}

export const Screen1: React.FC<CounterPropsType> = ({screen, max}) => {


    return <div className={(Number(screen) === max || screen === 'Incorrect value!' || screen === 'Max value should be bigger than start value')
        ? 'red' : 'count'}>
        <span>{screen}</span>
    </div>
}