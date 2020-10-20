import React, {useCallback, useEffect} from 'react';
import {connect} from 'react-redux';
import {
    increment,
    decrement,
    setStep,
    getState,
} from '../../actions/counterActionCreators';


const Counter = (props) => {
    const {
        increment,
        decrement,
        setStep,
        getState,
        value,
        step,
        isFetching
    } = props;
    const inc = useCallback(
        () => {
            increment({value, step});
        },
        [value, step]
    );
    const dec = useCallback(
        () => {
            decrement({value, step});
        },
        [value, step]
    );
    const set = useCallback(
        (event) => {
            setStep(event);
        },
        [step]
    );
    useEffect(() => {
        getState();
    }, []);
    return (
        <div>
            <h1>{isFetching ? 'Loading...' : value}</h1>
            <button onClick={dec}>-</button>
            <button onClick={inc}>+</button>
            <input type="number" value={step} onChange={set}/>
        </div>
    );
};

const mapStateToProps = ({counter}) => counter;
const mapDispatchToProps = {
    increment,
    decrement,
    setStep,
    getState
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);