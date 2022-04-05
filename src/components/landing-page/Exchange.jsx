import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'
import LazyShow from '../animation/Lazy'

export default function Exchange() {
  return (
    <>
      <LazyShow>
        <Container>
          <div className="my-5">
            <p className="h1 lh-5 text-capitalize text-white text-center">
              A Decenteralized Exchange
            </p>
            <p className="text-white text-center">
              An ownerless marketplace for efficient <br />
              cryptocurrency transactions.
            </p>
          </div>
        </Container>
        <Container className="my-3">
          <Row>
            <Col sm={12} md={4}>
              <Card
                style={{
                  background: 'rgba(33, 11, 62, 0.29)',
                  borderRadius: '26px',
                  border: 'none',
                }}
                className="p-3 m-3"
              >
                <Card.Img
                  variant="top"
                  src="/assets/card-one.png"
                  className="p-5"
                />
                <Card.Body>
                  <Card.Text
                    className="text-white text-center
                fw-bold"
                  >
                    Democratize <br /> Ownership & Profits
                  </Card.Text>
                  <Card.Text className="text-white text-center">
                    Deconstruct the walled gardens of classic financial
                    institutions.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={4}>
              <Card
                style={{
                  background: 'rgba(33, 11, 62, 0.29)',
                  borderRadius: '26px',
                  border: 'none',
                }}
                className="p-3 m-3"
              >
                <Card.Img
                  variant="top"
                  src="/assets/efficient.png"
                  className="p-5"
                />
                <Card.Body>
                  <Card.Text
                    className="text-white text-center
                fw-bold"
                  >
                    Efficient Liquidity
                  </Card.Text>
                  <Card.Text className="text-white text-center">
                    Level up beyond constant product pools and put your capital
                    to work.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col sm={12} md={4}>
              <Card
                style={{
                  background: 'rgba(33, 11, 62, 0.29)',
                  borderRadius: '26px',
                  border: 'none',
                }}
                className="p-3 m-2"
              >
                <Card.Img
                  variant="top"
                  src="/assets/variety.png"
                  className="p-5"
                />
                <Card.Body>
                  <Card.Text
                    className="text-white text-center
                fw-bold"
                  >
                    A Foundation for a Variety of Services
                  </Card.Text>
                  <Card.Text className="text-white text-center">
                    Attract assets that can empower an ecosystem of financial
                    products.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </LazyShow>
    </>
  )
}
