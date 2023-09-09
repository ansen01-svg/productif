import { Box } from "@mui/material";
import DesktopSidebar from "../desktop_sidebar";
import MobileSidebar from "../mobile_sidebar/mobile_sidebar";
import Content from "../content";

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
      <Content />
    </Box>
  );
};

export default Main;
