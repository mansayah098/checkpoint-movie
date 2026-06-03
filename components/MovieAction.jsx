import { useSelector } from "react-redux";
import MovieCard from "./MovieCard";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const MovieAction = () => {
  const { movies, searchTerm } = useSelector((state) => state.movies);

  const actionMovies = movies
    .filter(m => m.category === "action")
    .filter(m => m.title.toLowerCase().includes(searchTerm.toLowerCase()));

  return (
    <Container className="action-section">
      <Row xs={1} md={3} className="g-4">
        {actionMovies.map((movie) => (
          <Col key={movie.id}>
            <MovieCard movie={movie} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MovieAction;
