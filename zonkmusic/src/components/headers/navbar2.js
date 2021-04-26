import { Navbar, Nav, Container } from 'react-bootstrap';


const Navigation = () => {
  return (
    <>
    <Navbar collapseOnSelect fixed='top' expand='sm' bg='dark' variant='dark'>
      <Container>
        <Navbar.Toggle are-controls="responsive-navbar-nav" />
        <Navbar.collapse id="responsive-navbar-nav">
          <Nav>
            
          </Nav>
        </Navbar.collapse>
      </Container>
    </Navbar>
    </>
  )
}