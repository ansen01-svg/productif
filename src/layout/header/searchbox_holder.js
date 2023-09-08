import { Box } from "@mui/material";
import { useState } from "react";
import Button from "../../components/button";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";

const SearchboxHolder = () => {
  return (
    <Box
      sx={{
        flex: 1,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Button
        role="search"
        variant="contained"
        bgColor="#fff"
        size="small"
        borderTopRightRadius="0px"
        borderBottomRightRadius="0px"
        boxShadow="none"
        minWidth="40px"
        hoverColor="#fff"
        hoverShadow="none"
      >
        <SearchSharpIcon fontSize="medium" sx={{ color: "#000" }} />
      </Button>
      <Box
        sx={{
          flex: 1,
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
          style={{
            flex: 1,
            border: "none",
            outline: "none",
          }}
        />
        <Button
          variant="contained"
          borderTopLeftRadius="0px"
          borderBottomLeftRadius="0px"
          bgColor="#fff"
          size="small"
          boxShadow="none"
          minWidth="40px"
          hoverColor="#fff"
          hoverShadow="none"
        >
          <CloseSharpIcon fontSize="small" sx={{ color: "gray" }} />
        </Button>
      </Box>
    </Box>
  );
};

export default SearchboxHolder;
