import './App.css';
import SearchContainer from './Components/Search/Search';
import WeatherContainer from './Components/Weather/Weather';

function App() {
  return (
    <div className="App">
      <SearchContainer />
      <WeatherContainer />
      <footer className='Footer'></footer>
    </div>
  );
}

export default App;
