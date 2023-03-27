import logo from './logo.svg';
import './App.css';
import Contador from './Contador/Contador';
import Mega from './Megasena/Mega';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Contador />
       <Mega />
      </header>
    </div>
  );
}

export default App;
