/*
 * @see https://reservoir.design/react-typescript-todo-app-01/
 **/

import { Card, CardContent } from '@mui/material';

interface TodoItemProps {
  todo: {
    id: number;
    text: string;
  };
}

export default function TodoItem({ todo }: TodoItemProps) {
  return (
    <Card>
      <CardContent>{todo.text}</CardContent>
    </Card>
  );
}
