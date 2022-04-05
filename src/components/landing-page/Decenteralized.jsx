import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../../App.css'
import LazyShow from '../animation/Lazy'

export default function Decenteralized() {
  return (
    <>
      <LazyShow>
        <Container className="my-3">
          <Row>
            <Col sm={12} md={6} className="mt-2 p-5">
              <p className="h1 lh-5 text-capitalize text-white main__head">
                A Decentralized
                <br /> Trading Protocol on <br />
                Cardano.
              </p>
              <p className="mt-4 lh-5 text-md-start text-white main__text">
                Acardex Dex is a s a native, <br /> scalable decentralized
                exchange <br />
                and automated liquidity provision protocol.
              </p>
              <Link to="/wallet">
                <Button id="btn__start" className="mt-3 m-1 text-capitalize">
                  start trading
                </Button>
              </Link>
              <Link to="/updates">
                <Button id="btn__start" className="mt-3 m-1 text-capitalize">
                  recent updates
                </Button>
              </Link>
            </Col>

            <Col sm={12} md={6} className="p-5">
              <img
                src="/assets/section-one.png"
                alt="thousand-02"
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </LazyShow>
    </>
  )
}
