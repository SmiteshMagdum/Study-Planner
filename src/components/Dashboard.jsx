import SubjectCard from "./SubjectCard";
import AddTask from "./AddTask";
import TaskCard from "./TaskCard";
import { useState } from "react";

function Dashboard() {
  const [task, setTask] = useState([]);

  const totalTasks = task.length;

const completedTasks = task.filter(
  (task) => task.completed
).length;

const progress =
  totalTasks === 0
    ? 0
    : Math.round((completedTasks / totalTasks) * 100);

const cppTasks = task.filter(
    (task) => task.subject === "c++"
)
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
        <SubjectCard name="C++" tasks={cppTasks.length} Completed="10%" />
        <SubjectCard name="React" tasks="2" Completed="20%" />
        <SubjectCard name="Database" tasks="3" Completed="30%" />
        <SubjectCard name="Computer Network" tasks="4" Completed="40%" />
      </div>
      <div>
        <AddTask setTask={setTask} />
      </div>

      <div>
        <h2>Tasks</h2>
        {task.map((task, index) => (
          <TaskCard 
           key={index}
           task={task}
           setTask={setTask} 
           index={index} />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
