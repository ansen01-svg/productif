import { useState, useEffect } from "react";

function getWindowWidth() {
  const width = window.innerWidth;
  return width;
}

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(getWindowWidth());
  const [mobileScreen, setMobileScreen] = useState(true);
  const [tabScreen, setTabScreen] = useState(false);
  const [desktopScreen, setDesktopScreen] = useState(false);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(getWindowWidth());
    }

    if (windowWidth < "510") {
      setMobileScreen(true);
      setTabScreen(false);
      setDesktopScreen(false);
    } else if (windowWidth > "510" && windowWidth < "910") {
      setMobileScreen(false);
      setTabScreen(true);
      setDesktopScreen(false);
    } else {
      setMobileScreen(false);
      setTabScreen(false);
      setDesktopScreen(true);
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [windowWidth]);

  return { mobileScreen, tabScreen, desktopScreen };
};

export default useWindowWidth;
