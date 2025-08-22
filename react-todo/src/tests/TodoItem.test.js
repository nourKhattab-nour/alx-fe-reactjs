import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TodoItem from '../components/TodoItem';

describe('TodoItem Component', () => {
  const mockToggle = jest.fn();
  const mockDelete = jest.fn();
  const todo = { id: 1, text: 'Test Todo', completed: false };
  const completedTodo = { id: 2, text: 'Completed Todo', completed: true };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders todo text', () => {
    render(<TodoItem todo={todo} onToggle={mockToggle} onDelete={mockDelete} />);
    
    expect(screen.getByText('Test Todo')).toBeInTheDocument();
  });

  test('renders delete button with accessible label', () => {
    render(<TodoItem todo={todo} onToggle={mockToggle} onDelete={mockDelete} />);
    
    expect(screen.getByLabelText('Delete Test Todo')).toBeInTheDocument();
  });

  test('calls onToggle when todo text is clicked', async () => {
    const user = userEvent.setup();
    render(<TodoItem todo={todo} onToggle={mockToggle} onDelete={mockDelete} />);
    
    const todoText = screen.getByText('Test Todo');
    await user.click(todoText);
    
    expect(mockToggle).toHaveBeenCalledTimes(1);
    expect(mockToggle).toHaveBeenCalledWith(1);
  });

  test('calls onDelete when delete button is clicked', async () => {
    const user = userEvent.setup();
    render(<TodoItem todo={todo} onToggle={mockToggle} onDelete={mockDelete} />);
    
    const deleteButton = screen.getByLabelText('Delete Test Todo');
    await user.click(deleteButton);
    
    expect(mockDelete).toHaveBeenCalledTimes(1);
    expect(mockDelete).toHaveBeenCalledWith(1);
  });

  test('applies completed class when todo is completed', () => {
    render(<TodoItem todo={completedTodo} onToggle={mockToggle} onDelete={mockDelete} />);
    
    const todoElement = screen.getByText('Completed Todo');
    expect(todoElement).toHaveStyle('text-decoration: line-through');
  });

  test('does not apply completed class when todo is not completed', () => {
    render(<TodoItem todo={todo} onToggle={mockToggle} onDelete={mockDelete} />);
    
    const todoElement = screen.getByText('Test Todo');
    expect(todoElement).not.toHaveStyle('text-decoration: line-through');
  });

  test('has correct ARIA attributes for accessibility', () => {
    render(<TodoItem todo={todo} onToggle={mockToggle} onDelete={mockDelete} />);
    
    const deleteButton = screen.getByLabelText('Delete Test Todo');
    expect(deleteButton).toBeInTheDocument();
  });
});
