import Box from "@mui/material/Box";
import NavList from "./navlist";

const Content = (props) => {
  const { toggleMobileTaskSidebar } = props;

  return (
    <Box
      sx={{ width: 200, padding: "24px 0" }}
      role="presentation"
      onClick={toggleMobileTaskSidebar(false)}
      onKeyDown={toggleMobileTaskSidebar(false)}
    >
      <NavList />
    </Box>
  );
};

export default Content;
