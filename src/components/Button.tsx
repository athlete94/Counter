import React from "react";

type ButtonPropsType = {
    onClickHandler: () => void
    title: string
    disabled: boolean
}

export const Button: React.FC<ButtonPropsType> = ({onClickHandler, title, disabled}) => {

    return  <div>
        <button onClick={onClickHandler} disabled={disabled} >{title}</button>
    </div>
}