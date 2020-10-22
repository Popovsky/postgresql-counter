import {takeLatest} from 'redux-saga/effects';
import {
    setCounterStateSaga,
    getCounterStateSaga
} from './counterSagas';
import ACTION_TYPE from '../actions/types';

function* rootSaga() {
    yield takeLatest(ACTION_TYPE.INCREMENT, setCounterStateSaga);
    yield takeLatest(ACTION_TYPE.DECREMENT, setCounterStateSaga);
    yield takeLatest(ACTION_TYPE.SET_STEP, setCounterStateSaga);
    yield takeLatest(ACTION_TYPE.GET_STATE, getCounterStateSaga);
}

export default rootSaga;