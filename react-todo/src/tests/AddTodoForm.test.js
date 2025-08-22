import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AddTodoForm from '../components/AddTodoForm';

describe('AddTodoForm Component', () => {
  test('renders form with input and button', () => {
    const mockAddTodo = jest.fn();
    render(<AddTodoForm onAddTodo={mockAddTodo} />);
    
    expect(screen.getByPlaceholderText('Add a new todo...')).toBeInTheDocument();
    expect(screen.getByText('Add Todo')).toBeInTheDocument();
  });

  test('calls onAddTodo with input value when form is submitted', async () => {
    const mockAddTodo = jest.fn();
    const user = userEvent.setup();
    render(<AddTodoForm onAddTodo={mockAddTodo} />);
    
    const input = screen.getByPlaceholderText('Add a new todo...');
    const button = screen.getByText('Add Todo');
    
    await user.type(input, 'Test Todo');
    await user.click(button);
    
    expect(mockAddTodo).toHaveBeenCalledTimes(1);
    expect(mockAddTodo).toHaveBeenCalledWith('Test Todo');
  });

  test('clears input after form submission', async () => {
    const mockAddTodo = jest.fn();
    const user = userEvent.setup();
    render(<AddTodoForm onAddTodo={mockAddTodo} />);
    
    const input = screen.getByPlaceholderText('Add a new todo...');
    const button = screen.getByText('Add Todo');
    
    await user.type(input, 'Test Todo');
    await user.click(button);
    
    expect(input).toHaveValue('');
  });

  test('does not call onAddTodo when input is empty', async () => {
    const mockAddTodo = jest.fn();
    const user = userEvent.setup();
    render(<AddTodoForm onAddTodo={mockAddTodo} />);
    
    const button = screen.getByText('Add Todo');
    
    await user.click(button);
    
    expect(mockAddTodo).not.toHaveBeenCalled();
  });

  test('does not call onAddTodo when input contains only whitespace', async () => {
    const mockAddTodo = jest.fn();
    const user = userEvent.setup();
    render(<AddTodoForm onAddTodo={mockAddTodo} />);
    
    const input = screen.getByPlaceholderText('Add a new todo...');
    const button = screen.getByText('Add Todo');
    
    await user.type(input, '   ');
    await user.click(button);
    
    expect(mockAddTodo).not.toHaveBeenCalled();
  });

  test('trims whitespace from input before submission', async () => {
    const mockAddTodo = jest.fn();
    const user = userEvent.setup();
    render(<AddTodoForm onAddTodo={mockAddTodo} />);
    
    const input = screen.getByPlaceholderText('Add a new todo...');
    const button = screen.getByText('Add Todo');
    
    await user.type(input, '   Test Todo   ');
    await user.click(button);
    
    expect(mockAddTodo).toHaveBeenCalledWith('Test Todo');
  });
});
