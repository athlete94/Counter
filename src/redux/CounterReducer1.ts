enum ACTIONS_TYPE {
    SET_MAX_VALUE = 'SET_MAX_VALUE',
    SET_START_VALUE = 'SET_START_VALUE',
    SET_SCREEN = 'SET_SCREEN',
    SET_ERROR = 'SET_ERROR',
    SET_DIS_SETT = 'SET_DIS_SETT',
    SET_DIS_COUNT = 'SET_DIS_COUNT',
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
    switch (action.type) {
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
        case ACTIONS_TYPE.SET_ERROR:
            return {
                ...state,
                error: action.payload.error
            }
        case ACTIONS_TYPE.SET_DIS_SETT:
            return {
                ...state,
                disabledSettingsBtn: action.payload.disabled
            }
        case ACTIONS_TYPE.SET_DIS_COUNT:
            return {
                ...state,
                disabledCounterBtn: action.payload.disabled
            }
        default:
            return state
    }
};


type ActionType = SetMaxValueType | SetStartValueType | SetScreenType | SetErrorType | SetDisabledSettingsBtnType | SetDisabledCounterBtnType

type SetMaxValueType = ReturnType<typeof setMaxValue>
export const setMaxValue = (max: string) => {
    return {
        type: ACTIONS_TYPE.SET_MAX_VALUE,
        payload: {
            max,
        }
    } as const
}

type SetStartValueType = ReturnType<typeof setStartValue>
export const setStartValue = (start: string) => {
    return {
        type: ACTIONS_TYPE.SET_START_VALUE,
        payload: {
            start
        }
    } as const
}

type SetScreenType = ReturnType<typeof setScreen>
export const setScreen = (screen: string) => {
    return {
        type: ACTIONS_TYPE.SET_SCREEN,
        payload: {
            screen,
        }
    } as const
}

type SetErrorType = ReturnType<typeof setError>
export const setError = (error: string) => {
    return {
        type: ACTIONS_TYPE.SET_ERROR,
        payload: {
            error,
        }
    } as const
}

type SetDisabledSettingsBtnType = ReturnType<typeof setDisabledSettingsBtn>
export const setDisabledSettingsBtn = (disabled: boolean) => {
    return {
        type: ACTIONS_TYPE.SET_DIS_SETT,
        payload: {
            disabled,
        }
    } as const
}

type SetDisabledCounterBtnType = ReturnType<typeof setDisabledCounterBtn>
export const setDisabledCounterBtn = (disabled: boolean) => {
    return {
        type: ACTIONS_TYPE.SET_DIS_COUNT,
        payload: {
            disabled,
        }
    } as const
}
