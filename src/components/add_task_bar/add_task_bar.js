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
        zIndex: 100,
        padding: "0 24px",
        // boxShadow:
        //   "0px 0.3px 0.9px rgba(0,0,0,0.1),0px 1.6px 3.6px rgba(0,0,0,0.1)",
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
