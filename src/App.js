import { Routes, Route} from "react-router-dom";
import Home from './components/Home';
import NewsFeed from './components/NewsFeed';
import AppBarHeader from './components/AppBar';

function App() {
  return (
    <div className="App">
      <AppBarHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/news/:searchKey" element={<NewsFeed />} />
      </Routes>
    </div>
  );
}

export default App;
