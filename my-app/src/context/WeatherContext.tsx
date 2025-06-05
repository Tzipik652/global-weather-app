import React, {
  createContext,
  useEffect,
  useState,
  useContext,
  ReactNode,
} from 'react';
import { WeatherCardType } from '../models/WeatherCard';

type ContextType = {
  weatherData: WeatherCardType[];
};

export const WeatherContext = createContext<ContextType>({
  weatherData: [],
});

const cities = [
  { name: 'אילת', query: 'Eilat,IL' },
  { name: 'לונדון', query: 'London,GB' },
  { name: 'ניו יורק', query: 'New York,US' },
  { name: 'אלסקה', query: 'Alaska,US' },
];

const API_KEY = '8ee633956bad6ae1965b557a94ecfcba';

export const WeatherProvider = ({ children }: { children: ReactNode }) => {
  const [weatherData, setWeatherData] = useState<WeatherCardType[]>([]);

  useEffect(() => {
    const fetchWeather = async () => {
      const results = await Promise.all(
        cities.map(async (city) => {
          const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city.query}&units=metric&lang=he&appid=${API_KEY}`
          );
          const data = await res.json();
          return {
            city: city.name,
            season: data.weather[0].description,
            humidity: data.main.humidity,
            realFeel: Math.round(data.main.feels_like),
            temperature: Math.round(data.main.temp),
          };
        })
      );
      setWeatherData(results);
    };

    fetchWeather();
  }, []);

  return (
    <WeatherContext.Provider value={{ weatherData}}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeather = () => useContext(WeatherContext);
