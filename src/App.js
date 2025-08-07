import './App.css';
import LunchChooser from './components/LunchChooser.component.js';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Lunch-Time
        </h1>
        <p>
            <span className="italPopText">The </span>
            <span className="boldPopText">premium </span>
            <span className="italPopText">lunch choice optimization tool!</span>
        </p>
      </header>
      <LunchChooser />
    </div>
  );
}

export default App;
