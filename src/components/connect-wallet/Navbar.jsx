import React, { useState } from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import '../connect-wallet/Wallet.css'
import { AiOutlineQuestionCircle } from 'react-icons/ai'
import { TiArrowBackOutline } from 'react-icons/ti'
import { IoApps } from 'react-icons/io5'
import { BsTranslate } from 'react-icons/bs'
import { IoStopCircle } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import CustomModal from '../Modal/CustomModal'

export default function Header() {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <>
      <Navbar className="navbar" expand="lg">
        <Container>
          <Navbar.Brand href="/" className="text-white m-2">
            <Link to="/" style={{ textDecoration: 'none', color: '#fff' }}>
              <TiArrowBackOutline
                style={{ fontSize: '30px', color: '#ffffff' }}
              />
              Back
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="ml-auto my-2 my-lg-0"
              style={{ minHeight: '100px', marginLeft: 'auto' }}
              navbarScroll
            >
              <Nav.Link>
                <Button id="header__btn" onClick={handleShow}>
                  Connect Wallet
                </Button>
              </Nav.Link>
              <Nav.Link href="#features">
                <Button id="icon__btn">
                  <AiOutlineQuestionCircle
                    style={{ fontSize: '25px', color: '#000000' }}
                  />
                </Button>
              </Nav.Link>
              <Nav.Link href="#pricing">
                <Button id="icon__btn">
                  <IoApps style={{ fontSize: '25px', color: '#000000' }} />
                </Button>
              </Nav.Link>
              <Nav.Link href="#translate">
                <Button id="icon__btn">
                  <BsTranslate style={{ fontSize: '25px', color: '#000000' }} />
                </Button>
              </Nav.Link>
              <Nav.Link href="#circle">
                <Button id="icon__btn">
                  <IoStopCircle
                    style={{ fontSize: '25px', color: '#000000' }}
                  />
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        <CustomModal onShow={show} onHide={handleClose} />
      </Navbar>
    </>
  )
}
