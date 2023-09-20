import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useWindowWidth } from "../hooks";
import Header from "./header";
import Main from "./main";
import {
  storeInSessionStorage,
  getFromSessionStorage,
} from ".././utils/utils_functions";
import { navigationItems } from ".././utils/arrays";
import { useDispatch } from "react-redux";
import { setUser } from "../store_provider/app_slice";
import {
  fetchDailyTasks,
  fetchWeeklyTasks,
} from "../store_provider/firestore_slice";

const Layout = () => {
  const dispatch = useDispatch();
  const { desktopScreen } = useWindowWidth();
  const auth = getAuth();

  const [isDesktopSidebarOpen, setIsDesktopSidebarOpen] = useState(true);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  // get current user
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        dispatch(setUser(user.auth.currentUser.email));
      } else {
        dispatch(setUser(null));
      }
    });

    return () => {
      unsubscribe();
    };
  }, [auth, dispatch]);

  // fetch daily and weekly tasks
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (!user) return;
      dispatch(fetchDailyTasks());
      dispatch(fetchWeeklyTasks());
    });
  }, [auth, dispatch]);

  // store home page as current page
  useEffect(() => {
    const currentPage = getFromSessionStorage("currentPage");

    if (currentPage) return;
    storeInSessionStorage("currentPage", navigationItems[0].title);
  }, []);

  // open and close desktop sidebar
  useEffect(() => {
    if (desktopScreen) {
      setIsDesktopSidebarOpen(true);
      setIsMobileSidebarOpen(false);
    } else {
      setIsDesktopSidebarOpen(false);
    }
  }, [desktopScreen]);

  // open and close mobile sidebar
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
