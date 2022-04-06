import React, { useState } from 'react'
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap'
import LazyShow from '../animation/Lazy'

export default function Cards({
  mainHead,
  chipText,
  chipTextTwo,
  price,
  totalLocked,
  volume,
  lockedADA,
  footerButtonText,
  footerButtonTextTwo,
  oneArdex,
  OneADA,
  decimalNumber,
  decimalNumberTwo,
  EffectiveAcardexPrice,
  EffectiveADAPrice,
  TotalLockedAcardex,
  TotalLockedADA,
}) {
  const [type, setType] = useState(false)
  return (
    <>
      <LazyShow>
        <Container>
          <Card
            style={{
              borderRadius: '16px',
              padding: '20px',
            }}
          >
            <Row className="p-3">
              <Col md={4} sm={12} className="mt-5">
                <p className="h1 text-justify">{mainHead}</p>
                <div
                  style={{
                    backgroundColor: '#D65D5D',
                    borderRadius: '10px',
                    textAlign: 'center',
                    color: '#FFFFFF',
                    width: '100px',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    padding: '5px',
                  }}
                >
                  {chipText}
                </div>
                <div
                  style={{
                    backgroundColor: '#E39568',
                    borderRadius: '10px',
                    textAlign: 'center',
                    color: '#FFFFFF',
                    marginTop: '10px',
                    width: '150px',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    padding: '5px',
                  }}
                >
                  {chipTextTwo}
                </div>
              </Col>
              <Col md={6} className="mt-5 text-black">
                <Row>
                  <Col>
                    <p>price</p>
                    <p className="fw-bold">{price}</p>
                  </Col>
                  <Col>
                    <p>TotalLocked</p>
                    <p className="fw-bold">{totalLocked} </p>
                  </Col>
                  <Col>
                    <p className="fs-6">Total Locked ADA</p>
                    <p className="fw-bold">{lockedADA}</p>
                  </Col>
                  <Col>
                    <p>Volume 24H</p>
                    <p className="fw-bold">{volume}</p>
                  </Col>
                </Row>
              </Col>
              <Col md={2} sm={12} className="mt-5">
                <Form.Group controlId="formBasicSelect">
                  <Form.Control
                    style={{
                      backgroundColor: '#D65D5D',
                      borderRadius: '10px',
                      width: '150px',
                      textAlign: 'center',
                      margin: '0 auto',
                      color: '#FFFFFF',
                      padding: '5px',
                    }}
                    as="select"
                    value={type}
                    defaultValue="More"
                    onChange={(e) => {
                      console.log('e.target.value', e.target.value)
                      setType(e.target.value)
                    }}
                  >
                    <option value="more">More</option>
                    <option value="DICTUM">Dictamen</option>
                    <option value="CONSTANCY">Constancia</option>
                    <option value="COMPLEMENT">Complemento</option>
                  </Form.Control>
                </Form.Group>
              </Col>
              <Col
                sm={12}
                md={4}
                className="fw-bold mt-5 text-capitalize"
                style={{ color: '#767676' }}
              >
                <p>{EffectiveAcardexPrice}</p>
                <p>{EffectiveADAPrice}</p>
                <p>{TotalLockedAcardex}</p>
                <p>{TotalLockedADA}</p>
              </Col>
              <Col
                sm={12}
                md={3}
                className="text-capitalize mt-5"
                style={{ color: '#767676' }}
              >
                <p>{oneArdex}</p>
                <p>{OneADA}</p>
                <p>{decimalNumber}</p>
                <p>{decimalNumberTwo}</p>
              </Col>
              <Col sm={12} md={5} className="mt-5">
                <Row>
                  <Col sm={12} md={6}>
                    <Button
                      style={{
                        color: '#DE4D39',
                        borderRadius: '6px',
                        background: 'rgba(239, 93, 101, 0.37)',
                        margin: '3px',
                        textTransform: 'capitalize',
                      }}
                    >
                      {footerButtonText}
                    </Button>
                  </Col>
                  <Col sm={12} md={6}>
                    <Button
                      style={{
                        color: '#DE4D39',
                        borderRadius: '6px',
                        background: 'rgba(239, 93, 101, 0.37)',
                        margin: '3px',
                        textTransform: 'capitalize',
                      }}
                    >
                      {footerButtonTextTwo}
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card>
        </Container>
      </LazyShow>
    </>
  )
}
