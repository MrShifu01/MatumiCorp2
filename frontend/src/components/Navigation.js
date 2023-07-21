import React, { useState, useEffect } from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-scroll'
import { Link as LinkRouter } from 'react-router-dom';

const ScrollListener = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return isScrolled;
};

function Navigation() {
  const [expanded, setExpanded] = useState(false);
  const isScrolled = ScrollListener();

  return (
    <div>
      <Navbar
        expand="lg"
        expanded={expanded}
        className={`navbar ${
          isScrolled ? "bg-light shadow-sm navbar-light" : "navbar-dark"
        } fixed-top`}
        variant="primary"
      >
        <div className="navbar-content container-fluid">
          <Navbar.Brand
            className={`text-2xl ${isScrolled ? "text-primary" : "text-light"}`}
            href="#hero"
          >
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
            >
              <img
                style={{ width: "100px" }}
                src={`${isScrolled ? "black.png" : "white.png"}`}
                alt="logo"
              />
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")}/>
          <Navbar.Collapse
            id="basic-navbar-nav"
            className={`${isScrolled ? "" : "dark-bg"}`}
          >
            <Nav className="ms-auto pt-3">
              <Nav.Link>
                <LinkRouter className='btn nav-button btn-primary shadow' to="/transactions">TRANSACTIONS</LinkRouter>
              </Nav.Link>
              <Nav.Link
                className={`text-uppercase ${
                  isScrolled ? "text-dark" : "text-light"
                }`}
                href="#about"
                
              >
                <Link
                  activeClass="active-link"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={-90}
                  duration={500}
                  onClick={() => setExpanded(false)}
                >
                  About us
                </Link>
              </Nav.Link>
              <Nav.Link
                className={`text-dark text-uppercase ${
                  isScrolled ? "text-dark" : "text-light"
                }`}
                href="#services"
              >
                <Link
                  activeClass="active-link"
                  to="services"
                  spy={true}
                  smooth={true}
                  offset={-90}
                  duration={500}
                  onClick={() => setExpanded(false)}
                >
                  Services
                </Link>
              </Nav.Link>
              <Nav.Link
                className={`text-dark text-uppercase ${
                  isScrolled ? "text-dark" : "text-light"
                }`}
                href="#testimonials"
              >
                <Link
                  activeClass="active-link"
                  to="testimonials"
                  spy={true}
                  smooth={true}
                  offset={-90}
                  duration={500}
                  onClick={() => setExpanded(false)}
                >
                  Testimonials
                </Link>
              </Nav.Link>
              <Nav.Link
                className={`text-dark text-uppercase ${
                  isScrolled ? "text-dark" : "text-light"
                }`}
                href="#Team"
              >
                <Link
                  activeClass="active-link"
                  to="team"
                  spy={true}
                  smooth={true}
                  offset={-90}
                  duration={500}
                  onClick={() => setExpanded(false)}
                >
                  Team
                </Link>
              </Nav.Link>
              <Nav.Link
                className={`text-dark text-uppercase ${
                  isScrolled ? "text-dark" : "text-light"
                }`}
                href="#Contact"
              >
                <Link
                  activeClass="active-link"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-90}
                  duration={500}
                  onClick={() => setExpanded(false)}
                >
                  Contact
                </Link>
              </Nav.Link>

            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </div>
  );
}

export default Navigation;
