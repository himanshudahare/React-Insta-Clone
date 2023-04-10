import React, {useState} from "react";
import './Header.css';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Logo from "../../../images/circle.svg";
import camera from "../../../images/camera.png";
import {Link} from 'react-router-dom';




export default function Header(){
  
    return(
        <>
        <Navbar>
        <Container>
          <Navbar.Brand href="#home">
            <img src={Logo} alt="Logo"/>
            <span>Insta Clone</span>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
           <Link to="/Post/New"> <img src={camera} alt="Logo"/></Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>    
        </>  
    )
}