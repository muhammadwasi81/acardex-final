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
            <Navbar.Brand href="#home" className="text-white m-2">
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
            src="/assets/first.png"
            className="d-inline-block align-top"
            width="80px"
            height="80px"
            alt="AcarDexEx DEX"
          />
          <p className="d-inline-block align-top mt-4 text-white fw-bold">
            ACARDEX DEX
          </p>
        </Navbar.Brand>
      </Container>
    </>
  )
}
