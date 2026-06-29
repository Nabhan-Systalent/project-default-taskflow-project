'use client';

import { useState } from 'react';
import { Task, ProjectBoardProps } from './ProjectBoard.types';

export const ProjectBoard = ({ initialTasks }: ProjectBoardProps) => {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [activeTask, setActiveTask] = useState<Task | null>(null);

  const columns: { id: Task['status']; label: string }[] = [
    { id: 'todo', label: 'To Do' },
    { id: 'in-progress', label: 'In Progress' },
    { id: 'done', label: 'Done' },
  ];

  const getTasksByStatus = (status: Task['status']) => 
    tasks.filter((t) => t.status === status);

  return (
    <div className="flex gap-6 p-6 h-full overflow-x-auto bg-gray-50">
      {columns.map((column) => (
        <div key={column.id} className="flex flex-col w-80 shrink-0">
          <h2 className="font-semibold text-gray-700 mb-4">{column.label}</h2>
          <div className="flex flex-col gap-3">
            {getTasksByStatus(column.id).map((task) => (
              <div
                key={task.id}
                onClick={() => setActiveTask(task)}
                className="p-4 bg-white rounded-lg shadow-sm border border-gray-200 cursor-pointer hover:shadow-md transition-shadow"
              >
                <h3 className="font-medium text-gray-900">{task.title}</h3>
                <p className="text-sm text-gray-500 mt-1 truncate">{task.description}</p>
              </div>
            ))}
          </div>
        </div>
      ))}

      {activeTask && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-lg shadow-xl">
            <h2 className="text-xl font-bold mb-4">Edit Task</h2>
            <input
              className="w-full mb-4 p-2 border rounded"
              value={activeTask.title}
              onChange={(e) => setActiveTask({ ...activeTask, title: e.target.value })}
            />
            <textarea
              className="w-full mb-4 p-2 border rounded min-h-[100px]"
              value={activeTask.description}
              onChange={(e) => setActiveTask({ ...activeTask, description: e.target.value })}
            />
            <div className="flex justify-end gap-2">
              <button 
                className="px-4 py-2 text-gray-600" 
                onClick={() => setActiveTask(null)}
              >
                Cancel
              </button>
              <button 
                className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                onClick={() => {
                  setTasks(tasks.map(t => t.id === activeTask.id ? activeTask : t));
                  setActiveTask(null);
                }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
