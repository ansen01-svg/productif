import Bar from "../bar";
import TaskContent from "./task_content";

const CompletedTasksHolder = ({ tasks }) => {
  return (
    <>
      {tasks.map((task) => {
        return (
          <Bar key={task.id} zIndex={1}>
            <TaskContent id={task.id} individualTask={task.data} />
          </Bar>
        );
      })}
    </>
  );
};

export default CompletedTasksHolder;
