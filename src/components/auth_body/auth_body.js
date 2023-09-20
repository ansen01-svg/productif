import { Box } from "@mui/material";
import SubMain from "./submain";

const AuthBody = (props) => {
  const {
    heading,
    headerText,
    footerText,
    footerLink,
    footerLinkText,
    type,
    autocomplete,
  } = props;

  return (
    <Box
      sx={{
        width: "90vw",
        padding: "40px",
        marginTop: "50px",
        "@media screen and (min-width: 510px)": {
          width: "398px",
          border: "1px solid  rgba(57,76,96,.15)",
          borderRadius: "8px",
          boxShadow:
            "0px 0.3px 0.9px rgba(0,0,0,0.1),0px 1.6px 3.6px rgba(0,0,0,0.1)",
          marginTop: "0",
        },
      }}
    >
      <SubMain
        heading={heading}
        headerText={headerText}
        footerText={footerText}
        footerLink={footerLink}
        footerLinkText={footerLinkText}
        type={type}
        autocomplete={autocomplete}
      />
    </Box>
  );
};

export default AuthBody;
