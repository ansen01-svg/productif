import { Box } from "@mui/material";
import MainList from "./main_list";
import TextHolder from "../../components/text_holder";
import Divider from "@mui/material/Divider";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useSelector } from "react-redux";

const PopoverContent = () => {
  const { user } = useSelector((state) => state.appReducer);

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
        <TextHolder variant="p">{user && user}</TextHolder>
      </Box>
      <Divider />
      <MainList />
    </>
  );
};

export default PopoverContent;
