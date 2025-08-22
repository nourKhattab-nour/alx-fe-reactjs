import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TodoList from '../components/TodoList';

describe('TodoList Component', () => {
  beforeEach(() => {
    // Clear all mocks before each test
    jest.clearAllMocks();
  });

  test('renders TodoList component with initial todos', () => {
    render(<TodoList />);
    
    // Check if the component renders
    expect(screen.getByText('Todo List')).toBeInTheDocument();
    
    // Check if initial todos are rendered
    expect(screen.getByText('Learn React')).toBeInTheDocument();
    expect(screen.getByText('Build a Todo App')).toBeInTheDocument();
    expect(screen.getByText('Write Tests')).toBeInTheDocument();
    
    // Check if input and button are present
    expect(screen.getByPlaceholderText('Add a new todo...')).toBeInTheDocument();
    expect(screen.getByText('Add Todo')).toBeInTheDocument();
  });

  test('adds a new todo when form is submitted', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText('Add a new todo...');
    const addButton = screen.getByText('Add Todo');
    
    // Add a new todo
    await user.type(input, 'New Test Todo');
    await user.click(addButton);
    
    // Check if new todo is added
    expect(screen.getByText('New Test Todo')).toBeInTheDocument();
    expect(input).toHaveValue('');
  });

  test('does not add empty todo when form is submitted', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    
    const initialTodos = screen.getAllByRole('listitem');
    const addButton = screen.getByText('Add Todo');
    
    // Try to add empty todo
    await user.click(addButton);
    
    // Check that no new todo was added
    expect(screen.getAllByRole('listitem')).toHaveLength(initialTodos.length);
  });

  test('toggles todo completion status when clicked', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    
    const todoText = screen.getByText('Learn React');
    
    // Initially should not be completed
    expect(todoText).not.toHaveStyle('text-decoration: line-through');
    
    // Toggle todo
    await user.click(todoText);
    
    // Should now be completed
    expect(todoText).toHaveStyle('text-decoration: line-through');
  });

  test('deletes a todo when delete button is clicked', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    
    const todoText = screen.getByText('Learn React');
    const deleteButton = screen.getByLabelText('Delete Learn React');
    
    // Delete the todo
    await user.click(deleteButton);
    
    // Check that the todo is removed
    expect(todoText).not.toBeInTheDocument();
  });

  test('displays empty message when there are no todos', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    
    // Delete all todos
    const deleteButtons = screen.getAllByLabelText(/Delete/);
    for (const button of deleteButtons) {
      await user.click(button);
    }
    
    // Check that empty message is displayed
    expect(screen.getByText('No todos yet. Add one above!')).toBeInTheDocument();
  });

  test('updates todo statistics correctly', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    
    // Check initial stats
    expect(screen.getByText('Total: 3')).toBeInTheDocument();
    expect(screen.getByText('Completed: 1')).toBeInTheDocument();
    expect(screen.getByText('Pending: 2')).toBeInTheDocument();
    
    // Add a new todo
    const input = screen.getByPlaceholderText('Add a new todo...');
    const addButton = screen.getByText('Add Todo');
    await user.type(input, 'New Todo');
    await user.click(addButton);
    
    // Check updated stats after adding
    expect(screen.getByText('Total: 4')).toBeInTheDocument();
    expect(screen.getByText('Completed: 1')).toBeInTheDocument();
    expect(screen.getByText('Pending: 3')).toBeInTheDocument();
    
    // Toggle a todo to complete it
    const todoText = screen.getByText('Learn React');
    await user.click(todoText);
    
    // Check updated stats after toggle
    expect(screen.getByText('Total: 4')).toBeInTheDocument();
    expect(screen.getByText('Completed: 2')).toBeInTheDocument();
    expect(screen.getByText('Pending: 2')).toBeInTheDocument();
  });

  test('maintains todo order after operations', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    
    // Add multiple todos
    const input = screen.getByPlaceholderText('Add a new todo...');
    const addButton = screen.getByText('Add Todo');
    
    await user.type(input, 'First Todo');
    await user.click(addButton);
    
    await user.type(input, 'Second Todo');
    await user.click(addButton);
    
    // Check order
    const todos = screen.getAllByRole('listitem');
    expect(todos[3]).toHaveTextContent('First Todo');
    expect(todos[4]).toHaveTextContent('Second Todo');
  });

  test('handles enter key submission in input field', async () => {
    const user = userEvent.setup();
    render(<TodoList />);
    
    const input = screen.getByPlaceholderText('Add a new todo...');
    
    // Type and press enter
    await user.type(input, 'Enter Key Todo{enter}');
    
    // Check if todo was added
    expect(screen.getByText('Enter Key Todo')).toBeInTheDocument();
  });
});
