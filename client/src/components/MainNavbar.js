import React from 'react'
import {Navbar, Nav, Container, Form, Button, FormControl} from 'react-bootstrap';
import { SearchOutlined  } from '@ant-design/icons';
import { useNavigate, Link } from 'react-router-dom';

const MainNavbar = () => {

  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  }

  return (
    <>
      <Navbar bg="light" expand="lg" className="justify-content-center">
        <Container fluid>
          <Navbar.Brand href="#" style={{fontSize: '1.8rem'}}><strong>Snapgram</strong></Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
          <Form className="d-flex m-auto" style={{ width: '600px', marginLeft: '12rem', marginRight: 'auto' }}>
              <FormControl
                type="search"
                placeholder="Find Friends"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success"><SearchOutlined /></Button>
            </Form>
          
            <Nav
              className="ml-auto"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
            <Nav.Link className='mx-5'><Link to="/profile">Profile</Link></Nav.Link>
            <Nav.Link className='mx-5'
              style={{backgroundColor: '#ffa500', color: '#fff', borderRadius: '6px' }}
              onClick={handleLogout }
            >Logout</Nav.Link>
              
              
            </Nav>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default MainNavbar