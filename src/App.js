import logo from './logo.svg';
import './App.css';
import flyer from './flyer.jpg'
import trailer from './trailer.mp4'

function App() {
  return (
    <div className="App">
        <img src={flyer} alt="" width="80%"/>
        <video width="80%" controls>
            <source src={trailer} type="video/mp4"/>
        </video>
    </div>
  );
}

export default App;
