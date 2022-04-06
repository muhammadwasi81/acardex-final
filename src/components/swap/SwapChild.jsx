import React, { useState } from 'react'
import { Button, Card, Col, Container, Row } from 'react-bootstrap'
import { AiOutlineCaretDown } from 'react-icons/ai'
import { AiOutlineArrowDown } from 'react-icons/ai'
import SelectModal from '../Modal/SelectModal'
import TokenModal from '../Modal/TokenModal'
import CustomModal from '../Modal/CustomModal'

export default function SwapChild() {
  const [show, setShow] = useState(false)
  const [modalShow, setModalShow] = useState(false)
  const [tokenShow, setTokenShow] = useState(false)

  const handleClose = () => {
    setShow(false)
  }
  const hideHandler = () => {
    setModalShow(false)
  }
  const hideTokenHandler = () => {
    setTokenShow(false)
  }
  const showTokenHandler = () => {
    setTokenShow(true)
  }
  const showHandler = () => {
    setModalShow(true)
  }
  const handleShow = () => {
    setShow(true)
  }
  return (
    <Container className="my-5">
      <Card
        style={{
          borderRadius: '26px',
          color: '#000000',
          width: 'fit-content',
          margin: 'auto',
        }}
      >
        <Card.Header
          className="text-center text-black mt-2"
          style={{
            backgroundColor: '#ffffff',
            borderRadius: '26px',
          }}
        >
          IMPORTANT NOTICE: The network is extremely congested at the moment.
          <br /> Swaps may fail or not go through until congestion decreases.
          Please be patient.
        </Card.Header>
        <div style={{ border: '1.23534px dashed #940000' }}></div>
        <Card.Body>
          <Row>
            <Col sm={11}>
              <Card.Title>Swap</Card.Title>
              <Card.Text>Swap between native Cardano tokens.</Card.Text>
            </Col>
            <Col sm={1}>
              <img src="/assets/setting.png" alt="setting-logo" />
            </Col>
            <Col sm={12}>
              <div
                style={{
                  background: '#D2E4FF',
                  border: '0.617671px solid #000000',
                  borderRadius: '9px',
                }}
                className="my-2 p-4"
              >
                <Row>
                  <Col sm={8}>
                    <p className="fs-2 fw-bold">0</p>
                  </Col>
                  <Col sm={4}>
                    {' '}
                    <Button
                      onClick={handleShow}
                      style={{
                        background: '#FFFFFF',
                        borderRadius: '12px',
                        color: '#000000',
                      }}
                    >
                      Select
                      <AiOutlineCaretDown className="m-1" />
                    </Button>
                  </Col>
                </Row>
              </div>
            </Col>
            <div
              style={{
                position: 'relative',
                textAlign: 'center',
              }}
            >
              <Button
                style={{
                  margin: 'auto',
                  position: 'absolute',
                  background: '#D2E4FF',
                  border: '0.617671px solid #000000',
                  borderRadius: '9px',
                  fontWeight: 'bold',
                  zIndex: 999,
                  top: '-20px',
                }}
              >
                <AiOutlineArrowDown style={{ color: '#000000' }} />
              </Button>
            </div>
          </Row>
          <Row>
            <Col sm={12}>
              <div
                style={{
                  background: '#D2E4FF',
                  border: '0.617671px solid #000000',
                  borderRadius: '9px',
                }}
                className="my-2 p-3"
              >
                <Row>
                  <Col sm={8}>
                    <p className="fs-2 fw-bold">0</p>
                  </Col>
                  <Col sm={4}>
                    <Button
                      onClick={showTokenHandler}
                      style={{
                        background: '#FFFFFF',
                        borderRadius: '12px',
                        color: '#000000',
                      }}
                    >
                      Select
                      <AiOutlineCaretDown className="m-1" />
                    </Button>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      <Container className="py-4">
        <p className="text-white ml-5 text-center">Slippage Tolerance 3%</p>
        <Button
          style={{
            backgroundColor: '#D2E4FF',
            borderRadius: '6px',
            margin: 'auto',
            color: '#000000',
            textTransform: 'capitalize',
            padding: '15px',
            maxWidth: '50%',
            display: 'flex',
            justifyContent: 'center',
          }}
          onClick={showHandler}
          className="w-100"
        >
          Connect Wallet
        </Button>
      </Container>
      <SelectModal onShow={show} onHide={handleClose} />
      <CustomModal onShow={modalShow} onHide={hideHandler} />
      <TokenModal onShow={tokenShow} onHide={hideTokenHandler} />
    </Container>
  )
}
