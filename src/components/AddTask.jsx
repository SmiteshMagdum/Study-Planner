import { useState } from "react";

function AddTask(props) {
  const [task, setTask] = useState("");
  const [subject, setSubject] = useState("C++");
  const [priority, setPriority] = useState("Medium");
  const [dueDate, setDueDate] = useState("");

  function handleAddTask() {
    if (task.trim() === "") {
      return;
    }

    props.setTask((previousTasks) => [
      ...previousTasks,
      {
        id: crypto.randomUUID(),
        title: task,
        subject: subject,
        priority: priority,
        completed: false,
        dueDate: dueDate,
      },
    ]);

    setTask("");
    setPriority("Medium");
  }

  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-6">
      <h2 className="font-serif italic text-2xl text-black mb-5">
        Add Task
      </h2>

      <div className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Enter your task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-gray-200
                     outline-none text-black placeholder-gray-400
                     focus:border-black focus:ring-2 focus:ring-gray-100
                     transition"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <select
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-200
                       bg-white text-black outline-none
                       focus:border-black focus:ring-2 focus:ring-gray-100
                       transition cursor-pointer"
          >
            <option value="C++">C++</option>
            <option value="React">React</option>
            <option value="Database">Database</option>
            <option value="Computer Network">Computer Network</option>
          </select>

          <select
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className="w-full px-4 py-3 rounded-xl border border-gray-200
                       bg-white text-black outline-none
                       focus:border-black focus:ring-2 focus:ring-gray-100
                       transition cursor-pointer"
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>

        <input
          type="date"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border border-gray-200
                     text-black outline-none
                     focus:border-black focus:ring-2 focus:ring-gray-100
                     transition cursor-pointer"
        />

        <button
          onClick={handleAddTask}
          className="w-full py-3 px-4 rounded-xl
                     bg-black text-white font-semibold
                     hover:bg-gray-800 active:scale-[0.98]
                     transition-all duration-200"
        >
          + Add Task
        </button>
      </div>
    </div>
  );
}
export default AddTask;
