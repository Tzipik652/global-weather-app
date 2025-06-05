import React from 'react';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import WhatshotIcon from '@mui/icons-material/Whatshot';

type WeatherType = 'cold' | 'mild' | 'hot';

interface WeatherIconProps {
  weatherType: WeatherType;
  size?: number; // px
}

const WeatherIcon: React.FC<WeatherIconProps> = ({ weatherType, size = 40 }) => {
  const styles = {
    cold: { color: '#2196f3' },   
    mild: { color: '#fbc02d' }, 
    hot: { color: '#f44336' },  
  };

  const iconProps = {
    sx: { fontSize: size, ...styles[weatherType] },
  };

  switch (weatherType) {
    case 'cold':
      return <AcUnitIcon {...iconProps} />;
    case 'mild':
      return <WbSunnyIcon {...iconProps} />;
    case 'hot':
      return <WhatshotIcon {...iconProps} />;
    default:
      return null;
  }
};

export default WeatherIcon;
