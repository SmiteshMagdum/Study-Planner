# Study Planner

A clean, distraction-free study planner for tracking tasks across subjects. 
Built with React and Tailwind CSS, with a minimal black-and-white aesthetic 
and data persisted locally in the browser.

## Features

- **Task management** — add tasks with subject, priority, and due date
- **Subject tracking** — see task counts and completion progress per subject (C++, React, Database, Computer Network)
- **Smart filtering** — view All, Active, Completed, or Overdue tasks
- **Progress overview** — daily stats for total tasks, completed tasks, and overall progress
- **Persistent storage** — tasks are saved to `localStorage`, so your data stays put between sessions

## Tech Stack

- React (hooks: `useState`, `useEffect`)
- Tailwind CSS
- Browser `localStorage` for persistence

## Getting Started

```bash
npm install
npm run dev
```

## Project Structure

- `Dashboard.jsx` — main layout, task filtering, and overview stats
- `AddTask.jsx` — form for creating new tasks
- `TaskCard.jsx` — individual task display with complete/delete actions
- `SubjectCard.jsx` — per-subject progress summary
