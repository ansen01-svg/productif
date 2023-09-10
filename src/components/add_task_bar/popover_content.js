import { Box } from "@mui/material";
import TextHolder from "../../components/text_holder";
import Divider from "@mui/material/Divider";

const PopoverContent = ({ handleClose }) => {
  return (
    <>
      <Box
        sx={{
          flexGrow: "1",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "10px",
        }}
      >
        <TextHolder variant="p">Due</TextHolder>
      </Box>
      <Divider />
    </>
  );
};

export default PopoverContent;
