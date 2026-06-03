import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Container from 'react-bootstrap/Container';
import '../css/Home.css';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';



const Home = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Container fluid className="custom-carousel">
      <Carousel activeIndex={index} onSelect={handleSelect}>
  <Carousel.Item>
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/2AUmvWm5ZDQ"
          title="John Wick Trailer"
          frameBorder="0"
          allowFullScreen
        ></iframe>
        <Carousel.Caption>
          <h5>John Wick</h5>
          <p>Un film d'action explosif !</p>
          <Link to="/movies/action">
            <Button className='btnHome'>Voir plus de films d'action</Button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>
 <Carousel.Item>
        <iframe
          width="100%"
          height="400"
          src="https://www.youtube.com/embed/5PSNL1qE6VY"
          title="Romantic Movie Trailer"
          frameBorder="0"
          allowFullScreen
        ></iframe>
        <Carousel.Caption>
          <h5>Film Romantique</h5>
          <p>Une histoire d’amour inoubliable.</p>
          <Link to="/movies/romantique">
            <Button className='btnHome'>Voir plus de films romantiques</Button>
          </Link>
        </Carousel.Caption>
      </Carousel.Item>

<Carousel.Item>
  <iframe
    width="100%"
    height="400"
    src="https://www.youtube.com/embed/k10ETZ41q5o" 
    title="The Conjuring Trailer"
    frameBorder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
  <Carousel.Caption>
    <h5>Film d'Horreur</h5>
    <p>Frissons garantis…</p>
    <Link to="/movies/horreur">
      <Button className='btnHome'>Voir plus de films d'horreur</Button>
    </Link>
  </Carousel.Caption>
</Carousel.Item>


    </Carousel>
    </Container>
  );
};

export default Home;
