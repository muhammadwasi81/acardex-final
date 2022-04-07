import React from 'react'
import { Container, Navbar } from 'react-bootstrap'
import '../../App.css'
import { TiArrowBackOutline } from 'react-icons/ti'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <>
      <Navbar className="navbar" expand="lg">
        <Container>
          <Link to="/" style={{ textDecoration: 'none' }}>
            <Navbar.Brand href="/" className="text-white m-2">
              <TiArrowBackOutline
                style={{ fontSize: '30px', color: '#ffffff' }}
              />
              Back
            </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
      <Container>
        <Navbar.Brand href="#home">
          <img
            src="/assets/nav-logo.png"
            className="d-inline-block align-top"
            alt="nav-logo"
          />
        </Navbar.Brand>
      </Container>
    </>
  )
}
