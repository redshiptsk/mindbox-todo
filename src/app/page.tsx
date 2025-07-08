'use client'
import Stats from '../components/Stats';
import TodoList from '../components/TodoList';
import { useTodos } from '../hooks/useTodos';
import React, { useState } from 'react';


// Тип для вкладок
type TabValue = 'all' | 'active' | 'completed';

const App: React.FC = () => {
  const {
    todos,
    input,
    setInput,
    addTodo,
    toggleTodo,
    clearCompleted,
  } = useTodos();

  const [currentTab, setCurrentTab] = useState<TabValue>('all');

  // Фильтрация задач по вкладкам
  const filteredTodos = todos.filter(todo => {
    if (currentTab === 'active') return !todo.completed;
    if (currentTab === 'completed') return todo.completed;
    return true; // 'all'
  });

  return (
    <div className="app bg-background flex flex-col justify-center items-center">
      <h1 className='header'>ToDo App</h1>
      
      {/* Поле ввода */}
      <input
        className='inputContainer'
        type="text"
        value={input}
        onChange={e => setInput(e.target.value)}
        onKeyPress={e => e.key === 'Enter' && addTodo()}
        placeholder="Добавить задачу..."
      />
      <button className='addButton' onClick={addTodo}>Добавить</button>

      {/* Вкладки */}
      <div className="tabs">
        <button 
          onClick={() => setCurrentTab('all')}
          className={currentTab === 'all' ? 'active' : ''}
        >
          Все
        </button>
        <button 
          onClick={() => setCurrentTab('active')}
          className={currentTab === 'active' ? 'active' : ''}
        >
          Активные
        </button>
        <button 
          onClick={() => setCurrentTab('completed')}
          className={currentTab === 'completed' ? 'active' : ''}
        >
          Завершённые
        </button>
      </div>

      {/* Список задач (фильтрованный) */}
      <TodoList todos={filteredTodos} toggleTodo={toggleTodo} />

      {/* Статистика и очистка */}
      <Stats 
        todos={todos} 
        clearCompleted={clearCompleted} 
      />
      
    </div>
  );
};

export default App