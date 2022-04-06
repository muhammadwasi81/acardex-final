import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import '../landing-page/landing.css'

export default function Header() {
  return (
    <Navbar sticky="top" className="navbar">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="/assets/logo.png"
            className="d-inline-block align-top"
            width="100px"
            height="96px"
            alt="AcarDexEx DEX"
          />
          <p className="d-inline-block align-top mt-5 text-white fw-bold">
            ACARDEX DEX
          </p>
        </Navbar.Brand>
      </Container>
    </Navbar>
  )
}
