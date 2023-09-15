import { Popover } from "@mui/material";
import PopoverContent from "./popover_content";

const PopOver = (props) => {
  const {
    name,
    popoverTitle,
    handleClose,
    anchorEl,
    id,
    open,
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
  } = props;

  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
      sx={{
        "& .MuiPaper-root": {
          minWidth: "200px",
          maxWidth: "290px",
        },
      }}
    >
      <PopoverContent
        name={name}
        popoverTitle={popoverTitle}
        fromHrsValue={fromHrsValue}
        fromMinsValue={fromMinsValue}
        toHrsValue={toHrsValue}
        toMinsValue={toMinsValue}
        handleFromHrsChange={handleFromHrsChange}
        handleFromMinChange={handleFromMinChange}
        handleToHrsChange={handleToHrsChange}
        handleToMinsChange={handleToMinsChange}
        startDate={startDate}
        endDate={endDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
      />
    </Popover>
  );
};

export default PopOver;
