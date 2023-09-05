import { useState, useEffect } from "react";

function getWindowWidth() {
  const width = window.innerWidth;
  return width;
}

const useWindowWidth = () => {
  const [windowWidth, setWindowWidth] = useState(getWindowWidth());
  const [mobileScreen, setMobileScreen] = useState(true);

  useEffect(() => {
    function handleResize() {
      setWindowWidth(getWindowWidth());
    }

    if (windowWidth > "500") {
      setMobileScreen(false);
    } else {
      setMobileScreen(true);
    }

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [windowWidth]);

  return mobileScreen;
};

export default useWindowWidth;
