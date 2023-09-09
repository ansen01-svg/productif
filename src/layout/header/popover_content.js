import { Box } from "@mui/material";
import MainList from "./main_list";
import TextHolder from "../../components/text_holder";
import Divider from "@mui/material/Divider";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

const PopoverContent = () => {
  return (
    <>
      <Box
        sx={{
          flexGrow: "1",
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
          gap: "25px",
          padding: "15px",
        }}
      >
        <AccountCircleOutlinedIcon fontSize="large" />
        <TextHolder variant="p">Ansen</TextHolder>
      </Box>
      <Divider />
      <MainList />
    </>
  );
};

export default PopoverContent;
