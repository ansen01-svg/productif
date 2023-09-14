import { Box } from "@mui/material";
import { generateHrs } from "../../utils/utils_functions";
import DateTimeHolder from "./date_time_holder";

const DueTime = ({
  fromHrsValue,
  fromMinsValue,
  toHrsValue,
  toMinsValue,
  handleFromHrsChange,
  handleFromMinChange,
  handleToHrsChange,
  handleToMinsChange,
}) => {
  return (
    <Box sx={{ width: "100%", padding: "10px" }}>
      <DateTimeHolder
        id="time"
        title="Start from (time)"
        options1={generateHrs(24)}
        options2={generateHrs(60)}
        hrsValue={fromHrsValue}
        minsValue={fromMinsValue}
        handleHrsChange={handleFromHrsChange}
        handleMinsChange={handleFromMinChange}
      />
      <DateTimeHolder
        id="time"
        title="End (time)"
        options1={generateHrs(24)}
        options2={generateHrs(60)}
        hrsValue={toHrsValue}
        minsValue={toMinsValue}
        handleHrsChange={handleToHrsChange}
        handleMinsChange={handleToMinsChange}
      />
    </Box>
  );
};

export default DueTime;
