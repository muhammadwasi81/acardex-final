import React, { useState } from 'react'
import { Button, Card, Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import { AiFillHome, AiOutlineQuestionCircle } from 'react-icons/ai'
import { TiArrowBackOutline } from 'react-icons/ti'
import { IoApps } from 'react-icons/io5'
import { BsFillDropletFill, BsTranslate } from 'react-icons/bs'
import { IoStopCircle } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { MdQueue, MdSwapCalls } from 'react-icons/md'
import SwapChild from './SwapChild'
import LazyShow from '../animation/Lazy'
import '../swap/swap.css'

export default function SwapContainer() {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <>
      <LazyShow>
        <Navbar className="navbar" expand="lg">
          <Container>
            <Navbar.Brand href="/" className="text-white m-2">
              <Link
                to="/wallet"
                style={{ textDecoration: 'none', color: '#fff' }}
              >
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
                    <BsTranslate
                      style={{ fontSize: '25px', color: '#000000' }}
                    />
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
        </Navbar>
        {/* card */}
        <Container className="my-2" id="bg__image">
          <Row>
            <Col sm={12} md={4}>
              <div style={{ position: 'relative' }}>
                <div
                  style={{
                    backgroundColor: '#D65D5D',
                    borderRadius: '27px',
                    minWidth: '150px',
                    textAlign: 'center',
                    color: '#FFFFFF',
                    padding: '5px',
                    position: 'absolute',
                    zIndex: 999,
                    top: '-20px',
                    left: '50px',
                  }}
                >
                  Beta Mainnet
                </div>
              </div>
              <Card
                style={{
                  borderRadius: '10px',
                  maxWidth: '250px',
                  boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
                  transition: '0.3s',
                }}
                className="p-3"
              >
                <Card.Title className="my-3">
                  <Link
                    to="/wallet"
                    style={{ textDecoration: 'none', color: '#fff' }}
                  >
                    <AiFillHome
                      style={{
                        fontSize: '25px',
                        color: '#000000',
                        cursor: 'pointer',
                      }}
                    />
                    <span className="m-3 text-black">Home</span>
                  </Link>
                </Card.Title>
                <Card.Title className="my-3">
                  <MdSwapCalls
                    style={{
                      fontSize: '25px',
                      color: '#000000',
                      cursor: 'pointer',
                    }}
                  />
                  <span className="m-3 text-black">Swap</span>
                </Card.Title>
                <Link to="/liquidity" style={{ textDecoration: 'none' }}>
                  <Card.Title className="my-3">
                    <BsFillDropletFill
                      style={{
                        fontSize: '25px',
                        color: '#000000',
                        cursor: 'pointer',
                      }}
                    />
                    <span className="m-3 text-black">Liquify</span>
                  </Card.Title>
                </Link>
                <Card.Title className="my-3">
                  <MdQueue
                    style={{
                      fontSize: '25px',
                      color: '#000000',
                      cursor: 'pointer',
                    }}
                  />
                  <span className="m-3 text-black">Queue</span>
                </Card.Title>
              </Card>
            </Col>
          </Row>
          {/* SwapChild Children */}
          <SwapChild />
        </Container>
      </LazyShow>
    </>
  )
}
