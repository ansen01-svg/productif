import { Box } from "@mui/material";
import TextHolder from "../../components/text_holder";
import DateTimeInputHolder from "./date_time_input_holder";

const DateTimeHolder = ({
  id,
  title,
  dateOptions,
  options1,
  options2,
  hrsValue,
  minsValue,
  handleHrsChange,
  handleMinsChange,
}) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Box
        component="span"
        sx={{ width: "100%", display: "flex", padding: "0 8px" }}
      >
        <TextHolder variant="p" fontSize="0.8rem">
          {title}
        </TextHolder>
      </Box>
      <DateTimeInputHolder
        id={id}
        dateOptions={dateOptions}
        options1={options1}
        options2={options2}
        hrsValue={hrsValue}
        minsValue={minsValue}
        handleHrsChange={handleHrsChange}
        handleMinsChange={handleMinsChange}
      />
    </Box>
  );
};

export default DateTimeHolder;
