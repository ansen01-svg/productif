import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { useTheme } from "../hooks";
import lightPalette from "./light";

const AppThemeProvider = (props) => {
  const theme = useTheme(props.palette ? props.palette : lightPalette);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {props.children}
    </ThemeProvider>
  );
};

export default AppThemeProvider;
