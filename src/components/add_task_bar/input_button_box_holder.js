import { Box, Divider } from "@mui/material";
import InputBox from "./input_box";
import ButtonBox from "./button_box";

const InputAndButtonBoxHolder = ({ showInputBox }) => {
  return (
    <Box
      sx={{
        width: "100%",
        boxShadow:
          "0px 0.3px 0.9px rgba(0,0,0,0.1),0px 1.6px 3.6px rgba(0,0,0,0.1)",
      }}
    >
      <InputBox />
      <Divider />
      <ButtonBox />
    </Box>
  );
};

export default InputAndButtonBoxHolder;
