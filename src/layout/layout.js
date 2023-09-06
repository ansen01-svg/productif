import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import { useWindowWidth } from "../hooks";
import Header from "./header";
import MobileSidebar from "./mobile_sidebar/mobile_sidebar";
import Main from "./main";

const Layout = () => {
  // const dispatch = useDispatch();
  const mobileScreen = useWindowWidth();

  const [isDesktopSidebarOpen, setIsDesktopSidebarOpen] = useState(true);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  // useEffect(() => {
  //   dispatch(setUser());
  // }, [dispatch]);

  useEffect(() => {
    if (!mobileScreen) {
      setIsDesktopSidebarOpen(true);
      setIsMobileSidebarOpen(false);
    } else {
      setIsDesktopSidebarOpen(false);
    }
  }, [mobileScreen]);

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
      {mobileScreen && (
        <MobileSidebar
          isMobileSidebarOpen={isMobileSidebarOpen}
          toggleMobileSidebar={toggleMobileSidebar}
        />
      )}
      <Main
        isDesktopSidebarOpen={isDesktopSidebarOpen}
        mobileScreen={mobileScreen}
      />
    </Box>
  );
};

export default Layout;
