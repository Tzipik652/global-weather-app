// WeatherCard.tsx
import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import AcUnitIcon from '@mui/icons-material/Cloud';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import RainIcon from '@mui/icons-material/Grain'; 
import './WeatherCard.scss';
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
}
const weatherType = getWeatherTypeFromTemp(temperature);

  return (
    <Card className="weather-card">
      <CardContent className="weather-card__content">
        <Box className="weather-card__header">
          <Box className="weather-card__location">
            <Typography variant="h4" className="weather-card__city">
              {city}
            </Typography>
            <Typography variant="body1" className="weather-card__season">
              {season}
            </Typography>
          </Box>
          <Box className="weather-card__icon">
            <WeatherIcon weatherType={weatherType} />
          </Box>
        </Box>

        <Box className="weather-card__stats">
          <Box className="weather-card__stat">
            <Typography variant="subtitle1" className="weather-card__label">
              טמפ' נמדדת
            </Typography>
            <Typography variant="h3" className="weather-card__value">
              {temperature}°C
            </Typography>
          </Box>
          
          <Box className="weather-card__stat">
            <Typography variant="subtitle1" className="weather-card__label">
              טמפ' מורגשת
            </Typography>
            <Typography variant="h3" className="weather-card__value">
              {realFeel}°C
            </Typography>
          </Box>
          
          <Box className="weather-card__stat">
            <Typography variant="subtitle1" className="weather-card__label">
              לחות
            </Typography>
            <Typography variant="h3" className="weather-card__value">
              {humidity}%
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;