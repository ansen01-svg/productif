import { Box } from "@mui/material";
import TextHolder from "../.././components/text_holder";
import { logo } from "../../utils/variables";
// import {
//   signInWithGoogle,
//   getRedirect,
// } from "../../firebase/signin_with_google";

const Header = ({ heading }) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "146px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "20px",
      }}
    >
      <HeadingHolder heading={heading} />
      <GoogleSignInHolder />
      <Divider />
    </Box>
  );
};

const HeadingHolder = ({ heading }) => {
  return (
    <Box>
      <TextHolder variant="h1">
        {heading} {logo}
      </TextHolder>
    </Box>
  );
};

const GoogleSignInHolder = () => {
  return (
    <button
      // onClick={getRedirect}
      style={{
        width: "100%",
        height: "54.34px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        border: "1px solid  rgba(57,76,96,.15)",
        borderRadius: "4px",
        outline: "none",
        background: "none",
        fontSize: "15px",
        fontFamily: `-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol`,
        lineHeight: "1.4375em",
        color: "rgba(0, 0, 0, 0.87)",
        cursor: "pointer",
        "&:hover": {
          background: "rgba(57,76,96,.15)",
        },
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        height="24"
        width="24"
      >
        <path
          fill="#4285f4"
          d="M386 400c45-42 65-112 53-179H260v74h102c-4 24-18 44-38 57z"
        ></path>
        <path
          fill="#34a853"
          d="M90 341a192 192 0 0 0 296 59l-62-48c-53 35-141 22-171-60z"
        ></path>
        <path
          fill="#fbbc02"
          d="M153 292c-8-25-8-48 0-73l-63-49c-23 46-30 111 0 171z"
        ></path>
        <path
          fill="#ea4335"
          d="M153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55z"
        ></path>
      </svg>
      <TextHolder variant="p">Continue with Google</TextHolder>
    </button>
  );
};

const Divider = () => {
  return (
    <Box
      sx={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
      }}
    >
      <Box
        component="span"
        sx={{
          flexGrow: 1,
          height: "1px",
          backgroundImage:
            "linear-gradient(90deg, rgba(233, 237, 241, 0) 35%, rgb(161, 165, 190))",
          borderRadius: "2px",
        }}
      ></Box>
      <TextHolder variant="p">OR</TextHolder>
      <Box
        component="span"
        sx={{
          flexGrow: 1,
          height: "1px",
          backgroundImage:
            "linear-gradient(90deg, rgba(233, 237, 241, 0) 35%, rgb(161, 165, 190))",
          transform: "rotate(180deg)",
          borderRadius: "2px",
        }}
      ></Box>
    </Box>
  );
};

export default Header;
