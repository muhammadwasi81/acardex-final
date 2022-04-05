import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

export default function Footer() {
  return (
    <>
      <footer>
        <Container fluid>
          <Container>
            <Row>
              <Col md={6} sm={12} className="my-5">
                <img src="/assets/first.png" alt="logo" />
                <p className="d-inline-block align-top mt-4 text-white fw-bold">
                  ACARDEX DEX
                </p>
                <p className="my-3 lh-5 text-white">
                  AcardexDex is the sweetest decentralized
                  <br /> exchange on Cardano and aiming to be <br />
                  the platform for future financial <br /> innovation. Join the
                  community today!
                </p>
              </Col>
              <Col md={6} sm={12} className="my-5 text-sm-left">
                <Row>
                  <Col md={4} sm={12} className="p-0">
                    <ul>
                      <h5 className="title text-white fw-800 my-3">
                        AcardexDex
                      </h5>
                      <li className="list-unstyled mt-5">
                        <a
                          href="#!"
                          className="text-decoration-none fw-bold mt-5"
                          style={{ color: '#B7A9A9' }}
                        >
                          Team
                        </a>
                      </li>
                      <li className="list-unstyled mt-5">
                        <a
                          href="#news"
                          className="text-decoration-none fw-bold"
                          style={{ color: '#B7A9A9' }}
                        >
                          News & Updates
                        </a>
                      </li>
                      <li className="list-unstyled mt-5">
                        <a
                          href="#faq"
                          className="text-decoration-none fw-bold"
                          style={{ color: '#B7A9A9' }}
                        >
                          FAQ
                        </a>
                      </li>
                      <li className="list-unstyled mt-5">
                        <a
                          href="#token"
                          className="text-decoration-none fw-bold"
                          style={{ color: '#B7A9A9' }}
                        >
                          Tokenomics
                        </a>
                      </li>
                    </ul>
                  </Col>
                  <Col md={4} sm={12} className="p-0">
                    <ul>
                      <h5 className="title text-white fw-800 my-3">
                        Resources
                      </h5>
                      <li className="list-unstyled mt-5">
                        <a
                          href="#Media Kit"
                          className="text-decoration-none fw-bold mt-5"
                          style={{ color: '#B7A9A9' }}
                        >
                          Media Kit
                        </a>
                      </li>
                      <li className="list-unstyled mt-5">
                        <a
                          href="#whitepaper"
                          className="text-decoration-none fw-bold"
                          style={{ color: '#B7A9A9' }}
                        >
                          Whitepaper
                        </a>
                      </li>
                      <li className="list-unstyled mt-5">
                        <a
                          href="#privacypolicy"
                          className="text-decoration-none fw-bold"
                          style={{ color: '#B7A9A9' }}
                        >
                          Privacy Policy
                        </a>
                      </li>
                      <li className="list-unstyled mt-5">
                        <a
                          href="#Terms"
                          className="text-decoration-none fw-bold"
                          style={{ color: '#B7A9A9' }}
                        >
                          Terms & Conditions
                        </a>
                      </li>
                    </ul>
                  </Col>
                  <Col md={4} sm={12} className="p-0">
                    <ul>
                      <h5 className="title text-white fw-800 my-3">
                        Foundation
                      </h5>
                      <li className="list-unstyled mt-5">
                        <a
                          href="#hiring"
                          className="text-decoration-none fw-bold mt-5"
                          style={{ color: '#B7A9A9' }}
                        >
                          Hiring
                        </a>
                      </li>
                      <li className="list-unstyled mt-5">
                        <a
                          href="#contact"
                          className="text-decoration-none fw-bold"
                          style={{ color: '#B7A9A9' }}
                        >
                          Contact
                        </a>
                      </li>
                    </ul>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </Container>
      </footer>
    </>
  )
}
