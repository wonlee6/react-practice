import React from 'react';
import { connect } from 'react-redux';
import Todos from '../components/Todos';
import { changeInput, insert, toggle, remove } from '../modules/todos';

const TodosContainer = ({
    input, todos, changeInput, insert, toggle, remove
}) => {
    return (
        <Todos
            input={input}
            todos={todos}
            onChangeInput={changeInput}
            onInsert={insert}
            onToggle={toggle}
            onRemove={remove}
        />
    );
};

export default connect(
    // 비구조화 할당을 통해 todos를 분리하여
    // state.todos.input 대신 todos.input을 사용
    ({ todos }) => ({
        input: todos.input,
        todos: todos.todos,
    }),
    { // todos 모듈에서 작성했던 액션 생성함수와 상태 안에 있던 값을 컴포넌트의 props로 전달 해 줌
        changeInput,
        insert,
        toggle,
        remove,
    },
)(TodosContainer);