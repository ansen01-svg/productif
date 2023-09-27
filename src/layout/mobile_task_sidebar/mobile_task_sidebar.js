import Drawer from "@mui/material/Drawer";
import TaskSidebarContent from "../desktop_task_sidebar/task_sidebar_content";

const MobileTaskSidebar = (props) => {
  const { isMobileTaskSidebarOpen, toggleMobileTaskSidebar } = props;

  return (
    <Drawer
      anchor="right"
      open={isMobileTaskSidebarOpen}
      onClose={toggleMobileTaskSidebar()}
      sx={{
        top: "48px",
        "& .MuiBackdrop-root": {
          top: "48px",
        },
        "& .MuiPaper-root": {
          top: "48px",
          width: "390px",
          bgcolor: "effects.background",
        },
      }}
    >
      <TaskSidebarContent toggleMobileTaskSidebar={toggleMobileTaskSidebar} />
    </Drawer>
  );
};

export default MobileTaskSidebar;
