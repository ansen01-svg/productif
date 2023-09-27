import { Box, Divider } from "@mui/material";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";

const TaskSidebarOptionsHolder = (props) => {
  return (
    <Box
      sx={{
        width: "100%",
        padding: "0 10px",
        background: "white",
      }}
    >
      <NotifyButtonHolder />
      <Divider
        sx={{ width: "100%", height: "1px", bgColor: "rgba(0,0,0,0.8)" }}
      />
      <DueTimeButtonHolder />
    </Box>
  );
};

const NotifyButtonHolder = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "58px",
        display: "flex",
      }}
    >
      <button
        style={{
          flexGrow: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "20px",
          outline: "none",
          border: "none",
          background: "inherit",
          fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
            "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
            sans-serif`,
          fontSize: "15px",
        }}
      >
        <NotificationsNoneOutlinedIcon
          fontSize="small"
          sx={{ color: "rgba(0,0,0,0.6)" }}
        />
        <span>Remind me</span>
      </button>
    </Box>
  );
};

const DueTimeButtonHolder = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "58px",
        display: "flex",
      }}
    >
      <button
        style={{
          flexGrow: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "20px",
          outline: "none",
          border: "none",
          background: "inherit",
          fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
            "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
            sans-serif`,
          fontSize: "15px",
        }}
      >
        <CalendarTodayOutlinedIcon
          fontSize="small"
          sx={{ color: "rgba(0,0,0,0.6)" }}
        />
        <span>Today</span>
      </button>
    </Box>
  );
};

export default TaskSidebarOptionsHolder;
