import { Box } from "@mui/material";
import TaskSidebarContent from "./task_sidebar_content";

const DesktopTaskSidebar = ({ setIsDesktopTaskSidebarOpen }) => {
  return (
    <Box
      component="aside"
      sx={{
        width: 360,
        height: "calc(100vh - 48px)",
        position: "sticky",
        top: "48px",
        right: "0",
        display: "flex",
        bgcolor: "effects.background",
        zIndex: "50",
        boxShadow:
          " 0px 1.2px 3.6px rgba(0,0,0,0.1),0px 6.4px 14.4px rgba(0,0,0,0.1)",
      }}
    >
      <TaskSidebarContent
        setIsDesktopTaskSidebarOpen={setIsDesktopTaskSidebarOpen}
      />
    </Box>
  );
};

export default DesktopTaskSidebar;
