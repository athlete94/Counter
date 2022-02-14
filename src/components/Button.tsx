import React from "react";

type ButtonPropsType = {
    onClickHandler: () => void
    titleButton: string
    disabled?: boolean
}

export const Button: React.FC<ButtonPropsType> = ({onClickHandler, titleButton, disabled}) => {

    return  <div className='button'>
        <button onClick={onClickHandler} disabled={disabled} >{titleButton}</button>
    </div>
}