import { Box } from "@mui/material";
import SidebarContent from "./sidebar_content";

const DesktopSidebar = () => {
  return (
    <Box
      component="aside"
      sx={{
        width: 300,
        height: "calc(100vh - 64px)",
        maxWidth: 360,
        padding: "20px",
        position: "sticky",
        top: "64px",
        left: "0",
        zIndex: "50",
      }}
    >
      <SidebarContent />
    </Box>
  );
};

export default DesktopSidebar;
