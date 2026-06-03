import '../css/MovieCard.css'; 
import {Link} from 'react-router-dom';

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <div 
        className="top-half" 
        style={{ backgroundImage: `url(${movie.image})` }}
      ></div>
      <div 
        className="bottom-half" 
        style={{ backgroundImage: `url(${movie.image})` }}
      ></div>
      <div className="movie-overlay">
        <h3>{movie.title}</h3>
        <p>{movie.description}</p>
        
<Link className='link' to={`/movie/${movie.id}`}>            Voir plus
          </Link>
      
      </div>
    </div>
  );
};

export default MovieCard;
