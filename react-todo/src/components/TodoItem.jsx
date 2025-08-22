const TodoItem = ({ todo, onToggle, onDelete }) => {
  return (
    <div className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <span className="todo-text" onClick={() => onToggle(todo.id)}>
        {todo.text}
      </span>
      <button
        onClick={() => onDelete(todo.id)}
        className="delete-button"
        aria-label={`Delete ${todo.text}`}
      >
        ×
      </button>
    </div>
  );
};

export default TodoItem;
