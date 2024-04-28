import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import CalculatorApp from '../src/components/CalculatorApp';
 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CalculatorApp></CalculatorApp>
      {/* <Button variant="contained">Hello world</Button> */}
      </header>
    </div>
  );
}

export default App;
