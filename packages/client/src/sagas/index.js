import {takeLatest} from 'redux-saga/effects';
import {
    incrementCounterValueSaga,
    decrementCounterValueSaga,
    setCounterStepSaga,
    getCounterStateSaga
} from './counterSagas';
import ACTION_TYPE from '../actions/types';

function* rootSaga() {
    yield takeLatest(ACTION_TYPE.INCREMENT, incrementCounterValueSaga);
    yield takeLatest(ACTION_TYPE.DECREMENT, decrementCounterValueSaga);
    yield takeLatest(ACTION_TYPE.SET_STEP, setCounterStepSaga);
    yield takeLatest(ACTION_TYPE.GET_STATE, getCounterStateSaga);
}

export default rootSaga;