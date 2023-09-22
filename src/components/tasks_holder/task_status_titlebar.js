import { Box } from "@mui/material";
import TextHolder from "../text_holder";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import Button from "../button";

const TaskStatusTitleBar = (props) => {
  const { title, totalTasks, open, showCompletedTasks } = props;

  return (
    <Box
      sx={{
        width: "100%",
        minHeight: "52px",
        padding: "0 10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        gap: "10px",
        borderBottom: `${open ? "" : "1px solid rgba(57,76,96,.15)"}`,
      }}
    >
      <Button
        bgColor="inherit"
        size="small"
        borderRadius="0"
        boxShadow="none"
        minWidth="40px"
        hoverColor="inherit"
        hoverShadow="none"
        onClick={showCompletedTasks}
      >
        {open ? (
          <ExpandMoreOutlinedIcon sx={{ color: "gray" }} fontSize="medium" />
        ) : (
          <KeyboardArrowRightIcon sx={{ color: "gray" }} fontSize="medium" />
        )}
      </Button>
      <TextHolder fontWeight={500}>{title}</TextHolder>
      <TextHolder color="gray">{totalTasks}</TextHolder>
    </Box>
  );
};

export default TaskStatusTitleBar;
