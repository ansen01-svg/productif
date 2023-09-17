import { Box } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Button from "../button";

const TaskContent = ({ id, individualTask }) => {
  const { task, start, end } = individualTask;

  return (
    <Box
      id={id}
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CheckboxHolder />
      <ButtonHolder task={task} start={start} end={end} />
      <ImportantButtonHolder />
    </Box>
  );
};

const CheckboxHolder = () => {
  const label = { inputProps: { "aria-label": "Complete-task" } };

  return (
    <Box component="span">
      <Checkbox {...label} size="small" />
    </Box>
  );
};

const ButtonHolder = ({ task, start, end }) => {
  return (
    <Box>
      <Button variant="contained" size="large" width="100%">
        {task}
      </Button>
    </Box>
  );
};

const ImportantButtonHolder = () => {
  const label = { inputProps: { "aria-label": "Complete-task" } };

  return (
    <Box>
      <Checkbox {...label} size="small" />
    </Box>
  );
};

export default TaskContent;
