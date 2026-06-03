import { useParams } from "react-router-dom";
import { useContext, useState } from "react";
import { MoviesContext } from "./MovieContext";
import "../css/MovieDetail.css";

const DetailCard = () => {
  const { id } = useParams();
  const { movies } = useContext(MoviesContext);
  const [hover, setHover] = useState(false);


  const movie = movies.find(m => m.id.toString() === id);

  if (!movie) {
    return <p>Film introuvable </p>;
  }

  return (
    <div 
      className="detail-card"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="detail-text">
        <h2>{movie.title}</h2>
        <p>{movie.description}</p>
      </div>

      <div className="detail-trailer">
        <iframe
          src={
            hover 
              ? `${movie.trailerUrl}?autoplay=1` 
              : movie.trailerUrl
          }
          title={movie.title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default DetailCard;
