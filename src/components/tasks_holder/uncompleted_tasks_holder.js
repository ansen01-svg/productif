import Bar from "../bar";
import TaskContent from "./task_content";

const UncompletedTasksHolder = ({ tasks }) => {
  return (
    <>
      {tasks.map((task) => {
        return (
          <Bar key={task.id}>
            <TaskContent id={task.id} individualTask={task.data} />
          </Bar>
        );
      })}
    </>
  );
};

export default UncompletedTasksHolder;
