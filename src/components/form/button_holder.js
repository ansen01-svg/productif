import { Box } from "@mui/material";
import Button from "../button/button";

const ButtonHolder = ({ buttonTitle, disable }) => {
  return (
    <Box sx={{ width: "100%" }}>
      <Button
        width="100%"
        height="45px"
        variant="contained"
        type="submit"
        disabled={disable}
      >
        {buttonTitle}
      </Button>
    </Box>
  );
};

export default ButtonHolder;
