import React from "react";

type CounterPropsType = {
    number: number
    max: number
}

export const Screen2: React.FC<CounterPropsType> = ({number,max}) => {
    return <div className={number === max ? 'red' : 'count'} >
        <span>{number}</span>
    </div>
}