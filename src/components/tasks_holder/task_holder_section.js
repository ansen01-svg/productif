import { List } from "@mui/material";
import TaskListItem from "./task_content";

const TasksHolderSection = (props) => {
  const {
    tasks,
    showTaskNameInTaskHolder,
    openDesktopTaskSidebar,
    toggleMobileTaskSidebar,
  } = props;

  return (
    <List
      sx={{
        width: "100%",
        padding: "0",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "10px",
      }}
    >
      {tasks.map((task) => {
        return (
          <TaskListItem
            disablePadding
            key={task.id}
            id={task.id}
            individualTask={task.data}
            showTaskNameInTaskHolder={showTaskNameInTaskHolder}
            openDesktopTaskSidebar={openDesktopTaskSidebar}
            toggleMobileTaskSidebar={toggleMobileTaskSidebar}
          />
        );
      })}
    </List>
  );
};

export default TasksHolderSection;
