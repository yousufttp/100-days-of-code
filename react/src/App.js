import logo from './logo.svg';
import './App.css';
import Slides from './Components/Slides.js';
import {slides} from './Utils/slideconfig';
function App() {
  return (
    <div className="App">
      <Slides slides={slides} current={0}/>
    </div>
  );
}

export default App;
