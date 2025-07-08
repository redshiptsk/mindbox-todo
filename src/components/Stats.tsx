'useClient'
import React from 'react';
import { Todo } from '../hooks/useTodos';

interface StatsProps {
  todos: Todo[];
  clearCompleted: () => void;
}

const Stats: React.FC<StatsProps> = ({ todos, clearCompleted }) => {
  const remaining = todos.filter(todo => !todo.completed).length;

  return (
    <div className="stats">
      <p>Осталось задач: {remaining}</p>
      {todos.some(todo => todo.completed) && (
        <button className='addButton' onClick={clearCompleted}>Очистить завершённые</button>
      )}
    </div>
  );
};

export default Stats;
