import { useEffect, useState } from "react";
import { Box } from "@mui/material";
import moment from "moment";
import TextHolder from "../../components/text_holder";
import { navigationItems } from "../../utils/arrays";
import { getFromSessionStorage } from "../../utils/utils_functions";

const DateHolder = () => {
  const [pageTitle, setTitle] = useState(getFromSessionStorage("currentPage"));

  // const getPageIcon = () => {
  //   const icon = navigationItems.find((item) => item.title === pageTitle);
  //   return icon.icon;
  // };
  // const pageIcon = getPageIcon();
  // console.log(pageIcon);
  const getCurrentDate = () => {
    let date = moment().format("dddd MMMM Do");

    const day = date.slice(0, 9);
    const monthAndDate = date.slice(9, -2);
    date = `${day}, ${monthAndDate}`;

    return date;
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "center",
        gap: "5px",
      }}
    >
      <Box
        component="span"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        <TextHolder variant="h2">{pageTitle}</TextHolder>
      </Box>
      {pageTitle === "My Day" && (
        <TextHolder variant="p" fontSize="0.8rem">
          {getCurrentDate()}
        </TextHolder>
      )}
    </Box>
  );
};

export default DateHolder;
