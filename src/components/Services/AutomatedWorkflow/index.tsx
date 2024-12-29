import React, { useState, useCallback } from 'react';
import { WorkflowContainer } from './WorkflowContainer';
import { TaskList } from './TaskList';
import { MobileWorkflow } from './MobileWorkflow';

const TASKS = [
  { id: 1, text: 'New Lead Captured' },
  { id: 2, text: 'Add to Pipedrive CRM' },
  { id: 3, text: 'Send Confirmation Email' },
];

export function AutomatedWorkflow() {
  const [completedTasks, setCompletedTasks] = useState<number[]>([]);
  const [animatingOut, setAnimatingOut] = useState<number | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleTaskClick = useCallback((taskId: number) => {
    if (completedTasks.includes(taskId) || taskId !== completedTasks.length + 1) {
      return;
    }

    setAnimatingOut(taskId);
    
    setTimeout(() => {
      const newCompletedTasks = [...completedTasks, taskId];
      setCompletedTasks(newCompletedTasks);
      setAnimatingOut(null);

      if (newCompletedTasks.length === TASKS.length) {
        setShowConfetti(true);
      }
    }, 300);
  }, [completedTasks]);

  return (
    <WorkflowContainer showConfetti={showConfetti}>
      {/* Desktop version */}
      <div className="hidden lg:block">
        <TaskList
          tasks={TASKS}
          completedTasks={completedTasks}
          animatingOut={animatingOut}
          onTaskClick={handleTaskClick}
        />
      </div>

      {/* Mobile version */}
      <div className="lg:hidden">
        <MobileWorkflow
          tasks={TASKS}
          completedTasks={completedTasks}
          onTaskClick={handleTaskClick}
        />
      </div>
    </WorkflowContainer>
  );
}