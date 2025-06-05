import React, { useContext } from "react";
import { WeatherProvider, WeatherContext } from "./context/WeatherContext";
import "./App.scss";
import { Box, Typography } from "@mui/material";
import WeatherList from "./components/WeatherList/WeatherList";

const App = () => {
  return (
    <WeatherProvider>
      <Box sx={{ bgcolor: "#e0f7fa", minHeight: "100vh", pb: 6 }}>
        <Box
          sx={{ bgcolor: "white", py: 3, textAlign: "center", boxShadow: 1 }}
        >
          <Typography variant="h4" fontWeight="bold" color="primary">
            תחזית מסביב לעולם
          </Typography>
        </Box>

        <WeatherList />
      </Box>
    </WeatherProvider>
  );
};

export default App;
