import React from "react";

type CounterPropsType = {
    number: string
    max: number
}

export const Screen1: React.FC<CounterPropsType> = ({number,max}) => {
    return <div className={Number(number) === max ? 'red' : 'count'} >
        <span>{number}</span>
    </div>
}