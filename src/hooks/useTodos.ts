'use client'

import { useEffect, useState } from 'react';

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

export const useTodos = () => {
    const [todos, setTodos] = useState<Todo[]>([]);
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

    return {
    todos,
    input,
    setInput,
    addTodo,
    toggleTodo,
    clearCompleted,
    };
};