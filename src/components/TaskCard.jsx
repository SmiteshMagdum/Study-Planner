function TaskCard(props) {
  function handleDelete() {
    props.setTask((previousTasks) => {
      return previousTasks.filter((task, i) => i !== props.index);
    });
  }

  function handleComplete() {
    props.setTask((previousTasks) => {
      return previousTasks.map((task, i) => {
        if (i == props.index) {
          return {
            ...task,
            completed: !task.completed,
          };
        }
        return task;
      });
    });
  }
  return (
    <div>
      <p
        style={{
          textDecoration: props.task.completed ? "line-through" : "none",
        }}
      >
        {props.task.title}
      </p>
      <button onClick={handleDelete}>Delete</button>
      <input
        type="checkbox"
        checked={props.task.completed}
        onChange={handleComplete}
      />
    </div>
  );
}

export default TaskCard;
