import {put} from 'redux-saga/effects';
import * as API from './../api';
import * as counterActionCreators from './../actions/counterActionCreators';

export function* setCounterStateSaga(action) {
    const {payload: {value, step}, type} = action;
    yield put(counterActionCreators.setCounterStateRequest());
    try {
        const {data: {data}} = yield API.createNextCounterState({type, value, step});
        yield put(counterActionCreators.setCounterStateRequestSuccess(data));
    } catch (err) {
        yield put(counterActionCreators.setCounterStateRequestError(err));
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
