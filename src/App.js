import logo from './logo.svg';
import './App.css';
import Watch from "./Components/Watch/Watch.jsx";
import AnimatedPhrase from './Components/AnimatedPhrase/AnimatedPhrase.jsx';

function App() {
  return (
    <>
      <Watch />
      <AnimatedPhrase phrase={"Olá Mundo!"} />
    </>
  );
}

export default App;
