import Todos from './components/Todos';
import { Todo } from './models/todo';
import './App.css';

function App() {
  const todos: Todo[] = [
    { id: new Date().toISOString(), text: '리액트 공부하기' },
    { id: new Date().toISOString(), text: '타입스크립트 공부하기' },
  ];
  return (
    <div className='App'>
      <Todos items={todos} />
    </div>
  );
}

export default App;
