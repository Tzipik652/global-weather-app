// src/components/WeatherList/WeatherList.tsx
import React, { useContext } from "react";
import { Box, Grid, Typography } from "@mui/material";
import WeatherCard from "../WeatherCard/WeatherCard";
import { WeatherCardModel } from "../../models/WeatherCard";
import { useWeather } from "../../context/WeatherContext";

const WeatherList: React.FC = () => {
  const { weatherData } = useWeather();

  if (weatherData.length === 0) {
    return <Typography align="center">טוען נתונים...</Typography>;
  }

  return (
    <Box sx={{ p: 4 }}>
      <Grid container spacing={4} justifyContent="center">
        {weatherData.map((item: WeatherCardModel, index: number) => (
          <Box key={index}sx={{ px: 6, py: 4 }}>
            <WeatherCard
              city={item.city}
              season={item.season}
              humidity={item.humidity}
              realFeel={item.realFeel}
              temperature={item.temperature}
            />
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default WeatherList;
