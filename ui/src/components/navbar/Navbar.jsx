import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const NavbarComponent = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home" >Tuspass</Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Nav className="me auto">
            <Nav.Link href="#link" >Login</Nav.Link>
            <Nav.Link href="#home" >Tuspass mene!</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;