import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './page';
import '@testing-library/jest-dom';

describe('ToDo App', () => {
  test('добавление новой задачи', () => {
    render(<App />);
    
    // Находим поле ввода и кнопку
    const input = screen.getByPlaceholderText('Добавить задачу...');
    const addButton = screen.getByText('Добавить');
    
    // Вводим текст и добавляем задачу
    fireEvent.change(input, { target: { value: 'Новая задача' } });
    fireEvent.click(addButton);
    
    // Проверяем, что задача появилась в списке
    expect(screen.getByText('Новая задача')).toBeInTheDocument();
  });

  test('очистка выполненных задач', () => {
    render(<App />);
    
    // Добавляем и завершаем задачу
    fireEvent.change(screen.getByPlaceholderText('Добавить задачу...'), {
      target: { value: 'Задача для удаления' },
    });
    fireEvent.click(screen.getByText('Добавить'));
    fireEvent.click(screen.getByLabelText('Задача для удаления'));
    
    // Кликаем "Очистить завершённые"
    fireEvent.click(screen.getByText('Очистить завершённые'));
    expect(screen.queryByText('Задача для удаления')).not.toBeInTheDocument();
  });
});