import { Box } from "@mui/material";
import UserHolder from "./user_holder";
import SearchboxHolder from "./searchbox_holder";
import { useWindowWidth } from "../../hooks";

const SearchAndUserHolder = ({ id, handleClick }) => {
  const { desktopScreen } = useWindowWidth();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
      }}
    >
      {!desktopScreen && <SearchboxHolder />}
      <UserHolder id={id} handleClick={handleClick} />
    </Box>
  );
};

export default SearchAndUserHolder;
