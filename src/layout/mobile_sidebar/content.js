import Box from "@mui/material/Box";
import NavList from "./navlist";

const Content = (props) => {
  const { toggleMobileSidebar } = props;

  return (
    <Box
      sx={{ width: 200, padding: "40px 0" }}
      role="presentation"
      onClick={toggleMobileSidebar(false)}
      onKeyDown={toggleMobileSidebar(false)}
    >
      <NavList />
    </Box>
  );
};

export default Content;
