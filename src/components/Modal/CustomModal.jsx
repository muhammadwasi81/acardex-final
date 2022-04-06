import React from 'react'
import { Col, Container, Form, Modal, Row } from 'react-bootstrap'
import '../../App.css'

export default function CustomModal({ onShow, onHide }) {
  return (
    <>
      <Modal
        show={onShow}
        onHide={onHide}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header style={{ background: '#C4C4C4', borderRadius: '27px' }}>
          <Modal.Title>
            <p className="text-center text-black fs-6">
              Note: ALL hardware wallets WILL NOT be able to interact with the
              DEX. <br /> Please use a browser extension wallet.{' '}
            </p>
          </Modal.Title>
        </Modal.Header>
        {/* <Modal.Body
          style={{ background: '#C4C4C4', borderRadius: '10px' }}
          className="fw-bold show-grid"
        >
          <p className="text-center text-black fs-6">
            Note: ALL hardware wallets WILL NOT be able to interact with the
            DEX. <br /> Please use a browser extension wallet.{' '}
          </p>
        </Modal.Body> */}
        <Modal.Body className="fw-bold text-center fs-5 text-black p-2 show-grid">
          <Container>
            <p className="text-center fs-3">Connect Your Wallet</p>
            <div
              style={{
                background: '#E3D4D4',
                borderRadius: '10px',
              }}
              className="fs-6"
            >
              <Row>
                <Col md={2} sm={12}>
                  <Form.Check aria-label="option 1" className="p-3" />
                </Col>
                <Col md={10} sm={12}>
                  <p className="text-start mt-2">
                    By connecting you wallet,You agree to our{' '}
                    <span style={{ color: 'red' }}>
                      Disclaimer.Use Terms and our Privacy Policy
                    </span>
                  </p>
                </Col>
              </Row>
            </div>
          </Container>
          <Container>
            <Row>
              <Col md={12} sm={12}>
                <div
                  className="text-start text-white p-3 mt-2"
                  style={{
                    background:
                      'radial-gradient(112.61% 7780.05% at 13.39% 66.13%, #0C5660 0%, rgba(255, 245, 0, 0.89) 100%) ',
                    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                    borderRadius: '10px',
                  }}
                >
                  Nami
                </div>
              </Col>
              <Col md={12} sm={12}>
                <div
                  className="text-start text-white p-3 mt-2"
                  style={{
                    background:
                      'radial-gradient(87.52% 6046.18% at 5.82% 65.05%, #7927E0 0%, #288DEB 100%) ',
                    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                    borderRadius: '10px',
                  }}
                >
                  ccvault.io
                </div>
              </Col>
              <Col md={12} sm={12}>
                <div
                  className="text-start text-white p-3 mt-2"
                  style={{
                    background:
                      'radial-gradient(86.87% 6001.5% at 4.59% 50.54%, #F17503 0%, #E3B890 87.67%, rgba(248, 222, 172, 0.66) 100%)',
                    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                    borderRadius: '10px',
                  }}
                >
                  GeroWallet
                </div>
              </Col>
              <Col md={12} sm={12}>
                <div
                  className="text-start text-white p-3 mt-2"
                  style={{
                    background:
                      'radial-gradient(86.87% 6001.5% at 4.59% 50.54%, #F103AE 0%, #8955F7 87.5%, rgba(106, 31, 228, 0.92) 100%)',
                    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                    borderRadius: '10px',
                  }}
                >
                  FintWallet
                </div>
              </Col>
              <Col md={12} sm={12}>
                <div
                  className="text-start text-white p-3 mt-2"
                  style={{
                    background:
                      'radial-gradient(86.87% 6001.5% at 4.59% 50.54%, #0AA3C5 0%, #6B27FB 87.5%, rgba(106, 31, 228, 0.92) 100%)',
                    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                    borderRadius: '10px',
                  }}
                >
                  CardWallet
                </div>
              </Col>
              <div className="mb-3"></div>
            </Row>
          </Container>
        </Modal.Body>
      </Modal>
    </>
  )
}
