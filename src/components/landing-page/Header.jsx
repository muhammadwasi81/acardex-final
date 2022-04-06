import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import '../landing-page/landing.css'

export default function Header() {
  return (
    <Navbar sticky="top" className="navbar">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="/assets/nav-logo.png"
            className="d-inline-block align-top img-fluid"
            alt="AcarDexEx DEX"
          />
        </Navbar.Brand>
      </Container>
    </Navbar>
  )
}
