import React from 'react';

enum ACTIONS_TYPE {
    SET_MAX_VALUE = 'SET_MAX_VALUE',
    SET_START_VALUE = 'SET_START_VALUE',
    SET_SCREEN = 'SET_SCREEN',
}

export type initialStateType = typeof initialState

let initialState = {
    max: '',
    start: '',
    screenValue: '',
    disabledCounterBtn: false,
    disabledSettingsBtn: false,
    error: '',
}

export const CounterReducer1 = (state: initialStateType = initialState, action: ActionType): initialStateType => {
    switch(action.type) {
        case ACTIONS_TYPE.SET_MAX_VALUE:
            return {
                ...state,
                max: action.payload.max,
                disabledCounterBtn: true,
            }
        case ACTIONS_TYPE.SET_START_VALUE:
            return {
                ...state,
                start: action.payload.start,
                disabledCounterBtn: true,
            }
        case ACTIONS_TYPE.SET_SCREEN:
            return {
                ...state,
                screenValue: action.payload.screen
            }
        default:
            return state
    }
};


type ActionType = SetMaxValueType | SetStartValueType | SetScreenType

type SetMaxValueType = ReturnType<typeof setMaxValue>
export const setMaxValue = (max: string) => {
    return {
        type: ACTIONS_TYPE.SET_MAX_VALUE,
        payload: {
            max,
        }
    }as const
}

type SetStartValueType = ReturnType<typeof setStartValue>
export const setStartValue = (start: string) => {
    return {
        type: ACTIONS_TYPE.SET_START_VALUE,
        payload: {
            start
        }
    }as const
}

type SetScreenType = ReturnType<typeof setScreen>
export const setScreen = (screen: string) => {
    return {
        type: ACTIONS_TYPE.SET_SCREEN,
        payload: {
            screen,
        }
    }as const
}
