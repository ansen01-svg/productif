import { Box } from "@mui/material";
import SidebarContent from "./sidebar_content";

const DesktopTaskSidebar = () => {
  return (
    <Box
      component="aside"
      sx={{
        width: 360,
        height: "calc(100vh - 48px)",
        padding: "24px 0",
        position: "sticky",
        top: "48px",
        right: "0",
        zIndex: "50",
        boxShadow:
          "0px 0.3px 0.9px rgba(0,0,0,0.1),0px 1.6px 3.6px rgba(0,0,0,0.1)",
      }}
    >
      <SidebarContent />
    </Box>
  );
};

export default DesktopTaskSidebar;
