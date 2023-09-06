import { Box } from "@mui/material";
import TextHolder from "../.././components/text_holder";
import { Link } from "react-router-dom";

const Footer = (props) => {
  const { footerText, footerLink, footerLinkText } = props;

  return (
    <Box
      sx={{
        width: "100%",
        height: "12%",
        textAlign: "center",
      }}
    >
      <TextHolder variant="p" fontSize="0.8rem">
        {footerText} &nbsp;
        <Link to={footerLink}>{footerLinkText}</Link>
      </TextHolder>
    </Box>
  );
};

export default Footer;
