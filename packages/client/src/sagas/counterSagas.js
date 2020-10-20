import {put} from 'redux-saga/effects';
import * as API from './../api';
import * as counterActionCreators from './../actions/counterActionCreators';
import store from '../store';

export function* incrementCounterValueSaga(action) {
    const {payload: {value}} = action;
    yield put(counterActionCreators.incrementRequest());
    try {
        yield put(counterActionCreators.incrementMiddleware({value}));
        const newCounterValue = store.getState().counter.value;
        yield API.createNextCounterState({value: newCounterValue});
        yield put(counterActionCreators.incrementRequestSuccess());
    } catch (err) {
        yield put(counterActionCreators.incrementRequestError(err));
    }
}

export function* decrementCounterValueSaga(action) {
    const {payload: {value}} = action;
    yield put(counterActionCreators.decrementRequest());
    try {
        yield put(counterActionCreators.decrementMiddleware({value}));
        const newCounterValue = store.getState().counter.value;
        yield API.createNextCounterState({value: newCounterValue});
        yield put(counterActionCreators.decrementRequestSuccess());
    } catch (err) {
        yield put(counterActionCreators.decrementRequestError(err));
    }
}

export function* setCounterStepSaga(action) {
    const {payload: {stepValue: step}} = action;
    yield put(counterActionCreators.setStepRequest());
    try {
        const {data: {data}} = yield API.createNextCounterState({step});
        yield put(counterActionCreators.setStepRequestSuccess(data));
    } catch (err) {
        yield put(counterActionCreators.setStepRequestError(err));
    }
}

export function* getCounterStateSaga(action) {
    yield put(counterActionCreators.getStateRequest());
    try {
        const {data: {data}} = yield API.getCounterState();
        yield put(counterActionCreators.getStateRequestSuccess(data));
    } catch (err) {
        yield put(counterActionCreators.getStateRequestError(err));
    }
}
