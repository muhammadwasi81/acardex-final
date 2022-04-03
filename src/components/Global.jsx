import React from 'react'
import { Card, Col, Container, Row } from 'react-bootstrap'

export default function Global() {
  return (
    <>
      <Container>
        <div className="my-5">
          <p className="h1 lh-5 text-capitalize text-white text-center">
            Join our global ARCARDEX DEX Bar
          </p>
          <p className="text-white text-center">
            <span className="fw-bold">Chat</span> with our team and community as
            Arcardex dex continues to innovate and bring DeFi to Cardano.
          </p>
        </div>
      </Container>
      <Container className="my-3">
        <Row>
          <Col sm={12} md={6} className="mt-5">
            <Card
              style={{
                background: 'rgba(33, 11, 62, 0.29)',
                borderRadius: '26px',
                border: 'none',
                height: '20rem',
              }}
            >
              <Card.Img
                variant="top"
                src="/assets/twitter.png"
                className="mt-5"
                style={{
                  width: '100px',
                  height: '100px',
                  margin: 'auto',
                }}
              />
              <Card.Body>
                <Card.Text
                  className="text-center
                fw-bold"
                  style={{ color: '#699BF7', fontSize: '20px' }}
                >
                  Twitter
                </Card.Text>
                <Card.Text
                  className="text-center"
                  style={{
                    color: '#699BF7',
                    fontSize: '14px',
                    fontWeight: '500',
                  }}
                >
                  Stay up to date with @ArcardexDex updates on your twitter.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} className="mt-5">
            <Card
              style={{
                background: 'rgba(33, 11, 62, 0.29)',
                borderRadius: '26px',
                border: 'none',
                height: '20rem',
              }}
            >
              <Card.Img
                variant="top"
                src="/assets/reddit.png"
                className="mt-5"
                style={{
                  width: '100px',
                  height: '100px',
                  margin: 'auto',
                }}
              />
              <Card.Body>
                <Card.Text
                  className="text-center
                fw-bold"
                  style={{ color: '#F24E1E', fontSize: '20px' }}
                >
                  Reddit
                </Card.Text>
                <Card.Text
                  className="text-center"
                  style={{
                    color: '#F24E1E',
                    fontSize: '14px',
                    fontWeight: '500',
                  }}
                >
                  Engage with the ArcardexDex community on your subreddit.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} className="mt-5">
            <Card
              style={{
                background: 'rgba(33, 11, 62, 0.29)',
                borderRadius: '26px',
                border: 'none',
                height: '20rem',
              }}
            >
              <Card.Img
                variant="top"
                src="/assets/discord.png"
                className="mt-5"
                style={{
                  width: '100px',
                  height: '100px',
                  margin: 'auto',
                }}
              />
              <Card.Body>
                <Card.Text
                  className="text-center
                fw-bold"
                  style={{ color: '#699BF7', fontSize: '20px' }}
                >
                  Discord
                </Card.Text>
                <Card.Text
                  className="text-center"
                  style={{
                    color: '#699BF7',
                    fontSize: '14px',
                    fontWeight: '500',
                  }}
                >
                  Meet and chat with the devs on our Discord server.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} className="mt-5">
            <Card
              style={{
                background: 'rgba(33, 11, 62, 0.29)',
                borderRadius: '26px',
                border: 'none',
                height: '20rem',
              }}
            >
              <Card.Img
                variant="top"
                src="/assets/medium.png"
                className="mt-5"
                style={{
                  width: '100px',
                  height: '100px',
                  margin: 'auto',
                }}
              />
              <Card.Body>
                <Card.Text
                  className="text-center
                fw-bold"
                  style={{ color: '#699BF7', fontSize: '20px' }}
                >
                  Medium
                </Card.Text>
                <Card.Text
                  className="text-center"
                  style={{
                    color: '#699BF7',
                    fontSize: '14px',
                    fontWeight: '500',
                  }}
                >
                  Read our posts to get more in depth updates on our progress.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  )
}
