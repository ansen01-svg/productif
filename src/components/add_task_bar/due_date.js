import { Box } from "@mui/material";
import DateTimeHolder from "./date_time_holder";
import { mockedDate } from "../../utils/arrays";
import { generateWeek } from "../../utils/utils_functions";

const DueDate = () => {
  return (
    <Box sx={{ width: "100%", padding: "10px" }}>
      <DateTimeHolder
        id="date"
        title="Start from (Date)"
        dateOptions={generateWeek()}
        // hrsValue={fromHrsValue}
        // minsValue={fromMinsValue}
        // handleHrsChange={handleFromHrsChange}
        // handleMinsChange={handleFromMinChange}
      />
      <DateTimeHolder
        id="date"
        title="End (Date)"
        dateOptions={generateWeek()}
        // hrsValue={toHrsValue}
        // minsValue={toMinsValue}
        // handleHrsChange={handleToHrsChange}
        // handleMinsChange={handleToMinsChange}
      />
    </Box>
  );
};

export default DueDate;
