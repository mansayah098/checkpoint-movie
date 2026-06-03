import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import '../css/Horror.css';

const MovieHorreur = () => {
  const { movies, searchTerm } = useSelector((state) => state.movies);

  const horrorMovies = movies
    .filter(m => m.category === "horreur")
    .filter(m => m.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <Container className="horror-section">
      <Row xs={1} md={3} className="g-4">
        {horrorMovies.map((movie) => (
          <Col key={movie.id}>
            <MovieCard movie={movie} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MovieHorreur;
