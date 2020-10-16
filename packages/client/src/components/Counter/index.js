import React from 'react';
import {connect} from 'react-redux';
import {increment, decrement, setStep} from '../../actions/counterActionCreators';


const Counter = (props) => {
    const {decrement, increment, setStep, value, step} = props;
    return (
        <div>
            <h1>{value}</h1>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
            <input type="number" value={step} onChange={setStep}/>
        </div>
    );
};

const mapStateToProps = state => state.counter;
const mapDispatchToProps = {increment, decrement, setStep};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);