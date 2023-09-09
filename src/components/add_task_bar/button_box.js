import { Box } from "@mui/material";
import Button from "../button";
import ScheduleOutlinedIcon from "@mui/icons-material/ScheduleOutlined";

const ButtonBox = () => {
  return (
    <Box
      flexGrow={1}
      sx={{
        height: "45px",
        padding: "0 10px",
        display: "flex",
        backgroundColor: "buttonBox.main",
        color: "buttonBox.contrastText",
        transition: "height 500ms cubic-bezier(0.25, 0.1, 0.25, 1) 0s",
      }}
    >
      <Content />
    </Box>
  );
};

const Content = () => {
  return (
    <Box
      flexGrow={1}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box>
        <Button
          bgColor="inherit"
          size="small"
          borderRadius="0"
          boxShadow="none"
          minWidth="40px"
          hoverColor="searchInputColor.buttonHover"
          hoverShadow="none"
        >
          <ScheduleOutlinedIcon fontSize="small" />
        </Button>
      </Box>
      <Box>
        <Button
          variant="outlined"
          size="medium"
          textTransform="capitalize"
          borderRadius={0}
        >
          Add
        </Button>
      </Box>
    </Box>
  );
};

export default ButtonBox;
