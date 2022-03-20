
enum ACTIONS_TYPE {
    SET_MAX = 'SET_MAX',
    SET_START = 'SET_START',
    SET_SCREEN = 'SET_SCREEN',
    SET_ERROR = 'SET_ERROR',
    SET_TOGGLE = 'SET_TOGGLE',
    SET_DISABLED = 'SET_DISABLED',
}

const {SET_MAX, SET_START, SET_SCREEN, SET_ERROR, SET_TOGGLE, SET_DISABLED} = ACTIONS_TYPE


export type InitialStateType = typeof initialState
let initialState = {
    start: '',
    max: '',
    screen: 0,
    error: '',
    toggle: false,
    disabled: false,
}

export const CounterReducer2 = (state: InitialStateType = initialState, action: CounterReducer2ActionType): InitialStateType => {
    switch (action.type) {
        case SET_MAX:
            return {
                ...state,
                max: action.payload.max
            }
        case SET_START:
            return {
                ...state,
                start: action.payload.start
            }
        case SET_SCREEN:
            return {
                ...state,
                screen: action.payload.screen
            }
        case SET_TOGGLE:
            return {
                ...state,
                toggle: action.payload.toggle
            }
        case SET_ERROR:
            return {
                ...state,
                error: action.payload.error
            }
        case SET_DISABLED:
            return {
                ...state,
                disabled: action.payload.disabled
            }
        default:
            return state
    }
};

export type CounterReducer2ActionType =
    SetMaxValueActionType |
    SetStartValueActionType |
    SetScreenActionType |
    SetToggleActionType |
    SetErrorActionType |
    SetTDisabledActionType

type SetMaxValueActionType = ReturnType<typeof setMax>
export const setMax = (max: string) => {
    return {
        type: SET_MAX,
        payload: {
            max,
        },
    } as const
}

type SetStartValueActionType = ReturnType<typeof setStart>
export const setStart = (start: string) => {
    return {
        type: SET_START,
        payload: {
            start,
        },
    } as const
}

type SetScreenActionType = ReturnType<typeof setScreen>
export const setScreen = (screen: number) => {
    return {
        type: SET_SCREEN,
        payload: {
            screen,
        },
    } as const
}

type SetErrorActionType = ReturnType<typeof setError>
export const setError = (error: string) => {
    return {
        type: SET_ERROR,
        payload: {
            error,
        },
    } as const
}

type SetToggleActionType = ReturnType<typeof setToggle>
export const setToggle = (toggle: boolean) => {
    return {
        type: SET_TOGGLE,
        payload: {
            toggle,
        },
    } as const
}

type SetTDisabledActionType = ReturnType<typeof setDisabled>
export const setDisabled = (disabled: boolean) => {
    return {
        type: SET_DISABLED,
        payload: {
            disabled,
        },
    } as const
}


