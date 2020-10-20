import ACTION_TYPE from './../actions/types';

const initialState = {
    value: 0,
    step: 1,
    isFetching: false,
    error: null,
};

export const counterReducerWithoutDatabase = (state = initialState, action) => {
    const {type} = action;
    switch (type) {
        case ACTION_TYPE.INCREMENT: {
            const {payload: {value, step}} = action;
            return {
                ...state,
                value: value + step,
            }
        }
        case ACTION_TYPE.DECREMENT: {
            const {payload: {value, step}} = action;
            return {
                ...state,
                value: value - step,
            }
        }
        case ACTION_TYPE.SET_STEP: {
            const {payload: {stepValue}} = action;
            return {
                ...state,
                step: stepValue,
            }
        }
        default:
            return state;
    }
};
export const counterReducerWithDatabase = (state = initialState, action) => {
    const {type} = action;
    switch (type) {
        case ACTION_TYPE.INCREMENT_REQUEST: {
            return {
                ...state,
                isFetching: true,
            };
        }
        case ACTION_TYPE.INCREMENT_MIDDLEWARE: {
            const {payload: {data: {value}}} = action;
            const {step} = state;
            return {
                ...state,
                value: value + step,
            };
        }
        case ACTION_TYPE.INCREMENT_REQUEST_SUCCESS: {
            return {
                ...state,
                isFetching: false
            };
        }
        case ACTION_TYPE.INCREMENT_REQUEST_ERROR: {
            const {error} = action;
            return {
                ...state,
                isFetching: false,
                error: error.message,
            };
        }
        case ACTION_TYPE.DECREMENT_REQUEST: {
            return {
                ...state,
                isFetching: true,
            };
        }
        case ACTION_TYPE.DECREMENT_MIDDLEWARE: {
            const {payload: {data: {value}}} = action;
            const {step} = state;
            return {
                ...state,
                value: value - step,
            };
        }
        case ACTION_TYPE.DECREMENT_REQUEST_SUCCESS: {
            return {
                ...state,
                isFetching: false
            };
        }
        case ACTION_TYPE.DECREMENT_REQUEST_ERROR: {
            const {error} = action;
            return {
                ...state,
                isFetching: false,
                error: error.message,
            };
        }
        case ACTION_TYPE.SET_STEP_REQUEST: {
            return {
                ...state,
                isFetching: true,
            };
        }
        case ACTION_TYPE.SET_STEP_REQUEST_SUCCESS: {
            const {payload: {data: {step, value}}} = action;
            return {
                ...state,
                step,
                isFetching: false,
            };
        }
        case ACTION_TYPE.SET_STEP_REQUEST_ERROR: {
            const {error} = action;
            return {
                ...state,
                error: error.message,
            };
        }
        case ACTION_TYPE.GET_STATE_REQUEST: {
            return {
                ...state,
                isFetching: true,
            };
        }
        case ACTION_TYPE.GET_STATE_REQUEST_SUCCESS: {
            const {payload: {data: {value, step}}} = action;
            return {
                ...state,
                value,
                step,
                isFetching: false,
            };
        }
        case ACTION_TYPE.GET_STATE_REQUEST_ERROR: {
            const {error} = action;
            return {
                ...state,
                isFetching: false,
                error: error.message,
            };
        }
        default:
            return state;
    }
};
