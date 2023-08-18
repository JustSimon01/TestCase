import "./fonts/fonts.css";
import './App.css';
import './components/main-section/MainSection'
import MainSection from './components/main-section/MainSection';
import Header from './components/header/header';
import CharacterSection from "./components/character-section/CharacterSection";
import NewsPage from "./components/news-section/NewsSection";

function App() {
  return (
    <div className="App">
      <Header />
      <MainSection />
      <CharacterSection />
      <NewsPage />
    </div>
  );
}

export default App;
