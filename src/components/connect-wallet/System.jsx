import React, { useState } from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import { AiFillHome } from 'react-icons/ai'
import { MdSwapCalls } from 'react-icons/md'
import { BsFillDropletFill } from 'react-icons/bs'
import { MdQueue } from 'react-icons/md'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import CustomModal from '../Modal/CustomModal'
import { Link } from 'react-router-dom'
import LazyShow from '../animation/Lazy'

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    partialVisibilityGutter: 40,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    partialVisibilityGutter: 30,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
}

export default function System() {
  const [show, setShow] = useState(false)

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)
  return (
    <>
      <LazyShow>
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
                style={{
                  borderRadius: '10px',
                  maxWidth: '250px',
                  boxShadow: 'rgba(149, 157, 165, 0.2) 0px 8px 24px',
                  transition: '0.3s',
                }}
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
                <Card.Title className="my-3">
                  <Link to="/swap" style={{ textDecoration: 'none' }}>
                    <MdSwapCalls
                      style={{
                        fontSize: '25px',
                        color: '#000000',
                        cursor: 'pointer',
                      }}
                    />
                    <span className="m-3 text-black">Swap</span>
                  </Link>
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
            <Col sm={12} md={8} className="mt-3">
              <p
                className="h1 text-white"
                style={{ textTransform: 'capitalize' }}
              >
                The Best <br /> User Friendly <br /> Decentralized Exchange{' '}
                <br /> On The Cardano <br />
                Ecosystem.
              </p>
            </Col>
          </Row>

          {/* Todo: cards carousel */}
          <Row>
            <Carousel
              responsive={responsive}
              partialVisible={true}
              draggable={false}
              infinite={true}
              autoPlaySpeed={1000}
              keyBoardControl={true}
              removeArrowOnDeviceType={['tablet', 'mobile']}
            >
              <Col sm={12} md={3} className="my-3">
                <Card
                  style={{
                    background: 'rgba(255, 255, 255, 0.65)',
                    borderRadius: '10px',
                    height: '30vh',
                    minWidth: '290px',
                  }}
                >
                  <img
                    src="/assets/first.png"
                    alt="logo"
                    minWidth="150px"
                    className="img-fluid m-auto"
                  />
                </Card>
              </Col>
              <Col sm={12} md={3} className="my-3">
                <Card
                  style={{
                    background: 'rgba(255, 255, 255, 0.65)',
                    borderRadius: '10px',
                    height: '30vh',
                    minWidth: '290px',
                  }}
                >
                  <img
                    src="/assets/sec-icon.png"
                    minWidth="200px"
                    alt="logo"
                    className="img-fluid m-auto"
                  />
                </Card>
              </Col>
              <Col sm={12} md={3} className="my-3">
                <Card
                  style={{
                    background: 'rgba(255, 255, 255, 0.65)',
                    borderRadius: '10px',
                    height: '30vh',
                    minWidth: '290px',
                  }}
                >
                  <img
                    src="/assets/g-icon.png"
                    minWidth="150px"
                    className="img-fluid m-auto"
                    alt="logo"
                  />
                </Card>
              </Col>
              <Col sm={12} md={3} className="my-3 ">
                <Card
                  style={{
                    background: 'rgba(255, 255, 255, 0.65)',
                    borderRadius: '10px',
                    height: '30vh',
                    minWidth: '290px',
                  }}
                >
                  <img
                    src="/assets/last-icon.png"
                    minWidth="150px"
                    className="img-fluid m-auto"
                    alt="logo"
                  />
                </Card>
              </Col>
            </Carousel>
          </Row>
          <CustomModal onShow={show} onHide={handleClose} />
        </Container>
      </LazyShow>
    </>
  )
}
