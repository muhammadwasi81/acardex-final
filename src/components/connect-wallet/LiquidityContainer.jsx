import React, { useState } from 'react'
import { Button, Card, Col, Container, Nav, Navbar, Row } from 'react-bootstrap'
import '../connect-wallet/Wallet.css'
import { AiFillHome, AiOutlineQuestionCircle } from 'react-icons/ai'
import { TiArrowBackOutline } from 'react-icons/ti'
import { IoApps } from 'react-icons/io5'
import { BsFillDropletFill, BsTranslate } from 'react-icons/bs'
import { IoStopCircle } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import CustomModal from '../Modal/CustomModal'
import { MdQueue, MdSwapCalls } from 'react-icons/md'
import LiquidityChild from './LiquidityChild'
import LazyShow from '../animation/Lazy'

export default function Liquidity() {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <>
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
      <LazyShow>
        {/* card */}
        <Container className="my-3">
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
                style={{ borderRadius: '10px', maxWidth: '250px' }}
                className="p-3"
              >
                <Card.Title className="my-3">
                  <AiFillHome
                    style={{
                      fontSize: '25px',
                      color: '#000000',
                      cursor: 'pointer',
                    }}
                    onClick={handleShow}
                  />
                  <span className="m-3 text-black">Home</span>
                </Card.Title>
                <Link to="/swap" style={{ textDecoration: 'none' }}>
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
                </Link>
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
                  <Link to="/queue" style={{ textDecoration: 'none' }}>
                    <MdQueue
                      style={{
                        fontSize: '25px',
                        color: '#000000',
                        cursor: 'pointer',
                      }}
                    />
                    <span className="m-3 text-black">Queue</span>
                  </Link>
                </Card.Title>
              </Card>
            </Col>
          </Row>
          {/* Liquidity Children */}
          <LiquidityChild />
        </Container>
      </LazyShow>
    </>
  )
}
