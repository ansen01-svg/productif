import { Box } from "@mui/material";
import DateTimeHolder from "./date_time_holder";
import { generateWeek } from "../../utils/utils_functions";

const DueDate = (props) => {
  const { startDate, endDate, setStartDate, setEndDate } = props;

  return (
    <Box sx={{ width: "100%", padding: "10px" }}>
      <DateTimeHolder
        id="date"
        title="Start from (Date)"
        dateOptions={generateWeek()}
        date={startDate}
        setDate={setStartDate}
      />
      <DateTimeHolder
        id="date"
        title="End (Date)"
        dateOptions={generateWeek()}
        date={endDate}
        setDate={setEndDate}
      />
    </Box>
  );
};

export default DueDate;
