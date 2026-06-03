import NavMovie from "./components/NavMovies";
import Home from "./components/Home";
import DetailCard from "./components/MovieDetail";
import MovieRomantique from "./components/MovieRomantique";
import MovieHorreur from "./components/MovieHorreur";
import MovieAction from "./components/MovieAction";
import Footer from "./components/Footer"; 
import Dashboard from "./components/Dashboard"; 
import AdminLogin from "./components/AdminLogin";
import { Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import './App.css';
import { MoviesProvider } from "./components/MovieContext";



const App = () => {
  return (
    <MoviesProvider>
      <div className="app">   
        <NavMovie />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies/romantique" element={<MovieRomantique />} />
          <Route path="/movies/horreur" element={<MovieHorreur />} />
          <Route path="/movies/action" element={<MovieAction />} />


<Route path="/admin" element={<AdminLogin />} />

<Route 
  path="/dashboard" 
  element={
    <ProtectedRoute>
      <Dashboard />
    </ProtectedRoute>
  } 
/>

<Route path="/movie/:id" element={<DetailCard />} />
        </Routes>

        <Footer />
      </div>
    </MoviesProvider>
  );
}

export default App;
