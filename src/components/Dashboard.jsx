import SubjectCard from "./SubjectCard";
import AddTask from "./AddTask";
import TaskCard from "./TaskCard";
import { useEffect, useState } from "react";

function Dashboard() {
  const [task, setTask] = useState(() => {
    const savedTasks = localStorage.getItem("tasks");

    if (!savedTasks) {
      return [];
    }

    const parsedTasks = JSON.parse(savedTasks);

    return parsedTasks.map((task) => {
      return {
        ...task,
        id: task.id || crypto.randomUUID(),
      };
    });
  });

  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(task));
  }, [task]);

  const filteredTasks = task.filter((item) => {
    if (filter === "active") {
      return !item.completed;
    }

    if (filter === "completed") {
      return item.completed;
    }

    if (filter === "overdue") {
      const today = new Date();
      const dueDate = new Date(item.dueDate);

      return !item.completed && dueDate < today;
    }

    return true;
  });

  const totalTasks = task.length;
  const completedTasks = task.filter((item) => item.completed).length;

  const progress =
    totalTasks === 0 ? 0 : Math.round((completedTasks / totalTasks) * 100);

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
    <div className="min-h-screen bg-white text-black">
      {/* Top badge, same as landing page */}
      <div className="flex justify-center pt-10 pb-4">
        <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-gray-50 px-4 py-1.5 text-sm text-gray-600">
          <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
          Your study space, organized
        </span>
      </div>

      <div className="max-w-6xl mx-auto px-6 pb-16">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="font-serif italic text-5xl sm:text-6xl text-black">
            Study Planner.
          </h1>
          <p className="text-gray-500 mt-3 text-base sm:text-lg">
            Track your subjects, tasks, and progress — all in one place.
          </p>
        </div>

        {/* Overview */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-black mb-4">
            Today&apos;s Overview
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-xl border border-gray-200 p-5">
              <h3 className="text-gray-500 text-sm">Total Tasks</h3>
              <p className="text-3xl font-bold mt-2 text-black">
                {totalTasks}
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-5">
              <h3 className="text-gray-500 text-sm">Completed</h3>
              <p className="text-3xl font-bold mt-2 text-black">
                {completedTasks}
              </p>
            </div>

            <div className="rounded-xl border border-gray-200 p-5">
              <h3 className="text-gray-500 text-sm">Progress</h3>
              <p className="text-3xl font-bold mt-2 text-black">
                {progress}%
              </p>
            </div>
          </div>
        </div>

        {/* Subjects */}
        <div className="mb-12">
          <h2 className="text-xl font-semibold text-black mb-4">Subjects</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <SubjectCard
              name="C++"
              tasks={cpp.tasks}
              completed={cpp.completed}
              progress={cpp.progress}
            />

            <SubjectCard
              name="React"
              tasks={react.tasks}
              completed={react.completed}
              progress={react.progress}
            />

            <SubjectCard
              name="Database"
              tasks={database.tasks}
              completed={database.completed}
              progress={database.progress}
            />

            <SubjectCard
              name="Computer Network"
              tasks={network.tasks}
              completed={network.completed}
              progress={network.progress}
            />
          </div>
        </div>

        {/* Add Task */}
        <div className="mb-12">
          <AddTask setTask={setTask} />
        </div>

        {/* Tasks Section */}
        <div>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-5">
            <h2 className="text-xl font-semibold text-black">Tasks</h2>

            {/* Filters */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setFilter("all")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition cursor-pointer ${
                  filter === "all"
                    ? "bg-black text-white"
                    : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
                }`}
              >
                All
              </button>

              <button
                onClick={() => setFilter("active")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition cursor-pointer ${
                  filter === "active"
                    ? "bg-black text-white"
                    : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
                }`}
              >
                Active
              </button>

              <button
                onClick={() => setFilter("completed")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition cursor-pointer ${
                  filter === "completed"
                    ? "bg-black text-white"
                    : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
                }`}
              >
                Completed
              </button>

              <button
                onClick={() => setFilter("overdue")}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition cursor-pointer ${
                  filter === "overdue"
                    ? "bg-black text-white"
                    : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
                }`}
              >
                Overdue
              </button>
            </div>
          </div>

          {/* Task List */}
          <div className="flex flex-col gap-4">
            {filteredTasks.length === 0 ? (
              <div className="bg-white rounded-2xl border border-gray-200 p-8 text-center">
                <p className="text-gray-400">No tasks found.</p>
              </div>
            ) : (
              filteredTasks.map((task) => (
                <TaskCard key={task.id} task={task} setTask={setTask} />
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
