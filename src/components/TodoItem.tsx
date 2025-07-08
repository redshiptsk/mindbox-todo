import React from 'react';
import { Todo } from '../hooks/useTodos';
import styles from './todoitem.module.css'

interface TodoItemProps {
  todo: Todo;
  toggleTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleTodo }) => {
  return (
    <li
    className={styles.item}
    >
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleTodo(todo.id)}
        aria-label={todo.text}
        className={styles.checkbox}
      />
      <span className={`${styles.text} ${todo.completed ? styles.completed : ''}`}>{todo.text}</span>
    </li>
  );
};

export default TodoItem;