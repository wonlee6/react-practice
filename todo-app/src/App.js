import React, { useCallback, useRef, useState } from 'react';
import TodoTemplate from './component/TodoEmplate';
import TodoInsert from './component/TodoInsert';
import TodoList from './component/TodoList';


const App = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '리액트의 기초 알아보기',
      checked: true
    },
    {
      id: 2,
      text: '컴포넌트 스타일 해보기',
      checked: true
    },
    {
      id: 3,
      text: '일정 관리 앱 만들어 보기',
      checked: false
    }
  ])

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
      setTodos(todos.concat(todo));
      nextId.current += 1;
    }, [todos],
  );

  const onRemove = useCallback(id => {
    setTodos(todos.filter(todo => todo.id !== id));
  }, [todos])

  const onToggle = useCallback(id => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, checked: !todo.checked } : todo,
    )
    )
  }, [todos],
  )
  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>

  );
};

export default App;