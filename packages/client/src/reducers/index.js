import {combineReducers} from 'redux';
import {counterReducerWithDatabase} from './counterReducer';

const rootReducer = combineReducers({
    counter: counterReducerWithDatabase
});

export default rootReducer;
