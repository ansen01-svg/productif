import { Box } from "@mui/material";
import Button from "../../components/button";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";

const SearchInputHolder = (props, ref) => {
  const { searchValue, handleInputValueChange, handleCloseButtonClick } = props;

  return (
    <Box
      sx={{
        height: "30.28px",
        position: "relative",
        display: "flex",
      }}
    >
      <label
        htmlFor="search"
        style={{ position: "absolute", top: "5px", left: "15px" }}
      ></label>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search"
        value={searchValue}
        autoComplete="on"
        onChange={handleInputValueChange}
        style={{
          width: "25vw",
          border: "none",
          outline: "none",
        }}
      />
      <Button
        variant="contained"
        borderRadius="0"
        bgColor="searchInputColor.main"
        size="small"
        boxShadow="none"
        minWidth="40px"
        hoverColor="searchInputColor.buttonHover"
        hoverShadow="none"
        onClick={handleCloseButtonClick}
      >
        <CloseSharpIcon
          fontSize="small"
          sx={{ color: "searchInputColor.contrastText" }}
        />
      </Button>
    </Box>
  );
};

export default SearchInputHolder;
