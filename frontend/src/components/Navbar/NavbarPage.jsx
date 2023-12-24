import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

export default function NavbarPage() {
  return (
    <Navbar expand="lg" className="navbar-dark bg-dark">
      <Container>
        <Navbar.Brand href="#home" className="navbar-dark">Jose Luis Vallejos</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" className="navbar-dark">Home</Nav.Link>
            <Nav.Link href="#link" className="navbar-dark">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown" className="navbar-dark">
              <NavDropdown.Item href="#action/3.1" className="navbar-dark">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" className="navbar-dark">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3" className="navbar-dark">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4" className="navbar-dark">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
