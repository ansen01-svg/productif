import { Box, AppBar } from "@mui/material";
import Content from "./header_content";

const Header = (props) => {
  const { toggleMobileSidebar, setIsDesktopSidebarOpen } = props;

  return (
    <Box
      sx={{
        flexGrow: 1,
        position: "sticky",
        top: "0",
        left: "0",
        zIndex: "250",
        // background: "#42a5f5",
      }}
    >
      <HeaderCenter
        toggleMobileSidebar={toggleMobileSidebar}
        setIsDesktopSidebarOpen={setIsDesktopSidebarOpen}
      />
    </Box>
  );
};

const HeaderCenter = (props) => {
  const { toggleMobileSidebar, setIsDesktopSidebarOpen } = props;

  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "inherit",
        color: "inherit",
        boxShadow: "2px 2px 2px rgba(64,87,109,.07)",
      }}
    >
      <Content
        toggleMobileSidebar={toggleMobileSidebar}
        setIsDesktopSidebarOpen={setIsDesktopSidebarOpen}
      />
    </AppBar>
  );
};

export default Header;
