import { Box } from "@mui/material";
import { useState } from "react";
import LabelBox from "./label_box";
import InputAndButtonBoxHolder from "./input_button_box_holder";

const AddTaskBar = () => {
  const [showInputBox, setShowInputBox] = useState(false);

  const handlePlusButtonClick = () => {
    setShowInputBox(true);
  };

  return (
    <Box
      sx={{
        width: "100%",
        padding: "0 24px",
      }}
    >
      {showInputBox ? (
        <InputAndButtonBoxHolder setShowInputBox={setShowInputBox} />
      ) : (
        <LabelBox handlePlusButtonClick={handlePlusButtonClick} />
      )}
    </Box>
  );
};

export default AddTaskBar;
