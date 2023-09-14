import { Box } from "@mui/material";
import Content from "./button_box_content";

const ButtonBox = ({
  task,
  handleFromHrsChange,
  handleFromMinChange,
  handleToHrsChange,
  handleToMinsChange,
  fromHrsValue,
  fromMinsValue,
  toHrsValue,
  toMinsValue,
}) => {
  return (
    <Box
      flexGrow={1}
      sx={{
        height: "45px",
        padding: "0 10px",
        display: "flex",
        backgroundColor: "buttonBox.main",
        color: "buttonBox.contrastText",
        // transition: "height 500ms cubic-bezier(0.25, 0.1, 0.25, 1) 0s",
      }}
    >
      <Content
        task={task}
        fromHrsValue={fromHrsValue}
        fromMinsValue={fromMinsValue}
        toHrsValue={toHrsValue}
        toMinsValue={toMinsValue}
        handleFromHrsChange={handleFromHrsChange}
        handleFromMinChange={handleFromMinChange}
        handleToHrsChange={handleToHrsChange}
        handleToMinsChange={handleToMinsChange}
      />
    </Box>
  );
};

export default ButtonBox;
