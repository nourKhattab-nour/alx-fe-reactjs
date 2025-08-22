import { render, screen } from '@testing-library/react';
import App from '../App';

describe('App Component', () => {
  test('renders TodoList component', () => {
    render(<App />);
    
    expect(screen.getByText('Todo List')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Add a new todo...')).toBeInTheDocument();
  });

  test('renders initial todos', () => {
    render(<App />);
    
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
    expect(screen.getByText('Write Tests')).toBeInTheDocument();
  });
});
