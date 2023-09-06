import { Box } from "@mui/material";
import SubMain from "./submain";

const AuthBody = (props) => {
  const { heading, headerText, footerText, footerLink, footerLinkText, type } =
    props;

  return (
    <Box
      sx={{
        width: "80%",
        height: "500px",
        padding: "40px",
        border: "1px solid  rgba(57,76,96,.15)",
        borderRadius: "8px",
        "@media screen and (min-width: 500px)": {
          width: "398px",
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
      />
    </Box>
  );
};

export default AuthBody;
