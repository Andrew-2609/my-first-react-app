import { useState } from "react";

function ToDoList() {
  const [tasks, setTasks] = useState(["Wake up"]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, newTask]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    setTasks((t) => t.filter((_, i) => i !== index));
  };

  const moveTaskUp = (index) => {
    if (index > 0) {
      const updatedTasks = [...tasks];

      [updatedTasks[index - 1], updatedTasks[index]] = [
        updatedTasks[index],
        updatedTasks[index - 1],
      ];

      setTasks(updatedTasks);
    }
  };

  const moveTaskDown = (index) => {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];

      [updatedTasks[index + 1], updatedTasks[index]] = [
        updatedTasks[index],
        updatedTasks[index + 1],
      ];

      setTasks(updatedTasks);
    }
  };

  const tasksList = tasks.map((task, index) => {
    return (
      <li key={index}>
        <span className="task-text">{task}</span>
        <button className="delete-button" onClick={() => deleteTask(index)}>
          Delete
        </button>
        <button className="move-button" onClick={() => moveTaskUp(index)}>
          👆
        </button>
        <button className="move-button" onClick={() => moveTaskDown(index)}>
          👇
        </button>
      </li>
    );
  });

  return (
    <div className="todo-list">
      <h1>To-Do List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputChange}
          onKeyDown={(e) => e.key === "Enter" && addTask()}
        />
        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>

      <ol>{tasksList}</ol>
    </div>
  );
}

export default ToDoList;
