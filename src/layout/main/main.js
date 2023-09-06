import DesktopSidebar from "../desktop_sidebar";
import { Box } from "@mui/material";
import { Outlet } from "react-router-dom";

const Main = (props) => {
  const { mobileScreen, isDesktopSidebarOpen } = props;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
      }}
    >
      {!mobileScreen && isDesktopSidebarOpen && <DesktopSidebar />}
      <Outlet />
    </Box>
  );
};

export default Main;
