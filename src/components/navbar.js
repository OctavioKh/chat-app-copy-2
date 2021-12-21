import React from 'react';
import '../App.css';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Gallery.js';
import { ig, onlyfans, fb, email } from './socials';


const Menu = () => {
  return (
    <header/*  className="App-header" */>
      <Navbar  collapseOnSelect expand="lg" >
        <Navbar.Brand /* id="maca" */  className="h1"  >Macarena Puelles <span role="img" aria-label="butterfly">🦋</span></Navbar.Brand>
        <Navbar.Toggle /* className="boton my-2 my-sm-0 navbar-right" aria-controls="responsive-navbar-nav" */ />
        <Navbar.Collapse /* id="mr-auto" */>
          <Nav  className="w-100 nav-justified" >
            <Nav.Link /* activeClassName="active" */ href="/">Portraits</Nav.Link>
            <Nav.Link href="/facetime">Facetime</Nav.Link>
            <Nav.Link href="/documental">Documental</Nav.Link>
            <Nav.Link href="/120">120 mm</Nav.Link>
            <Nav.Link href="/videos">Video</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="/press">Press</Nav.Link>
            <NavDropdown title="Contact" /* id="collasible-nav-dropdown" */>
              <NavDropdown.Item className="text-center" href={ig} target="_blank" ><i class="fa fa-instagram"></i> Instagram</NavDropdown.Item>
              <NavDropdown.Item className="text-center" href={fb} target="_blank" ><i class="fa fa-facebook"></i> Facebook</NavDropdown.Item>
              <NavDropdown.Item className="text-center" href={onlyfans} target="_blank" ><i class="fa fa-heart"></i> Only Fans</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="text-center" href={email} target="_blank"><i class="fa fa-envelope"></i> Mail</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  )
}

export default Menu;
