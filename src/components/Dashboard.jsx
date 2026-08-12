import SubjectCard from "./SubjectCard";
import AddTask from "./AddTask";
import TaskCard from "./TaskCard";
import { useState } from "react";

function Dashboard() {
  const [task, setTask] = useState([]);

  const totalTasks = task.length;

  const completedTasks = task.filter((task) => task.completed).length;

  const progress =
    totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

  const cppTasks = task.filter((item) => item.subject === "C++");
  const reactTasks = task.filter((item) => item.subject === "React");

  const databaseTasks = task.filter((item) => item.subject === "Database");

  const networkTasks = task.filter(
    (item) => item.subject === "Computer Network",
  );
  const reactCompleted = reactTasks.filter((item) => item.completed).length;

  const databaseCompleted = databaseTasks.filter(
    (item) => item.completed,
  ).length;

  const networkCompleted = networkTasks.filter((item) => item.completed).length;

  const cppCompleted = cppTasks.filter((item) => item.completed).length;

  const cppProgress =
    cppTasks.length === 0
      ? 0
      : Math.round((cppCompleted / cppTasks.length) * 100);

  const reactProgress =
    reactTasks.length === 0
      ? 0
      : Math.round((reactCompleted / reactTasks.length) * 100);

  const databaseProgress =
    databaseTasks.length === 0
      ? 0
      : Math.round((databaseCompleted / databaseTasks.length) * 100);

  const networkProgress =
    networkTasks.length === 0
      ? 0
      : Math.round((networkCompleted / networkTasks.length) * 100);

  function getSubjectData(subjectName) {
    const subjectTasks = task.filter((item) => item.subject == subjectName);
    const completed = subjectTasks.filter((item) => item.completed).length;

    const progress =
      subjectTasks.length === 0
        ? 0
        : Math.round((completed / subjectTasks.length) * 100);

    return {
      tasks: subjectTasks.length,
      completed: completed,
      progress: progress,
    };
  }
  const cpp = getSubjectData("C++");
const react = getSubjectData("React");
const database = getSubjectData("Database");
const network = getSubjectData("Computer Network");
  return (
    <div>
      <h1>Study Planner</h1>
      <div>
        <h2>Todays Overview</h2>

        <div>
          <div>
            <h3>Total tasks</h3>
            <p>{totalTasks}</p>
          </div>
          <div>
            <h3>Completed</h3>
            <p>{completedTasks}</p>
          </div>
          <div>
            <h3>Progress</h3>
            <p>{progress}</p>
          </div>
        </div>
      </div>
      <div>
        <SubjectCard
          name="C++"
          tasks={cpp.tasks}
          Completed={cpp.completed}
          progress={cpp.progress}
        />
        <SubjectCard
          name="React"
          tasks={react.tasks}
          Completed={react.completed}
          progress={react.progress}
        />
        <SubjectCard
          name="Database"
          tasks={database.tasks}
          Completed={database.completed}
          progress={database.progress}
        />
        <SubjectCard
          name="Computer Network"
          tasks={network.tasks}
          Completed={network.completed}
          progress={network.progress}
        />
      </div>
      <div>
        <AddTask setTask={setTask} />
      </div>

      <div>
        <h2>Tasks</h2>
        {task.map((task, index) => (
          <TaskCard key={index} task={task} setTask={setTask} index={index} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
