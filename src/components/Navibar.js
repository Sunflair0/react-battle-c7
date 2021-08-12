import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import { UserContext } from "../shared/context/UserContext";

export default function Navibar() {
const {logout} = useContext(UserContext);

  return (
    <>
      <br />
      <Navbar fixed="top" />
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand>
            <img
              src="./assets/7battle.png"
              alt=""
              color="white"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />{" "}
            Lucky 7 Battleship
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/login">Log In</Nav.Link>
            <Nav.Link href="/signup">Sign Up</Nav.Link>
            <Nav.Link href="/waitingroom">Waiting Room</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link onClick={()=>{logout()}}>Log Out</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}
