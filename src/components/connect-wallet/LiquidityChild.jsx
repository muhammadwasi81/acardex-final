import React from 'react'
import { Button, Card, Container } from 'react-bootstrap'

export default function LiquidityChild() {
  return (
    <Container className="my-5 p-5">
      <h1 className="text-white">Liquidity</h1>
      <input
        type="text"
        placeholder="Search Pools"
        required
        style={{
          borderRadius: '6px',
          padding: '10px',
          border: '3px solid #FF9900',
          outline: 'none',
          marginLeft: '10px',
          marginBottom: '30px',
          marginTop: '20px',
        }}
      />
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
          <h2 className="text-center">
            Sorry, looks like your wallet is not <br /> connected.
          </h2>
          <p className="text-center text-black mt-3">
            Connect your wallet below to view your liquidity positions.
          </p>
        </div>
        <div className="d-flex justify-content-center my-4">
          <Button
            style={{ background: '#E97A72', borderRadius: '16px' }}
            className="fs-bold text-white"
          >
            Connect Wallet
          </Button>
        </div>
      </Card>
    </Container>
  )
}
