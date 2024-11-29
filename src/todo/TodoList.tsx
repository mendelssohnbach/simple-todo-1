/*
 * @see https://reservoir.design/react-typescript-todo-app-01/
 **/

import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import TodoItem from './TotoItem';

interface Todo {
  id: number;
  text: string;
}

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    setTodos([...todos, { id: Date.now(), text: input }]);
    setInput('');
  };

  return (
    <div>
      <TextField
        label="Todoを追加"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button onClick={addTodo}>追加</Button>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
        />
      ))}
    </div>
  );
}
