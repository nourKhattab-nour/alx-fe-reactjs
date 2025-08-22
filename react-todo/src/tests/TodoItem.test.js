import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoItem from "../components/TodoItem";

describe("TodoItem Component", () => {
  const mockToggle = jest.fn();
  const mockDelete = jest.fn();
  const todo = { id: 1, text: "Test Todo", completed: false };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders todo text", () => {
    render(
      <TodoItem todo={todo} onToggle={mockToggle} onDelete={mockDelete} />
    );

    expect(screen.getByText("Test Todo")).toBeInTheDocument();
  });

  test("calls onToggle when todo text is clicked", async () => {
    const user = userEvent.setup();
    render(
      <TodoItem todo={todo} onToggle={mockToggle} onDelete={mockDelete} />
    );

    const todoText = screen.getByText("Test Todo");
    await user.click(todoText);

    expect(mockToggle).toHaveBeenCalledWith(1);
  });

  test("calls onDelete when delete button is clicked", async () => {
    const user = userEvent.setup();
    render(
      <TodoItem todo={todo} onToggle={mockToggle} onDelete={mockDelete} />
    );

    const deleteButton = screen.getByRole("button", {
      name: /delete test todo/i,
    });
    await user.click(deleteButton);

    expect(mockDelete).toHaveBeenCalledWith(1);
  });

  test("applies completed class when todo is completed", () => {
    const completedTodo = { ...todo, completed: true };
    render(
      <TodoItem
        todo={completedTodo}
        onToggle={mockToggle}
        onDelete={mockDelete}
      />
    );

    const todoElement = screen.getByText("Test Todo");
    expect(todoElement).toHaveStyle("text-decoration: line-through");
  });
});
