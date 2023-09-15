import { Box } from "@mui/material";
import TextHolder from "../../components/text_holder";
import Divider from "@mui/material/Divider";
import DueTime from "./due_time";
import DueDate from "./due_date";

const PopoverContent = ({
  name,
  popoverTitle,
  fromHrsValue,
  fromMinsValue,
  toHrsValue,
  toMinsValue,
  handleFromHrsChange,
  handleFromMinChange,
  handleToHrsChange,
  handleToMinsChange,
  startDate,
  endDate,
  setStartDate,
  setEndDate,
}) => {
  return (
    <>
      <Box
        sx={{
          flexGrow: "1",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "10px",
        }}
      >
        <TextHolder variant="p">{popoverTitle}</TextHolder>
      </Box>
      <Divider />
      {name === "day" ? (
        <DueTime
          fromHrsValue={fromHrsValue}
          fromMinsValue={fromMinsValue}
          toHrsValue={toHrsValue}
          toMinsValue={toMinsValue}
          handleFromHrsChange={handleFromHrsChange}
          handleFromMinChange={handleFromMinChange}
          handleToHrsChange={handleToHrsChange}
          handleToMinsChange={handleToMinsChange}
        />
      ) : (
        <DueDate
          startDate={startDate}
          endDate={endDate}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
        />
      )}
    </>
  );
};

export default PopoverContent;
