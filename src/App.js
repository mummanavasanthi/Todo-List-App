import React, { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");

  const [todos, setTodos] = useState([]);

  // Add Task
  const addTask = () => {
    if (task.trim() === "") {
      return;
    }

    const newTodo = {
      text: task,
      completed: false,
    };

    setTodos([...todos, newTodo]);

    setTask("");
  };

  // Delete Task
  const deleteTask = (index) => {
    const updatedTodos = todos.filter(
      (_, i) => i !== index
    );

    setTodos(updatedTodos);
  };

  // Complete Task
  const toggleComplete = (index) => {
    const updatedTodos = [...todos];

    updatedTodos[index].completed =
      !updatedTodos[index].completed;

    setTodos(updatedTodos);
  };

  return (
    <div className="container">
      <h1>Todo List App</h1>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter a task"
          value={task}
          onChange={(e) =>
            setTask(e.target.value)
          }
        />

        <button onClick={addTask}>
          Add
        </button>
      </div>

      <ul>
        {todos.map((todo, index) => (
          <li
            key={index}
            className={
              todo.completed
                ? "completed"
                : ""
            }
          >
            <div className="task-left">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() =>
                  toggleComplete(index)
                }
              />

              <span>{todo.text}</span>
            </div>

            <button
              className="delete-btn"
              onClick={() =>
                deleteTask(index)
              }
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;