import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import { useWindowWidth } from "../hooks";
import Header from "./header";
import Main from "./main";

const Layout = () => {
  // const dispatch = useDispatch();
  const { desktopScreen } = useWindowWidth();

  const [isDesktopSidebarOpen, setIsDesktopSidebarOpen] = useState(true);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  // useEffect(() => {
  //   dispatch(setUser());
  // }, [dispatch]);

  useEffect(() => {
    if (desktopScreen) {
      setIsDesktopSidebarOpen(true);
      setIsMobileSidebarOpen(false);
    } else {
      setIsDesktopSidebarOpen(false);
    }
  }, [desktopScreen]);

  const toggleMobileSidebar = (toggle) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setIsMobileSidebarOpen(toggle);
  };

  return (
    <Box>
      <Header
        toggleMobileSidebar={toggleMobileSidebar}
        setIsDesktopSidebarOpen={setIsDesktopSidebarOpen}
      />
      <Main
        isDesktopSidebarOpen={isDesktopSidebarOpen}
        desktopScreen={desktopScreen}
        isMobileSidebarOpen={isMobileSidebarOpen}
        toggleMobileSidebar={toggleMobileSidebar}
      />
    </Box>
  );
};

export default Layout;
