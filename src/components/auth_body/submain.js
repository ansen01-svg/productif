import { Box } from "@mui/material";
import Header from "./header";
import FormHolder from "./form_holder";
import Footer from "./footer";

const SubMain = (props) => {
  const {
    heading,
    headerText,
    footerText,
    footerLink,
    footerLinkText,
    fields,
  } = props;

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
      }}
    >
      <Header heading={heading} headerText={headerText} />
      <FormHolder fields={fields} />
      <Footer
        footerText={footerText}
        footerLink={footerLink}
        footerLinkText={footerLinkText}
      />
    </Box>
  );
};

export default SubMain;
