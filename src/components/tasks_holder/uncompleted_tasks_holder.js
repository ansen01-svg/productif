import Bar from "../bar";
import TaskContent from "./task_content";

const UncompletedTasksHolder = (props) => {
  const {
    tasks,
    showTaskNameInTaskHolder,
    openDesktopTaskSidebar,
    toggleMobileTaskSidebar,
    setIsMobileTaskSidebarOpen,
  } = props;

  return (
    <>
      {tasks.map((task) => {
        return (
          <Bar key={task.id} zIndex={1}>
            <TaskContent
              id={task.id}
              individualTask={task.data}
              showTaskNameInTaskHolder={showTaskNameInTaskHolder}
              openDesktopTaskSidebar={openDesktopTaskSidebar}
              toggleMobileTaskSidebar={toggleMobileTaskSidebar}
              setIsMobileTaskSidebarOpen={setIsMobileTaskSidebarOpen}
            />
          </Bar>
        );
      })}
    </>
  );
};

export default UncompletedTasksHolder;
