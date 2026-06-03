import { createContext, useState } from "react";

export const MoviesContext = createContext();

export const MoviesProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const addMovie = (movie) => {
    setMovies((prev) => [...prev, movie]);
  };

  return (
    <MoviesContext.Provider value={{ movies, addMovie, searchTerm, setSearchTerm }}>
      {children}
    </MoviesContext.Provider>
  );
};
