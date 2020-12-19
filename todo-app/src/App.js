import React, { useCallback, useRef, useState } from 'react';
import TodoTemplate from './component/TodoEmplate';
import TodoInsert from './component/TodoInsert';
import TodoList from './component/TodoList';

function createBulkTodo() {
  const array = [];
  for (let i = 1; i <= 2500; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    })
  }
  return array;
}


const App = () => {
  const [todos, setTodos] = useState(createBulkTodo);

  // useState가 아닌 useRef를 사용하는 이유 :  id값은 렌더링 되는 정보가 아니기 때문
  //고유값으로 사용될 id
  const nextId = useRef(4);

  const onInsert = useCallback(
    text => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos => todos.concat(todo));
      nextId.current += 1;
    }, [],
  );

  const onRemove = useCallback(id => {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  }, [])

  const onToggle = useCallback(id => {
    setTodos(todos => todos.map(todo =>
      todo.id === id ? { ...todo, checked: !todo.checked } : todo,
    )
    )
  }, [],
  )
  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>

  );
};

export default App;