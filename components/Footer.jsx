import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import '../css/Footer.css';

const Footer = () => {
  return (
    <footer className="custom-footer">
      <Container>
        <Row>
          <Col md={4}>
 <img
  src="/images/logoMovie.png"
  alt="Logo "
  width="90"
  height="90"
  className="d-inline-block align-top"
/>            <p>
              Découvrez les meilleurs films, séries et documentaires.
              Votre univers cinématographique en un seul endroit.
            </p>
          </Col>
          <Col md={4}>
            <h5>Navigation</h5>
            <ul className="footer-links">
              <li><a href="/movies">Films</a></li>
              <li><a href="/series">Séries</a></li>
              <li><a href="/about">À propos</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Suivez-nous</h5>
            <div className="social-icons">
              <a href="#"><FaFacebook /></a>
              <a href="#"><FaInstagram /></a>
              <a href="#"><FaTwitter /></a>
              <a href="#"><FaYoutube /></a>
            </div>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-3">
            <p className="footer-copy">
              © 2026 CinéWorld | Tous droits réservés
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
