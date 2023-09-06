import { Box } from "@mui/material";
import TextHolder from "../.././components/text_holder";
import logoImg from "../../assets/icon.png";
import { logo } from "../../utils/variables";

const Header = ({ heading }) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "18%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "space-between",
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
        <Box sx={{ width: "25px", height: "25px" }}>
          <img
            src={logoImg}
            alt="logo"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "center",
            }}
          />
        </Box>
        <TextHolder variant="h1" color="gray">
          {logo}
        </TextHolder>
      </Box>
      <TextHolder variant="h1">{heading}</TextHolder>
    </Box>
  );
};

export default Header;
