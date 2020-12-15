import React, { useCallback } from 'react';
import { connect, useDispatch, useSelector } from 'react-redux';
import Todos from '../components/Todos';
import { changeInput, insert, toggle, remove } from '../modules/todos';

const TodosContainer = () => {
    const { input, todos } = useSelector(({ todos }) => ({
        input: todos.input,
        todos: todos.todos
    }));
    const dispatch = useDispatch();
    const onChangeInput = useCallback(input => dispatch(changeInput(input)), [
        dispatch
    ]);
    const onInsert = useCallback(text => dispatch(insert(text)), [dispatch]);
    const onToggle = useCallback(id => dispatch(toggle(id)), [dispatch]);
    const onRemove = useCallback(id => dispatch(remove(id)), [dispatch]);

    return (
        <Todos
            input={input}
            todos={todos}
            onChangeInput={onChangeInput}
            onInsert={onInsert}
            onToggle={onToggle}
            onRemove={onRemove}
        />
    )
};
export default TodosContainer;
// export default connect(
//     // 비구조화 할당을 통해 todos를 분리하여
//     // state.todos.input 대신 todos.input을 사용
//     ({ todos }) => ({
//         input: todos.input,
//         todos: todos.todos,
//     }),
//     { // todos 모듈에서 작성했던 액션 생성함수와 상태 안에 있던 값을 컴포넌트의 props로 전달 해 줌
//         changeInput,
//         insert,
//         toggle,
//         remove,
//     },
// )(TodosContainer);