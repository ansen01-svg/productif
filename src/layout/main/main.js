import { Box } from "@mui/material";
import { useState } from "react";
import { useDispatch } from "react-redux";
import DesktopSidebar from "../desktop_sidebar";
import DesktopTaskSidebar from "../desktop_task_sidebar";
import Content from "../content";
import MobileSidebar from "../mobile_sidebar";
import MobileTaskSidebar from "../mobile_task_sidebar";
import { useWindowWidth } from "../../hooks";
import { setPlaceHolderTaskId } from "../../store_provider/firestore_slice";

const Main = (props) => {
  const { isDesktopSidebarOpen, isMobileSidebarOpen, toggleMobileSidebar } =
    props;
  const dispatch = useDispatch();
  const { desktopScreen } = useWindowWidth();

  const [isDesktopTaskSidebarOpen, setIsDesktopTaskSidebarOpen] =
    useState(false);
  const [isMobileTaskSidebarOpen, setIsMobileTaskSidebarOpen] = useState(false);

  // open desktop task sidebar and set the task id for task placeholder
  const openDesktopTaskSidebar = (taskId) => {
    dispatch(setPlaceHolderTaskId(taskId));
    setIsDesktopTaskSidebarOpen(true);
  };

  // open and close mobile task sidebar and set the task id for task placeholder
  const toggleMobileTaskSidebar = (taskId) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    dispatch(setPlaceHolderTaskId(taskId));
    setIsMobileTaskSidebarOpen((state) => !state);
  };

  // conditions check
  // const showMobileSidebar = !desktopScreen && isMobileSidebarOpen;
  // const showDesktopSidebar = desktopScreen && isDesktopSidebarOpen;
  // const showMobileTaskSidebar = !desktopScreen && isMobileTaskSidebarOpen;
  // const showDesktopTaskSidebar = desktopScreen && isDesktopTaskSidebarOpen;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
      }}
    >
      {!desktopScreen && isMobileSidebarOpen && (
        <MobileSidebar
          isMobileSidebarOpen={isMobileSidebarOpen}
          toggleMobileSidebar={toggleMobileSidebar}
        />
      )}
      {desktopScreen && isDesktopSidebarOpen && <DesktopSidebar />}
      <Content
        openDesktopTaskSidebar={openDesktopTaskSidebar}
        toggleMobileTaskSidebar={toggleMobileTaskSidebar}
        setIsMobileTaskSidebarOpen={setIsMobileTaskSidebarOpen}
      />
      {!desktopScreen && isMobileTaskSidebarOpen && (
        <MobileTaskSidebar
          isMobileTaskSidebarOpen={isMobileTaskSidebarOpen}
          toggleMobileTaskSidebar={toggleMobileTaskSidebar}
          setIsMobileTaskSidebarOpen={setIsMobileTaskSidebarOpen}
        />
      )}
      {desktopScreen && isDesktopTaskSidebarOpen && (
        <DesktopTaskSidebar
          setIsDesktopTaskSidebarOpen={setIsDesktopTaskSidebarOpen}
        />
      )}
    </Box>
  );
};

export default Main;
