// import { useEffect, useRef } from "react";
import { Box } from "@mui/material";
import EastOutlinedIcon from "@mui/icons-material/EastOutlined";
import Button from "../../components/button";
import TextHolder from "../../components/text_holder";
// import useWindowWidth from "../../hooks/useWindowWidth";

const TaskSidebarContentHeader = (props) => {
  // const { setIsDesktopTaskSidebarOpen, setIsMobileTaskSidebarOpen } = props;
  const { setIsDesktopTaskSidebarOpen } = props;

  // const { desktopScreen } = useWindowWidth();

  // let handleClick = useRef(null);

  // useEffect(() => {
  //   if (!desktopScreen) {
  //     handleClick.current = setIsDesktopTaskSidebarOpen(false);
  //   } else {
  //     handleClick.current = function () {
  //       setIsDesktopTaskSidebarOpen(false);
  //     };
  //   }
  // }, [desktopScreen, setIsDesktopTaskSidebarOpen, setIsMobileTaskSidebarOpen]);

  return (
    <Box
      sx={{
        width: "100%",
        height: "58px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "15px",
      }}
    >
      <Button
        bgColor="inherit"
        size="medium"
        borderRadius="0"
        boxShadow="none"
        minWidth="40px"
        hoverColor="inherit"
        hoverShadow="none"
        onClick={() => setIsDesktopTaskSidebarOpen(false)}
      >
        <EastOutlinedIcon fontSize="medium" sx={{ color: "rgba(0,0,0,0.6)" }} />
      </Button>
      <TextHolder variant="p" fontWeight={500}>
        Task Details
      </TextHolder>
    </Box>
  );
};

export default TaskSidebarContentHeader;
