import React from 'react';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
import { decrease, increase } from '../modules/counter';
import { bindActionCreators } from 'redux';


const CounterContainer = ({ number, increase, decrease }) => {
    return (
        <Counter number={number} onIncrease={increase} onDecrease={decrease} />
    )
};

// const mapStateToProps = state => ({
//     number: state.counter.number,
// });
// const mapDispatchToProps = dispatch => ({
//     // 임시 함수
//     increase: () => {
//         dispatch(increase());
//         // console.log('increase');
//     },
//     decrease: () => {
//         dispatch(decrease());
//         // console.log('decrease');
//     }
// });

// redux에서 제공하는 bindActionCreator

export default connect(
    state => ({
        number: state.counter.number,
    }),
    { // 2 번째 파라미터를 객체 형태로 넣어 주면 connect 함수가 내부적으로 bindActionCreators 작업을대신해준다
        increase,
        decrease,
    },
)(CounterContainer);
// dispatch => ({
//     increase: () => dispatch(increase()),
//     decrease: () => dispatch(decrease()),
// }),

// dispatch =>
//         bindActionCreators(
//             {
//                 increase,
//                 decrease,
//             },
//             dispatch,
//         )
// )(CounterContainer);