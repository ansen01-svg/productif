import { Box } from "@mui/material";
import { useGetLocation } from "../../hooks";
import PopOver from "./popover";

const Content = ({
  task,
  handleFromHrsChange,
  handleFromMinChange,
  handleToHrsChange,
  handleToMinsChange,
  fromHrsValue,
  fromMinsValue,
  toHrsValue,
  toMinsValue,
  startDate,
  endDate,
  setStartDate,
  setEndDate,
  component1,
  component2,
  component3,
  handleClose,
  id,
  open,
  anchorEl,
}) => {
  const { pageLocation } = useGetLocation();

  const isMyWeekPage = pageLocation === "My Week";
  const isMyDayPage = pageLocation === "My Day";

  return (
    <Box
      flexGrow={1}
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      {isMyWeekPage && component1}
      {isMyDayPage && component2}
      {component3 && component3}
      {isMyWeekPage && (
        <PopOver
          name="week"
          popoverTitle="Due date"
          handleClose={handleClose}
          id={id}
          open={open}
          anchorEl={anchorEl}
          startDate={startDate}
          endDate={endDate}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
        />
      )}
      {isMyDayPage && (
        <PopOver
          name="day"
          popoverTitle="Due time"
          handleClose={handleClose}
          id={id}
          open={open}
          anchorEl={anchorEl}
          fromHrsValue={fromHrsValue}
          fromMinsValue={fromMinsValue}
          toHrsValue={toHrsValue}
          toMinsValue={toMinsValue}
          handleFromHrsChange={handleFromHrsChange}
          handleFromMinChange={handleFromMinChange}
          handleToHrsChange={handleToHrsChange}
          handleToMinsChange={handleToMinsChange}
        />
      )}
    </Box>
  );
};

export default Content;
