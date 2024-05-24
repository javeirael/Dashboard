// src/components/Footer.jsx
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 javier. Todos los derechos reservados.</p>
        <nav>
          <a href="#Herramientas">Herramientas</a>
          <a href="#Cursos">Cursos</a>
          <a href="#Temas">Temas</a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;
