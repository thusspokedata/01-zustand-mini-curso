import { StateCreator, create } from 'zustand';
import { Task } from '../../components/interfaces';

interface TaskState {
  tasks: Record<string, Task>;
}

const storeApi: StateCreator<TaskState> = (set) => ({
  tasks: {
    'ABC-1': { id: 'ABC-1', title: 'Task 1', status: 'open' },
    'ABC-2': { id: 'ABC-2', title: 'Task 2', status: 'in_Progress' },
    'ABC-3': { id: 'ABC-3', title: 'Task 3', status: 'done' },
    'ABC-4': { id: 'ABC-4', title: 'Task 4', status: 'open' },
  },
});

export const useTasksStore = create<TaskState>()(storeApi);