import ACTION_TYPE from './types';

export const increment = () => ({
    type: ACTION_TYPE.INCREMENT,
});

export const decrement = () => ({
    type: ACTION_TYPE.DECREMENT,
});

export const setStep = (event) => {
    const {target: {value}} = event;
    return {
        type: ACTION_TYPE.SET_STEP,
        stepValue: Number(value),
    }
};