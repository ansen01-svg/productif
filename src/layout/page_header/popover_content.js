import { Box } from "@mui/material";
import MainList from "./main_list";
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
        <TextHolder variant="p">Sort by</TextHolder>
      </Box>
      <Divider />
      <MainList handleClose={handleClose} />
    </>
  );
};

export default PopoverContent;
