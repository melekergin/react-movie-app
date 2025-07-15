import { createContext, useState, useContext, useEffect } from "react";

// Create the context
const MovieContext = createContext();

// Custom hook for easy access
export const useMovieContext = () => useContext(MovieContext);

// Provider component
export const MovieProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  // Load favourites from localStorage on mount
  useEffect(() => {
    const storedFavs = localStorage.getItem("favourites");
    if (storedFavs) {
      setFavourites(JSON.parse(storedFavs));
    }
  }, []);

  // Save favourites to localStorage on change
  useEffect(() => {
    localStorage.setItem("favourites", JSON.stringify(favourites));
  }, [favourites]);

  // Add movie to favourites
  const addToFavourites = (movie) => {
    setFavourites((prev) => [...prev, movie]);
  };

  // Remove movie by ID
  const removeFromFavourites = (movieId) => {
    setFavourites((prev) => prev.filter((movie) => movie.id !== movieId));
  };

  // Check if a movie is favourited
  const isFavourite = (movieId) => {
    return favourites.some((movie) => movie.id === movieId);
  };

  const value = {
    favourites,
    addToFavourites,
    removeFromFavourites,
    isFavourite,
  };

  return (
    <MovieContext.Provider value={value}>
      {children}
    </MovieContext.Provider>
  );
};
export default MovieProvider;