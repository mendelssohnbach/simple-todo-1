/*
 * @see https://reservoir.design/react-typescript-todo-app-01/
 * https://reservoir.design/react-typescript-todo-app-02/
 **/

import CancelIcon from '@mui/icons-material/Cancel';
import EditIcon from '@mui/icons-material/Edit';
import SaveIcon from '@mui/icons-material/Save';
import { Card, Checkbox, IconButton, TextField, Typography } from '@mui/material';
import { useState } from 'react';

interface TodoItemProps {
  todo: {
    id: number;
    text: string;
    isEditing: boolean;
    isCompleted: boolean;
  };
  toggleComplete: (id: number) => void;
  startEditing: (id: number) => void;
  cancelEditing: (id: number) => void;
  saveEdit: (id: number, newText: string) => void;
}

export default function TodoItem({
  todo,
  toggleComplete,
  startEditing,
  cancelEditing,
  saveEdit,
}: TodoItemProps) {
  const [editText, setEditText] = useState(todo.text);

  return (
    <Card
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        margin: '8px 0',
      }}
    >
      <Checkbox
        checked={todo.isCompleted}
        onChange={() => toggleComplete(todo.id)}
      />
      {todo.isEditing ? (
        <TextField
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
      ) : (
        <Typography sx={{ textDecoration: todo.isCompleted ? 'line-through' : 'none' }}>
          {todo.text}
        </Typography>
      )}
      <div>
        {todo.isEditing ? (
          <>
            <IconButton onClick={() => saveEdit(todo.id, editText)}>
              <SaveIcon />
            </IconButton>
            <IconButton onClick={() => cancelEditing(todo.id)}>
              <CancelIcon />
            </IconButton>
          </>
        ) : (
          <IconButton onClick={() => startEditing(todo.id)}>
            <EditIcon />
          </IconButton>
        )}
      </div>
    </Card>
  );
}
