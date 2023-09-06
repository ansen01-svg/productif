import { Container } from "@mui/material";
import {
  loginHeading,
  loginFooterText,
  loginFooterLink,
  loginFooterLinkText,
} from "../.././utils/variables";
import AuthBody from "../../components/auth_body";

const LoginPage = () => {
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
        heading={loginHeading}
        footerText={loginFooterText}
        footerLink={loginFooterLink}
        footerLinkText={loginFooterLinkText}
        fields="2"
      />
    </Container>
  );
};

export default LoginPage;
