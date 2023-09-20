import { Box } from "@mui/material";
import TextHolder from "../.././components/text_holder";
import { Link } from "react-router-dom";

const Footer = (props) => {
  const { footerText, footerLink, footerLinkText } = props;

  return (
    <Box
      sx={{
        width: "100%",
        height: "60px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "10px",
      }}
    >
      <TextHolder variant="p" fontSize="0.8rem">
        {footerText} &nbsp;
        <Link to={footerLink}>{footerLinkText}</Link>
      </TextHolder>
      <TextHolder variant="p" fontSize="0.8rem">
        Forgot your password? &nbsp;
        <Link to={footerLink}>Reset it</Link>
      </TextHolder>
    </Box>
  );
};

export default Footer;
