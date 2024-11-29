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

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  return (
    <Card>
      <CardContent>{todo.text}</CardContent>
    </Card>
  );
};

export default TodoItem;
