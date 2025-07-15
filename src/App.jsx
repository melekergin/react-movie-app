
import './css/App.css';
import Home from './Pages/Home';
import { Routes,Route } from 'react-router-dom';
import MovieProvider from './contexts/MovieContext';
import Favourites from './Pages/Favourites' ;
import NavBar from './components/NavBar';

function App() {
  

  return (
    <MovieProvider>
      <NavBar />
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourites" element={<Favourites />}/>
      </Routes>
    </main>
    </MovieProvider>
  );
}

export default App
