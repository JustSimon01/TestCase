import "./fonts/fonts.css";
import './App.css';
import './components/main-section/MainSection'
import MainSection from './components/main-section/MainSection';
import Header from './components/header/header';
import CharacterSection from "./components/character-section/CharacterSection";

function App() {
  return (
    <div className="App">
      <Header />
      <MainSection />
      <CharacterSection />
    </div>
  );
}

export default App;
