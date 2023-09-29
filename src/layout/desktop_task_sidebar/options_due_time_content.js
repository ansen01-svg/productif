import { Box } from "@mui/material";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import TextHolder from "../../components/text_holder";

const OptionsDueTimeContent = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
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
        <CalendarTodayOutlinedIcon
          fontSize="small"
          sx={{ color: "rgba(0,0,0,0.6)" }}
        />
        <TextHolder variant="p">Today</TextHolder>
      </button>
    </Box>
  );
};

export default OptionsDueTimeContent;
