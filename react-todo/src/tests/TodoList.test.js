import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import TodoList from "../components/TodoList";

describe("TodoList Component", () => {
  test("renders initial todos correctly", () => {
    render(<TodoList />);

    // Check if initial todos are rendered
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
    expect(screen.getByText("Write Tests")).toBeInTheDocument();

    // Check if completed todo has line-through
    const completedTodo = screen.getByText("Build a Todo App");
    expect(completedTodo).toHaveStyle("text-decoration: line-through");
  });

  test("adds a new todo", async () => {
    const user = userEvent.setup();
    render(<TodoList />);

    const input = screen.getByPlaceholderText("Add a new todo...");
    const addButton = screen.getByText("Add Todo");

    // Add a new todo
    await user.type(input, "New Test Todo");
    await user.click(addButton);

    // Check if new todo is added
    expect(screen.getByText("New Test Todo")).toBeInTheDocument();
    expect(input).toHaveValue("");
  });

  test("does not add empty todo", async () => {
    const user = userEvent.setup();
    render(<TodoList />);

    const initialTodoCount = screen.getAllByRole("listitem").length;
    const addButton = screen.getByText("Add Todo");

    // Try to add empty todo
    await user.click(addButton);

    // Check that no new todo was added
    expect(screen.getAllByRole("listitem")).toHaveLength(initialTodoCount);
  });

  test("toggles todo completion status", async () => {
    const user = userEvent.setup();
    render(<TodoList />);

    const todoText = screen.getByText("Learn React");

    // Initially should not be completed
    expect(todoText).not.toHaveStyle("text-decoration: line-through");

    // Toggle todo
    await user.click(todoText);

    // Should now be completed
    expect(todoText).toHaveStyle("text-decoration: line-through");

    // Toggle again
    await user.click(todoText);

    // Should not be completed again
    expect(todoText).not.toHaveStyle("text-decoration: line-through");
  });

  test("deletes a todo", async () => {
    const user = userEvent.setup();
    render(<TodoList />);

    const todoText = screen.getByText("Learn React");
    const deleteButtons = screen.getAllByRole("button", { name: /delete/i });

    // Delete the first todo
    await user.click(deleteButtons[0]);

    // Check that the todo is removed
    expect(todoText).not.toBeInTheDocument();
  });

  test("displays empty message when no todos", async () => {
    const user = userEvent.setup();
    render(<TodoList />);

    // Delete all todos
    const deleteButtons = screen.getAllByRole("button", { name: /delete/i });
    for (const button of deleteButtons) {
      await user.click(button);
    }

    // Check that empty message is displayed
    expect(
      screen.getByText("No todos yet. Add one above!")
    ).toBeInTheDocument();
  });

  test("updates todo statistics correctly", async () => {
    const user = userEvent.setup();
    render(<TodoList />);

    // Check initial stats
    expect(screen.getByText("Total: 3")).toBeInTheDocument();
    expect(screen.getByText("Completed: 1")).toBeInTheDocument();
    expect(screen.getByText("Pending: 2")).toBeInTheDocument();

    // Add a new todo
    const input = screen.getByPlaceholderText("Add a new todo...");
    const addButton = screen.getByText("Add Todo");
    await user.type(input, "New Todo");
    await user.click(addButton);

    // Check updated stats
    expect(screen.getByText("Total: 4")).toBeInTheDocument();
    expect(screen.getByText("Completed: 1")).toBeInTheDocument();
    expect(screen.getByText("Pending: 3")).toBeInTheDocument();

    // Toggle a todo
    const todoText = screen.getByText("Learn React");
    await user.click(todoText);

    // Check updated stats after toggle
    expect(screen.getByText("Total: 4")).toBeInTheDocument();
    expect(screen.getByText("Completed: 2")).toBeInTheDocument();
    expect(screen.getByText("Pending: 2")).toBeInTheDocument();

    // Delete a todo
    const deleteButtons = screen.getAllByRole("button", { name: /delete/i });
    await user.click(deleteButtons[0]);

    // Check updated stats after deletion
    expect(screen.getByText("Total: 3")).toBeInTheDocument();
  });
});
