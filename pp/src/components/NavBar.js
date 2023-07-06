import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState, useEffect } from 'react';
import linkedin from '../img/linkedin.svg'
import twitter from '../img/twitterd.svg'
import mainlogo from '../img/logomain.svg'


function NavBar() {
    const [activeLink, setActiveLink] = useState('home')
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }

        window.addEventListener('scroll', onScroll)
        
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    const onUpdateActiveLink = (value) =>{
        setActiveLink(value)
    }

  return (
    <Navbar  expand="lg" className={scrolled ? "scrolled": ''}>
      <Container>
        <Navbar.Brand href="#home">
            <img src={mainlogo} alt="logo" className='mainlogo'/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" > 
            <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
            <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
          </Nav>
          <span className='navbar-text'>
            <div className="social-icon">
                <a href="https://twitter.com/Edward_Codes"><img src={twitter} alt="twitterlogo" /></a>
                <a href="https://www.linkedin.com/in/edward-mclean-6073a1263/"><img src={linkedin} alt="linkedinlogo" /></a>
            </div>
            <button className='vvd' onClick={() => window.location.href="https://www.linkedin.com/in/edward-mclean-6073a1263/"}><span>Let's Connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;