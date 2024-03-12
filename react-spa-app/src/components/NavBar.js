import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useState } from 'react';
import Alert from 'react-bootstrap/Alert';

const expand = 'lg'

function NavBar() {
  const [show, setShow] = useState(false);

  if(show){
    return (
      <Alert variant='info' onClose={() => setShow(false)} dismissible>
        <Alert.Heading>
          Upgrade for Full Access!
        </Alert.Heading>
      </Alert>
    )
  }

    return (
        <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3" bg='dark' data-bs-theme='dark'>
          <Container fluid>
          <span className="material-symbols-outlined" style={{color: 'white'}}>exercise</span>
            <Navbar.Brand href="/">Fit Finder</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              bg='dark' data-bs-theme='dark'
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Fit Finder
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="/">Home</Nav.Link>
                  <Nav.Link href="#action2" onClick={() => setShow(true)}>Workout Plan</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      )}

export default NavBar