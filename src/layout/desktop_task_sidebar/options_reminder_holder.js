import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import { Box } from "@mui/material";
import TextHolder from "../../components/text_holder";

const RemindMeButtonHolder = () => {
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
          fontSize: "0.928rem",
        }}
      >
        <NotificationsNoneOutlinedIcon
          fontSize="small"
          sx={{ color: "rgba(0,0,0,0.6)" }}
        />
        <TextHolder variant="p">Remind me</TextHolder>
      </button>
    </Box>
  );
};

export default RemindMeButtonHolder;
