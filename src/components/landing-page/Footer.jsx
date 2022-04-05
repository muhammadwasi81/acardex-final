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
                <img src="/assets/logo.png" alt="logo" />
                <p className="d-inline-block align-top mt-5 text-white fw-bold">
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
            <div
              className="d-flex justify-content-start"
              style={{
                cursor: 'pointer',
                userSelect: 'none',
                imageRendering: 'pixelated',
              }}
            >
              <img
                src="/assets/twitter-logo.png"
                className="p-2"
                alt="twitter"
              />
              <img src="/assets/reddit-logo.png" alt="reddit" className="p-2" />
              <img
                src="/assets/discord-logo.png"
                alt="discord"
                className="p-2"
              />
              <img src="/assets/medium-logo.png" alt="medium" className="p-2" />
              <br />
            </div>
            <div className="mt-1">
              <p className="fw-bold text-white">
                &copy; {new Date().getFullYear()} AcardexDex Labs,Inc.All rights
                reserved
              </p>
            </div>
          </Container>
        </Container>
      </footer>
    </>
  )
}
