import { useState, useContext } from "react";
import { MoviesContext } from "./MovieContext";
import AdminLogin from "./AdminLogin";
import { useNavigate } from "react-router-dom";
import "../css/Dashboard.css";


const Dashboard = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("token")
  );
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");
  const { addMovie } = useContext(MoviesContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    navigate("/admin");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newMovie = {
      id: Date.now(),
      title,
      description,
      image,
      category
    };
    addMovie(newMovie); 
    setTitle("");
    setDescription("");
    setImage("");
    setCategory("");
  };

  if (!isAuthenticated) {
    return <AdminLogin onLogin={() => setIsAuthenticated(true)} />;
  }

  return (
    <div className="dashboard">
      <h2>Bienvenue sur le Dashboard </h2>
      <form onSubmit={handleSubmit} className="movie-form">
        <input type="text" placeholder="Titre du film" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <textarea placeholder="Description du film" value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
        <input type="text" placeholder="URL de l'image" value={image} onChange={(e) => setImage(e.target.value)} required />
        <select value={category} onChange={(e) => setCategory(e.target.value)} required>
          <option value="">Choisir une catégorie</option>
          <option value="romantique">Romantique</option>
          <option value="horreur">Horreur</option>
          <option value="action">Action</option>
        </select>
        <button type="submit">Ajouter le film</button>
      </form>
      <button onClick={handleLogout} className="logout-btn">Se déconnecter</button>
    </div>
  );
};

export default Dashboard;
