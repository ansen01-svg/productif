import { Container } from "@mui/material";
import AuthBody from "../.././components/auth_body";
import {
  registerHeading,
  registerFooterText,
  registerFooterLink,
  registerFooterLinkText,
} from "../.././utils/variables";

const Register = () => {
  return (
    <Container
      sx={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <AuthBody
        heading={registerHeading}
        footerText={registerFooterText}
        footerLink={registerFooterLink}
        footerLinkText={registerFooterLinkText}
        type="register"
        autocomplete="new-password"
      />
    </Container>
  );
};

export default Register;
