import React from 'react';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import CloudIcon from '@mui/icons-material/Cloud';
type WeatherType = 'cold' | 'mild' | 'hot';

interface WeatherIconProps {
  weatherType: WeatherType;
  size?: number; // px
}

const WeatherIcon: React.FC<WeatherIconProps> = ({ weatherType, size = 40 }) => {
  const styles = {
    cold: { color: '#2196f3' },   
    mild: { color: '#2196f3' }, 
    hot: { color: '#fbc02d' },  
  };

  const iconProps = {
    sx: { fontSize: size, ...styles[weatherType] },
  };

  switch (weatherType) {
    case 'cold':
      return <AcUnitIcon {...iconProps} />;
    case 'mild':
      return <CloudIcon {...iconProps} />;
    case 'hot':
      return <WbSunnyIcon {...iconProps} />;
    default:
      return null;
  }
};

export default WeatherIcon;
