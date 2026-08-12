function TaskCard(props) {
  function handleDelete() {
    props.setTask((previousTasks) => {
      return previousTasks.filter((task) => task.id !== props.task.id);
    });
  }

  function handleComplete() {
    props.setTask((previousTasks) => {
      return previousTasks.map((task) => {
        if (task.id === props.task.id) {
          return {
            ...task,
            completed: !task.completed,
          };
        }

        return task;
      });
    });
  }

  function getDueDateStatus(dueDate, completed) {
    if (completed) {
      return "Completed";
    }

    const today = new Date();
    const due = new Date(dueDate);

    if (due < today) {
      return "Overdue";
    }

    return "Upcoming";
  }

  const dueDateStatus = getDueDateStatus(
    props.task.dueDate,
    props.task.completed
  );

  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 hover:border-black transition-all duration-200">
      {/* Top section */}
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-3">
          {/* Checkbox */}
          <input
            type="checkbox"
            checked={props.task.completed}
            onChange={handleComplete}
            className="mt-1.5 h-5 w-5 accent-black cursor-pointer"
          />

          {/* Task title */}
          <div>
            <p
              className={`text-lg font-semibold text-black ${
                props.task.completed ? "line-through text-gray-400" : ""
              }`}
            >
              {props.task.title}
            </p>

            <p className="text-sm text-gray-500 mt-1">
              {props.task.subject}
            </p>
          </div>
        </div>

        {/* Delete button */}
        <button
          onClick={handleDelete}
          className="text-sm text-gray-500 hover:text-black
                     hover:bg-gray-100 px-3 py-1.5 rounded-lg
                     transition cursor-pointer"
        >
          Delete
        </button>
      </div>

      {/* Task information */}
      <div className="flex flex-wrap items-center gap-3 mt-4">
        {/* Priority */}
        <span
          className={`text-xs font-semibold px-3 py-1.5 rounded-full border ${
            props.task.priority === "High"
              ? "border-black bg-black text-white"
              : props.task.priority === "Medium"
              ? "border-gray-400 bg-gray-100 text-gray-700"
              : "border-gray-200 bg-white text-gray-600"
          }`}
        >
          {props.task.priority} Priority
        </span>

        {/* Due Date */}
        <span className="text-xs font-medium px-3 py-1.5 rounded-full border border-gray-200 bg-white text-gray-600">
          {props.task.dueDate}
        </span>

        {/* Status */}
        <span
          className={`text-xs font-semibold px-3 py-1.5 rounded-full border ${
            dueDateStatus === "Completed"
              ? "border-gray-200 bg-gray-100 text-gray-500"
              : dueDateStatus === "Overdue"
              ? "border-black bg-black text-white"
              : "border-gray-300 bg-white text-gray-700"
          }`}
        >
          {dueDateStatus}
        </span>
      </div>
    </div>
  );
}

export default TaskCard;
