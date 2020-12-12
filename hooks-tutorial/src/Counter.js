import React, { useReducer, useState } from 'react';

// useState, useReducer 사용하기

function reducer(state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return { value: state.value + 1 };
        case 'DECREMENT':
            return { value: state.value - 1 };
        default:
            return state;
    }
}

const Counter = () => {
    //const [value, setValue] = useState(0);

    const [state, dispatch] = useReducer(reducer, { value: 0 }); // reducer, 기본값
    // state 현재 가리키고 있는 상태, dispatch 액션을 발생시키는 함수
    return (
        <div>
            {/* <p>현재 카운터 값은 <b>{value} 입니다. </b></p>
            <button onClick={() => setValue(value + 1)}>+1</button>
            <button onClick={() => setValue(value - 1)}>-1</button> */}

            <p>현재 카운터 값은 <b>{state.value}</b> 입니다. </p>
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>+1</button>
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>-1</button>
        </div>
    );
};

export default Counter;