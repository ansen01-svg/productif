import { Box, Checkbox } from "@mui/material";
import Brightness1OutlinedIcon from "@mui/icons-material/Brightness1Outlined";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import StarIcon from "@mui/icons-material/Star";

const TaskSidebarContentTaskHolder = ({ task }) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "58px",
        padding: "0 10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        background: "white",
      }}
    >
      <CheckboxHolder task={task} />
      <TextAreaHolder task={task} />
      <ImportantHolder task={task} />
    </Box>
  );
};

const CheckboxHolder = ({ task }) => {
  const label = { inputProps: { "aria-label": "Complete-task" } };

  return (
    <Box component="span">
      <Checkbox
        {...label}
        icon={<Brightness1OutlinedIcon fontSize="small" />}
        checkedIcon={<CheckCircleIcon fontSize="small" />}
        sx={{
          color: "#1976d2",
        }}
        // checked={completed}
        // onChange={() => handleChange(id, collectionName, completed)}
      />
    </Box>
  );
};

const TextAreaHolder = ({ task }) => {
  const handleChange = (e) => {
    console.log(e.target.value);
  };

  return (
    <Box component="span" sx={{ flexGrow: 1 }}>
      <textarea
        placeholder={task && task.task}
        value={task && task.task}
        onChange={handleChange}
        style={{
          width: "100%",
          height: "20px",
          outline: "none",
          border: "none",
          fontFamily: `-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
            "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
            sans-serif`,
          fontSize: "15px",
        }}
      ></textarea>
    </Box>
  );
};

const ImportantHolder = ({ task }) => {
  const label = { inputProps: { "aria-label": "Complete-task" } };

  return (
    <Box component="span">
      <Checkbox
        {...label}
        icon={<StarBorderOutlinedIcon fontSize="small" />}
        checkedIcon={<StarIcon fontSize="small" />}
        // checked={important}
        // onChange={() => handleChange(id, collectionName, important)}
      />
    </Box>
  );
};

export default TaskSidebarContentTaskHolder;
