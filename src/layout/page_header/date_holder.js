import { Box } from "@mui/material";
import TextHolder from "../../components/text_holder";
import { getCurrentDate, getLocation } from "../../utils/utils_functions";

const DateHolder = () => {
  const { location, page } = getLocation();

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
          "& .MuiSvgIcon-root": {
            color: "primary.main",
          },
        }}
      >
        {page.icon}
        <TextHolder variant="h2" color="primary.main">
          {location}
        </TextHolder>
      </Box>
      {location === "My Day" && (
        <TextHolder variant="p" fontSize="0.75rem">
          {getCurrentDate()}
        </TextHolder>
      )}
    </Box>
  );
};

export default DateHolder;
