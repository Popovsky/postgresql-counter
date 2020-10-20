import {combineReducers} from 'redux';
import {
    counterReducerWithDatabase,
    counterReducerWithoutDatabase
} from './counterReducer';

const rootReducer = combineReducers({
    counter: counterReducerWithDatabase
    // counter: counterReducerWithoutDatabase
});

export default rootReducer;
