import React from "react";

type CounterPropsType = {
    screen: number
    max: number
}

export const Screen2: React.FC<CounterPropsType> = ({screen,max}) => {
    return <div className={screen === max ? 'red' : 'count'} >
        <span>{screen}</span>
    </div>
}