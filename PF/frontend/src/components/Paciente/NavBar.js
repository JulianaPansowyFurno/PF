import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiOutlineCalendar
} from "react-icons/ai";
import {BiPlusMedical} from "react-icons/bi";
import "../../styles.css";
import Login from "./LoginFront";
import SacarTurno from "./SacarTurno";
import { Link  } from "react-router-dom";
import { CgFileDocument } from "react-icons/cg";
import logoPNG from "../Imagenes/logoPNG.png";
import "../../botonLindo.css";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
         <Navbar.Brand href="/" className="d-flex">
         <img className='navbarLogo' src = {logoPNG} width='22%' ></img>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        > 
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse  id="responsive-navbar-nav">
          <Nav className="ms-auto" defaultActiveKey="#home">
            <Nav.Item >
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                 <AiOutlineHome className='navbarHome' style={{ marginBottom: "-20px" }}  /> 
                 <div className="navbarHomeText" >Home</div> 
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/registro"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineUser className='navbarRegistro' style={{ marginBottom: "2px" }} />
                <div className="navbarRegistroText" >Registro</div> 
 
              </Nav.Link>
            </Nav.Item>

            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/agenda"
                onClick={() => updateExpanded(false)}
              >
                <AiOutlineCalendar className='navbarAgenda' style={{ marginBottom: "2px" }} /> 
                <div className="navbarAgendaText" >Agenda</div> 

              </Nav.Link>
            </Nav.Item>


            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/sacarTurno"
                onClick={() => updateExpanded(false)}
              >
                <BiPlusMedical className='navbarTurno' style={{ marginBottom: "2px" }} /> 
                <div className="navbarTurnoText" >SacarTurno</div> 

              </Nav.Link>
            </Nav.Item>

            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;