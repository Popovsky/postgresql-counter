import ACTION_TYPE from './../actions/types';

const initialState = {
    value: 0,
    step: 1,
    isFetching: false,
    error: false,
};

export const counterReducer = (state = initialState, action) => {
    const {type} = action;
    const {value, step} = state;
    switch (type) {
        case ACTION_TYPE.INCREMENT:
            return {
                ...state,
                value: value + step,
            };
        case ACTION_TYPE.DECREMENT:
            return {
                ...state,
                value: value - step,
            };
        case ACTION_TYPE.SET_STEP:
            const {stepValue} = action;
            return {
                ...state,
                step: stepValue,
            }
        default:
            return state;
    }
};
