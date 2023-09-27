import { Box } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import Button from "../../components/button";
import TextHolder from "../../components/text_holder";

const TaskSidebarContentFooter = ({ task }) => {
  // task created date
  let date = new Date(task && task.created.seconds * 1000);
  date.setMilliseconds(
    date.getMilliseconds() + task && task.created.nanoseconds / 1e6
  );

  return (
    <Box
      sx={{
        width: "100%",
        height: "58px",
        padding: "0 24px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "absolute",
        bottom: 0,
        left: 0,
      }}
    >
      {task && (
        <TextHolder fontSize="0.75rem">
          Created on {date.toDateString()}
        </TextHolder>
      )}
      <Button
        bgColor="inherit"
        size="medium"
        borderRadius="0"
        boxShadow="none"
        minWidth="40px"
        hoverColor="inherit"
        hoverShadow="none"
      >
        <DeleteOutlineOutlinedIcon
          fontSize="medium"
          sx={{ color: "rgba(0,0,0,0.6)" }}
        />
      </Button>
    </Box>
  );
};

export default TaskSidebarContentFooter;
