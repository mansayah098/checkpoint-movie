import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  movies: [
  {
    id: 1,
    category: "romantique",
    title: "Titanic",
    description: "Une histoire d'amour tragique à bord du Titanic.",
    image: "https://picsum.photos/300/200?random=101",
    trailerUrl: "https://www.youtube.com/embed/kVrqfYjkTdQ"
  },
  {
    id: 2,
    category: "romantique",
    title: "La La Land",
    description: "Un musicien et une actrice poursuivent leurs rêves à Los Angeles.",
    image: "https://picsum.photos/300/200?random=102",
    trailerUrl: "https://www.youtube.com/embed/0pdq0FzfpKo"
  },
  {
    id: 3,
    category: "romantique",
    title: "The Notebook",
    description: "Un amour intemporel marqué par la passion et la mémoire.",
    image: "https://picsum.photos/300/200?random=103",
    trailerUrl: "https://www.youtube.com/embed/FC6biTjEyZw"
  },
{
    id: 16,
    category: "horreur",
    title: "The Conjuring",
    description: "Une enquête paranormale terrifiante.",
    image: "https://picsum.photos/300/200?random=201",
    trailerUrl: "https://www.youtube.com/embed/k10ETZ41q5o"
  },
  {
    id: 17,
    category: "horreur",
    title: "Insidious",
    description: "Un voyage dans le monde des esprits.",
    image: "https://picsum.photos/300/200?random=202",
    trailerUrl: "https://www.youtube.com/embed/zuZnRUcoWos"
  },
  {
    id: 18,
    category: "horreur",
    title: "It",
    description: "Un clown maléfique terrorise une ville.",
    image: "https://picsum.photos/300/200?random=203",
    trailerUrl: "https://www.youtube.com/embed/xKJmEC5ieOk"
  },

  {
    id: 31,
    category: "action",
    title: "John Wick",
    description: "Un ancien tueur à gages reprend les armes.",
    image: "https://picsum.photos/300/200?random=301",
    trailerUrl: "https://www.youtube.com/embed/2AUmvWm5ZDQ"
  },
  {
    id: 32,
    category: "action",
    title: "Mad Max: Fury Road",
    description: "Un monde post-apocalyptique rempli de poursuites explosives.",
    image: "https://picsum.photos/300/200?random=302",
    trailerUrl: "https://www.youtube.com/embed/hEJnMQG9ev8"
  },
  {
    id: 33,
    category: "action",
    title: "The Dark Knight",
    description: "Batman affronte le Joker dans Gotham.",
    image: "https://picsum.photos/300/200?random=303",
    trailerUrl: "https://www.youtube.com/embed/EXeTwQWrcwY"
  },

  ],
  searchTerm: ""
};

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovie: (state, action) => {
      state.movies.push(action.payload);
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    }
  }
});

export const { addMovie, setSearchTerm } = moviesSlice.actions;
export default moviesSlice.reducer;
