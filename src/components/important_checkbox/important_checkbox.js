import { useState, useEffect } from "react";
import { Box, Checkbox } from "@mui/material";
import StarBorderOutlinedIcon from "@mui/icons-material/StarBorderOutlined";
import StarIcon from "@mui/icons-material/Star";
import { changeTaskImportance } from "../../firebase/editTask";
import { useDispatch } from "react-redux";
import {
  fetchDailyTasks,
  fetchWeeklyTasks,
} from "../../store_provider/firestore_slice";

const ImportantCheckbox = ({ id, collectionName, important }) => {
  const dispatch = useDispatch();

  const [isImportant, setIsImportant] = useState(false);

  const label = { inputProps: { "aria-label": "Complete-task" } };

  const handleChange = (id, task) => {
    setIsImportant(!isImportant);
    changeTaskImportance(id, task, isImportant);

    if (task === "dailyTasks") {
      dispatch(fetchDailyTasks());
    } else {
      dispatch(fetchWeeklyTasks());
    }
  };

  useEffect(() => {
    if (important) {
      setIsImportant(important);
    }
  }, [important]);

  return (
    <Box>
      <Checkbox
        {...label}
        icon={<StarBorderOutlinedIcon fontSize="small" />}
        checkedIcon={<StarIcon fontSize="small" />}
        checked={isImportant}
        onChange={() => handleChange(id, collectionName)}
        sx={{
          color: "#1976d2",
        }}
      />
    </Box>
  );
};

export default ImportantCheckbox;
