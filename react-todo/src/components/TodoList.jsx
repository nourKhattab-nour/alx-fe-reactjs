import { useState } from "react";
import AddTodoForm from "./AddTodoForm";
import TodoItem from "./TodoItem";

const TodoList = () => {
  const [todos, setTodos] = useState([
    { id: 1, text: "Learn React", completed: false },
    { id: 2, text: "Build a Todo App", completed: true },
    { id: 3, text: "Write Tests", completed: false },
  ]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todo-container">
      <h1>Todo List</h1>
      <AddTodoForm onAddTodo={addTodo} />
      <div className="todo-list">
        {todos.length === 0 ? (
          <p className="empty-message">No todos yet. Add one above!</p>
        ) : (
          todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={toggleTodo}
              onDelete={deleteTodo}
            />
          ))
        )}
      </div>
      <div className="todo-stats">
        <span>Total: {todos.length}</span>
        <span>Completed: {todos.filter((todo) => todo.completed).length}</span>
        <span>Pending: {todos.filter((todo) => !todo.completed).length}</span>
      </div>
    </div>
  );
};

export default TodoList;
