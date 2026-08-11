import { useState } from "react";

function AddTask(props) {
  const [task, setTask] = useState("");
  const [subject, setSubject] = useState("C++");

  function handleAddTask() {
    if (task.trim() === "") {
      return;
    }

    props.setTask((previousTasks) => [
      ...previousTasks,
      {
        title: task,
        subject: subject,
        completed: false
      },
    ]);

    setTask("");
  }

  return (
    <div>
      <h2>Add Task</h2>

      <input
        type="text"
        placeholder="Enter your task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <select
      value={subject}
      onChange={(e) => setSubject(e.target.value)}
      >
        <option value="C++">C++</option>
        <option value="React">React</option>
        <option value="Database">Database</option>
        <option value="Computer Network">Computer Network</option>
      </select>

      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
}

export default AddTask;
