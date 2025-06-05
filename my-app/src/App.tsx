import './App.css';
import WeatherCard from './components/WeatherCard/WeatherCard';

function App() {
  return (
    <div className="App">
      <WeatherCard city={'אילת'} season={'שמיים בהירים'} humidity={18} realFeel={39} temperature={15}></WeatherCard>
    </div>
  );
}

export default App;
