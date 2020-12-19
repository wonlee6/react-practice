import React from 'react';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease, increaseAsync, decreaseAsync } from '../modules/counter';

const CounterContainer = ({ number, increaseAsync, decreaseAsync }) => {
    return (
        <div>
            <Counter number={number} onIncrease={increaseAsync} onDecrease={decreaseAsync} />
        </div>
    );
};

export default connect(
    state => ({
        number: state.counter
    }),
    {
        increaseAsync, // 객체 형태로 넣어 준다
        decreaseAsync // connect 함수가  내부적으로 bindActionCreators 작업을 대신해 준다.
    }
)(CounterContainer);