"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";

const Task = () => {
  const [tasks, setTasks] = useState([
    {
      title: "Finish Assignment",
      description: "Complete the Assignment for tomorrow.",
      priority: "high",
      completed: false,
    },
    {
      title: "Grocery Shopping",
      description: "Buy fruits, vegetables, and milk.",
      priority: "medium",
      completed: true,
    },
    {
      title: "Clean the House",
      description: "Tidy up the living room and kitchen.",
      priority: "low",
      completed: false,
    },
  ]);
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    priority: "low",
    completed: false,
  });

  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTask.title && newTask.description) {
      if (editIndex !== null) {
        const updatedTasks = tasks.map((task, index) =>
          index === editIndex ? newTask : task
        );
        setTasks(updatedTasks);
        setEditIndex(null);
      } else {
        setTasks([...tasks, newTask]);
      }
      setNewTask({ title: "", description: "", priority: "low" });
    }
  };

  const handleEdit = (index) => {
    setNewTask(tasks[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedTasks = tasks.filter((_, taskIndex) => taskIndex !== index);
    setTasks(updatedTasks);
  };

  const sortedTasks = tasks.sort((a, b) => {
    const priorities = { high: 3, medium: 2, low: 1 };
    return priorities[b.priority] - priorities[a.priority];
  });

  const toggleCompleted = (index) => {
    const updatedTasks = tasks.map((task, taskIndex) => {
      if (taskIndex === index) {
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 style={styles.heading}>Task Management App</h1>
      </header>

      <main style={styles.main}>
        <form onSubmit={handleSubmit} style={styles.form}>
          <h2>Add New Task</h2>
          <input
            type="text"
            name="title"
            value={newTask.title}
            onChange={handleInputChange}
            placeholder="Title"
            style={styles.input}
            required
          />
          <textarea
            name="description"
            value={newTask.description}
            onChange={handleInputChange}
            placeholder="Description"
            style={styles.textarea}
            required
          />
          <select
            name="priority"
            value={newTask.priority}
            onChange={handleInputChange}
            style={styles.select}
          >
            <option value="low">Low</option>
            <option value="medium">Medium</option>
            <option value="high">High</option>
          </select>

          <button type="submit" style={styles.button}>
            {editIndex !== null ? "Save Changes" : "Add Task"}
          </button>
        </form>

        {/* Task List */}

        <section>
          <h2>Task List</h2>
          <ul style={styles.taskList}>
            {sortedTasks.map((task, index) => (
              <li key={index} style={styles.taskItem}>
                <div
                  style={{
                    display: "flex",
                    flex: 1,
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <div>
                    <h3 style={{ color: "#000000" }}>{task.title}</h3>
                    <p style={{ color: "#000000" }}>{task.description}</p>
                    <p style={{ color: "#000000" }}>
                      Priority:
                      <span
                        style={{
                          color:
                            task.priority == "high"
                              ? "red"
                              : task.priority == "medium"
                              ? "#E4A11B"
                              : task.priority == "low"
                              ? "green"
                              : null,
                          fontSize: 16,
                          fontWeight: "bold",
                        }}
                      >
                        {task.priority}
                      </span>
                    </p>
                  </div>

                  <div
                    style={{
                      width: "100px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <input
                      style={{
                        width: "20px",
                        height: "20px",
                        backgroundColor: "red",
                        cursor: "pointer",
                      }}
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => toggleCompleted(index)}
                    />
                    <FontAwesomeIcon
                      icon={faEdit}
                      onClick={() => handleEdit(index)}
                      style={styles.editIcon}
                    />
                    <FontAwesomeIcon
                      icon={faTrash}
                      onClick={() => handleDelete(index)}
                      style={styles.deleteIcon}
                    />
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Task;

const styles = {
  page: {
    backgroundColor: "#000000",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  header: {
    backgroundColor: "red",
    padding: "20px",
  },
  heading: {
    color: "#000000",
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "30px",
  },
  input: {
    color: "#000000",
    backgroundColor: "transparent",
    padding: "10px",
    margin: "10px 0",
    width: "80%",
    maxWidth: "400px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  textarea: {
    color: "#000000",
    backgroundColor: "transparent",
    padding: "10px",
    margin: "10px 0",
    width: "80%",
    maxWidth: "400px",
    height: "100px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  select: {
    color: "#000000",
    backgroundColor: "transparent",
    padding: "10px",
    margin: "10px 0",
    width: "80%",
    maxWidth: "400px",
    fontSize: "16px",
    borderRadius: "5px",
    border: "1px solid #ccc",
  },
  button: {
    padding: "10px 20px",
    fontSize: "16px",
    backgroundColor: "#0070f3",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    marginTop: "10px",
  },
  taskList: {
    listStyleType: "none",
    padding: "0",
  },
  taskItem: {
    backgroundColor: "#f9f9f9",
    padding: "20px",
    margin: "10px 0",
    borderRadius: "5px",
    boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "60%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  priority: {
    fontWeight: "bold",
    color: "#0070f3",
  },
  deleteIcon: {
    cursor: "pointer",
    color: "#9fa6b2",
    fontSize: "18px",
    marginLeft: "10px",
  },
  editIcon: {
    cursor: "pointer",
    color: "#0070f3",
    fontSize: "20px",
    marginLeft: "10px",
  },
};
