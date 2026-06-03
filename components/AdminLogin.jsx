import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../css/AdminLogin.css";


const AdminLogin = ({ onLogin }) => {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const adminPassword = "123";

    if (password === adminPassword) {
      localStorage.setItem("token", "adminToken");
      if (onLogin) onLogin();
      navigate("/dashboard");
    } else {
      setError("Mot de passe incorrect ❌");
    }
  };


  return (
    <div className="admin-login">
      <h2>Connexion Admin</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="Mot de passe"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Se connecter</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
};

export default AdminLogin;
