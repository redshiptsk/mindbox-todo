'use client'

import { useEffect, useState } from 'react';

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export const useTodos = () => {
    
    const storagedTodos = JSON.parse(localStorage.getItem('toDos')?.toString() || '[]')
    const [todos, setTodos] = useState<Todo[]>(storagedTodos);
    const [input, setInput] = useState('');

    const addTodo = () => {
        if (input.trim()) {
            setTodos([...todos, { id: Date.now(), text: input, completed: false }]);
            setInput('');
        }
    };

    const toggleTodo = (id: number) => {
        setTodos(
            todos.map(todo =>
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    const clearCompleted = () => {
        setTodos(todos.filter(todo => !todo.completed));
    };

    useEffect(() => {
        localStorage.setItem('toDos', JSON.stringify(todos))
    }, [todos])

    return {
    todos,
    input,
    setInput,
    addTodo,
    toggleTodo,
    clearCompleted,
    };
};