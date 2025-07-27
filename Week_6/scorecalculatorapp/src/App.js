import logo from './logo.svg';
import './App.css';
import { CalculateScore } from './components/CalculateScore';

function App() {
  return (
    <div className="App">
     <CalculateScore Name={"Rachita"}
     School={"ABC High School"}
     total={85}
     goal={100}
     />
    </div>
  );
}

export default App;
