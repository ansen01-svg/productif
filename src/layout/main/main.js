import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import DesktopSidebar from "../desktop_sidebar";
import MobileSidebar from "../mobile_sidebar/mobile_sidebar";

const Main = (props) => {
  const {
    desktopScreen,
    isDesktopSidebarOpen,
    isMobileSidebarOpen,
    toggleMobileSidebar,
  } = props;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
      }}
    >
      {!desktopScreen && (
        <MobileSidebar
          isMobileSidebarOpen={isMobileSidebarOpen}
          toggleMobileSidebar={toggleMobileSidebar}
        />
      )}
      {desktopScreen && isDesktopSidebarOpen && <DesktopSidebar />}
      <Outlet />
    </Box>
  );
};

export default Main;
