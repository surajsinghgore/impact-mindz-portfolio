import { useSelector } from "react-redux";
import { useMemo } from "react";
import {
  createTheme,
  ThemeProvider,
  CssBaseline,
  Container,
} from "@mui/material";
import Header from "../components/Header/Header";

function MainPageLayout({ children }) {
  const darkMode = useSelector((state) => state.darkMode.darkMode);
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: darkMode ? "dark" : "light",
          background: {
            default: darkMode ? "#000" : "#fff",
            paper: darkMode ? "#000" : "#fff",
          },
          text: {
            primary: darkMode ? "#fff" : "#000",
          },
        },
      }),
    [darkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <CssBaseline />
      <Container>{children}</Container>
    </ThemeProvider>
  );
}

export default MainPageLayout;
