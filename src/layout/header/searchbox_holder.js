import { useState } from "react";
import { Box } from "@mui/material";
import Button from "../../components/button";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import { useWindowWidth } from "../../hooks";
import SearchInputHolder from "./search_input_holder.";

const SearchboxHolder = () => {
  const [searchValue, setSearchValue] = useState("");
  const [showSearchBox, setShowSearchBox] = useState(false);

  const { desktopScreen } = useWindowWidth();

  const handleSearchButtonClick = () => {
    if (desktopScreen) return;
    setShowSearchBox(true);
  };

  const handleCloseButtonClick = () => {
    if (!searchValue) {
      setShowSearchBox(false);
    } else {
      setSearchValue("");
    }
  };

  const handleInputValueChange = (e) => {
    setSearchValue(e.target.value);
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Button
        role="search"
        variant="contained"
        bgColor="searchInputColor.main"
        size="small"
        borderRadius="0"
        boxShadow="none"
        minWidth="40px"
        hoverColor="searchInputColor.buttonHover"
        hoverShadow="none"
        height="30.28px"
        onClick={handleSearchButtonClick}
      >
        <SearchSharpIcon
          fontSize="medium"
          sx={{ color: "searchInputColor.contrastText" }}
        />
      </Button>
      {(desktopScreen || showSearchBox) && (
        <SearchInputHolder
          searchValue={searchValue}
          handleInputValueChange={handleInputValueChange}
          handleCloseButtonClick={handleCloseButtonClick}
        />
      )}
    </Box>
  );
};

export default SearchboxHolder;
