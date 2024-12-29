import React from 'react';
import { TodoItem } from './TodoItem';
import { CompletionMessage } from './CompletionMessage';

interface TaskListProps {
  tasks: Array<{ id: number; text: string }>;
  completedTasks: number[];
  animatingOut: number | null;
  onTaskClick: (taskId: number) => void;
}

export function TaskList({ tasks, completedTasks, animatingOut, onTaskClick }: TaskListProps) {
  const allTasksCompleted = completedTasks.length === tasks.length;

  if (allTasksCompleted) {
    return <CompletionMessage />;
  }

  return (
    <div className="space-y-3">
      {tasks.map(task => {
        const isCompleted = completedTasks.includes(task.id);
        const isAnimatingOut = animatingOut === task.id;
        const shouldShow = !isCompleted || isAnimatingOut;
        const isNext = task.id === completedTasks.length + 1;

        if (!shouldShow && task.id !== completedTasks.length + 1) {
          return null;
        }

        return (
          <div
            key={task.id}
            className={`
              transform transition-all duration-300
              ${isAnimatingOut ? 'opacity-0 -translate-x-full' : 'opacity-100 translate-x-0'}
            `}
          >
            <TodoItem
              text={task.text}
              isCompleted={isCompleted}
              onClick={() => isNext ? onTaskClick(task.id) : undefined}
            />
          </div>
        );
      })}
    </div>
  );
}