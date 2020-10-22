import ACTION_TYPE from './types';

export const setCounterStateRequest = () => ({
    type: ACTION_TYPE.SET_COUNTER_STATE_REQUEST,
});
export const setCounterStateRequestSuccess = data => ({
    type: ACTION_TYPE.SET_COUNTER_STATE_REQUEST_SUCCESS,
    payload: {
        data,
    }
});
export const setCounterStateRequestError = err => ({
    type: ACTION_TYPE.SET_COUNTER_STATE_REQUEST_ERROR,
    payload: {
        error: err,
    }
});

export const increment = data => {
    const {value, step} = data;
    return {
        type: ACTION_TYPE.INCREMENT,
        payload: {
            value,
            step,
        }
    };
};
export const decrement = data => {
    const {value, step} = data;
    return {
        type: ACTION_TYPE.DECREMENT,
        payload: {
            value,
            step,
        }
    };
};
export const setStep = data => {
    const {value, step} = data;
    return {
        type: ACTION_TYPE.SET_STEP,
        payload: {
            value,
            step,
        }
    }
};

export const getState = () => ({
    type: ACTION_TYPE.GET_STATE,
});
export const getStateRequest = () => ({
    type: ACTION_TYPE.GET_STATE_REQUEST,
});
export const getStateRequestSuccess = data => ({
    type: ACTION_TYPE.GET_STATE_REQUEST_SUCCESS,
    payload: {
        data,
    }
});
export const getStateRequestError = err => ({
    type: ACTION_TYPE.GET_STATE_REQUEST_ERROR,
    payload: {
        error: err,
    }
});