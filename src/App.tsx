import './App.css';
import TodoList from './todo/TodoList';

const App: React.FC = () => {
  return (
    <div>
      <h1>Todoアプリ</h1>
      <TodoList />
    </div>
  );
};

export default App;
