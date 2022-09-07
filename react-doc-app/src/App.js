import './App.css';
import { Calculator } from './calculator/Calculator';
import { DangerButton } from './partiallyApply';
import { Button } from './partiallyApply';

function App() {
  return (
    <div className="App">
      <Calculator />
      <Button backgroundColor="green" />
      <DangerButton />
    </div>
  );
}

export default App;
