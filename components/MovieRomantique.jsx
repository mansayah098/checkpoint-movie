import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import '../css/Romantique.css';

const MovieRomantique = () => {
  const { movies, searchTerm } = useSelector((state) => state.movies);

  const romanticMovies = movies
    .filter(m => m.category === "romantique")
    .filter(m => m.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <Container fluid className="movie-list-container">
      <Row xs={1} md={3} className="g-4">
        {romanticMovies.map((movie) => (
          <Col key={movie.id}>
            <MovieCard movie={movie} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MovieRomantique;
