import { JiraTasks } from '../../components';
import { TaskStatus } from '../../components/interfaces';
import { useTasksStore } from '../../stores';

interface JiraPageProps {
  title: string;
  value: TaskStatus;
}

export const JiraPage = ({ title }: JiraPageProps) => {
  const doneTasks = useTasksStore((state) => state.getTaskByStatus('done'));
  const pendingTasks = useTasksStore((state) => state.getTaskByStatus('open'));
  const inProgressTasks = useTasksStore((state) =>
    state.getTaskByStatus('in-progress'),
  );
  console.log('🚀 ~ pendingTask:', pendingTasks);
  console.log('🚀 ~ inProgressTask:', inProgressTasks);
  console.log('🚀 ~ doneTasks:', doneTasks);

  return (
    <>
      <h1>Tareas</h1>
      <p>Manejo de estado con objectos de Zustand</p>
      <hr />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <JiraTasks title="Pendientes" value="open" tasks={pendingTasks} />

        <JiraTasks
          title="Avanzando"
          value="in-progress"
          tasks={inProgressTasks}
        />

        <JiraTasks title="Terminadas" value="done" tasks={doneTasks} />
      </div>
    </>
  );
};
