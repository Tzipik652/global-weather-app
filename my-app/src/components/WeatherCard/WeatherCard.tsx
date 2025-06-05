import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import WeatherIcon from '../WeatherIcon/WeatherIcon';

interface WeatherCardProps {
  city: string;
  season: string;
  humidity: number;
  realFeel: number;
  temperature: number;
}

const WeatherCard: React.FC<WeatherCardProps> = ({
  city,
  season,
  humidity,
  realFeel,
  temperature,
}) => {
  const getWeatherTypeFromTemp = (tempCelsius: number) => {
    if (tempCelsius <= 20) return 'cold';
    if (tempCelsius <= 30) return 'mild';
    return 'hot';
  };

  const weatherCondition = getWeatherTypeFromTemp(temperature);

  return (
    <Card
      sx={{
        width: 365,
        height: 250,
        borderRadius: 3,
        boxShadow: 3,
        bgcolor: '#f8f9fa',
        direction: 'rtl',
      }}
    >
      <CardContent sx={{ p: 3 }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            mb: 4.5,
          }}
        >
          <Box sx={{ textAlign: 'right' }}>
            <Typography variant="h5" fontWeight="bold" color="text.primary">
              {city}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {season}
            </Typography>
          </Box>

          <Box sx={{ fontSize: 40 }}>
            <WeatherIcon weatherType={weatherCondition} />
          </Box>
        </Box>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: 2,
            mt: 6.5,
          }}
        >
          <Box sx={{ textAlign: 'center', flex: 1 }}>
            <Typography variant="body2" color="text.secondary">
              טמפ' נמדדת
            </Typography>
            <Typography variant="h5">
              {temperature}°C
            </Typography>
          </Box>

          <Box sx={{ textAlign: 'center', flex: 1 }}>
            <Typography variant="body2" color="text.secondary">
              טמפ' מורגשת
            </Typography>
            <Typography variant="h5">
              {realFeel}°C
            </Typography>
          </Box>

          <Box sx={{ textAlign: 'center', flex: 1 }}>
            <Typography variant="body2" color="text.secondary">
              לחות
            </Typography>
            <Typography variant="h5">
              {humidity}%
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
