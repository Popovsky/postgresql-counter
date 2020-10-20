import ACTION_TYPE from './types';

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
export const incrementRequest = () => ({
    type: ACTION_TYPE.INCREMENT_REQUEST,
});
export const incrementRequestSuccess = () => ({
    type: ACTION_TYPE.INCREMENT_REQUEST_SUCCESS,
});
export const incrementRequestError = err => ({
    type: ACTION_TYPE.INCREMENT_REQUEST_ERROR,
    payload: {
        error: err,
    }
});
export const incrementMiddleware = data => {
    return {
        type: ACTION_TYPE.INCREMENT_MIDDLEWARE,
        payload: {
            data,
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
export const decrementRequest = () => ({
    type: ACTION_TYPE.DECREMENT_REQUEST,
});
export const decrementRequestSuccess = data => ({
    type: ACTION_TYPE.DECREMENT_REQUEST_SUCCESS,
    payload: {
        data,
    }
});
export const decrementRequestError = err => ({
    type: ACTION_TYPE.DECREMENT_REQUEST_ERROR,
    payload: {
        error: err,
    }
});
export const decrementMiddleware = data => {
    return {
        type: ACTION_TYPE.DECREMENT_MIDDLEWARE,
        payload: {
            data,
        }
    };
};

export const setStep = (event) => {
    const {target: {value}} = event;
    return {
        type: ACTION_TYPE.SET_STEP,
        payload: {
            stepValue: Number(value),
        }
    }
};
export const setStepRequest = () => ({
    type: ACTION_TYPE.SET_STEP_REQUEST,
});
export const setStepRequestSuccess = data => ({
    type: ACTION_TYPE.SET_STEP_REQUEST_SUCCESS,
    payload: {
        data,
    }
});
export const setStepRequestError = err => ({
    type: ACTION_TYPE.SET_STEP_REQUEST_ERROR,
    payload: {
        error: err,
    }
});

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