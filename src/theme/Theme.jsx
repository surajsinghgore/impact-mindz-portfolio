// src/App.js

import  { useState, useMemo } from 'react';
import { createTheme, ThemeProvider, CssBaseline, Container, Switch, Typography, Paper } from '@mui/material';

function Theme() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = useMemo(() => 
    createTheme({
      palette: {
        mode: darkMode ? 'dark' : 'light',
        background: {
          default: darkMode ? '#000' : '#fff',
          paper: darkMode ? '#000' : '#fff',
        },
        text: {
          primary: darkMode ? '#fff' : '#000',
        },
      },
    }), 
    [darkMode]
  );

  const handleToggle = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container>
        <Paper style={{ padding: '16px', minHeight: '100vh' }}>
          <Typography variant="h4" gutterBottom>
            {darkMode ? 'Dark Mode' : 'Light Mode'}
          </Typography>
          <Switch checked={darkMode} onChange={handleToggle} />
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default Theme;
