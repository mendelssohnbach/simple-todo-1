/*
 * @see https://reservoir.design/react-typescript-todo-app-01/
 **/

import { Button, TextField } from '@mui/material';
import { useState } from 'react';
import TodoItem from './TotoItem';

interface Todo {
  id: number;
  text: string;
  isEditing: boolean;
  isCompleted: boolean;
}

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState('');

  const addTodo = () => {
    setTodos([...todos, { id: Date.now(), text: input, isEditing: false, isCompleted: false }]);
    setInput('');
  };

  const toggleComplete = (id: number) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, isCompleted: !todo.isCompleted } : todo))
    );
  };

  const startEditing = (id: number) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, isEditing: true } : todo)));
  };

  const cancelEditing = (id: number) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, isEditing: false } : todo)));
  };

  const saveEdit = (id: number, newText: string) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, text: newText, isEditing: false } : todo))
    );
  };

  const todoChildren = todos.map((todo) => (
    <TodoItem
      key={todo.id}
      todo={todo}
      toggleComplete={toggleComplete}
      startEditing={startEditing}
      cancelEditing={cancelEditing}
      saveEdit={saveEdit}
    />
  ));

  return (
    <div>
      <TextField
        label="Todoを追加"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <Button onClick={addTodo}>追加</Button>
      {todoChildren}
    </div>
  );
}
