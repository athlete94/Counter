import {CounterReducer1, setMaxValue} from "./CounterReducer1";

test('should be set correct max value', () => {
    let startState = {
        max: '',
        start: '',
        screenValue: '',
        disabledCounterBtn: false,
        disabledSettingsBtn: false,
        error: '',
    }

    let endState = CounterReducer1(startState, setMaxValue('12'))

    expect(endState.max).toBe('12')
})