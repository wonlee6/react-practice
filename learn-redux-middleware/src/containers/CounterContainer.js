import React from 'react';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

const CounterContainer = ({ number, increase, decrease }) => {
    return (
        <div>
            <Counter number={number} onIncrease={increase} onDecrease={decrease} />
        </div>
    );
};

export default connect(
    state => ({
        number: state.counter
    }),
    {
        increase, // 객체 형태로 넣어 준다
        decrease // connect 함수가  내부적으로 bindActionCreators 작업을 대신해 준다.
    }
)(CounterContainer);