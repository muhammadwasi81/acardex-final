import React from 'react'
import { Card, Container, Row } from 'react-bootstrap'

export default function QueueChild() {
  return (
    <Container className="my-5 p-5">
      <Row>
        <p className="h1 text-center text-white">Pool Queues, by Depth</p>
        <p className="text-center text-white">
          Approximate number of processable orders in queue for the deepest
          pools. <br /> All other pools operating normally.
        </p>

        <Card
          style={{
            backgroundColor: '#F5E6E6',
            borderRadius: '27px',
            margin: 'auto',
            width: 'fit-content',
          }}
          className="py-5"
        >
          <div className="p-5">
            <h2 className="text-start">There are currently no queues.</h2>
            <p className="text-start text-black mt-3">
              All pools are operating at normal speeds.
            </p>
          </div>
        </Card>
      </Row>
    </Container>
  )
}
