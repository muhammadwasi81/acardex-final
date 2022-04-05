import React from 'react'
import { Col, Form, Modal, Row } from 'react-bootstrap'

export default function SelectModal({ onShow, onHide, title }) {
  return (
    <>
      <Modal
        show={onShow}
        onHide={onHide}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{ borderRadius: '10px' }}
          className="fw-bold text-center text-black p-3"
        >
          <p className="text-start text-black fs-2">Select a Token</p>
          <p className="text-start text-black-50 fs-6">
            Select a Token or paste policy id{' '}
          </p>
          <Form.Control
            style={{
              background: '#EAE9E9',
              borderRadius: '10px',
              border: '3px solid #F58F3E',
            }}
            placeholder="Search name or paste policy id"
            type="text"
            required
            id="inputPassword5"
            aria-describedby="passwordHelpBlock"
          />
          <div>
            <p className="text-start fs-3 mt-4">Token Name</p>
          </div>
          <div className="text-start fs-3">
            <Row>
              <Col sm={11}>
                <img src="/assets/rm373batch16-18 1.svg" alt="setting-logo" />
                <span className="m-2">
                  ADA <span className="text-black-50 fs-5">Cardanoada</span>{' '}
                </span>
              </Col>
              <Col sm={1}>
                <p>0</p>
              </Col>
            </Row>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}
