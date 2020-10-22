import ACTION_TYPE from './../actions/types';

const initialState = {
    value: 0,
    step: 1,
    isFetching: false,
    error: null,
};

export const counterReducerWithDatabase = (state = initialState, action) => {
    const {type} = action;
    switch (type) {
        case ACTION_TYPE.SET_COUNTER_STATE_REQUEST: {
            return {
                ...state,
                isFetching: true,
            };
        }
        case ACTION_TYPE.SET_COUNTER_STATE_REQUEST_SUCCESS: {
            const {payload: {data: {value, step}}} = action;
            return {
                ...state,
                value,
                step,
                isFetching: false
            };
        }
        case ACTION_TYPE.SET_COUNTER_STATE_REQUEST_ERROR: {
            const {payload: {error}} = action;
            return {
                ...state,
                isFetching: false,
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
            const {payload: {error}} = action;
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
