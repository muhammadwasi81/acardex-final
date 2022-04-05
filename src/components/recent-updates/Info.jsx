import React from 'react'
import { Container } from 'react-bootstrap'
import LazyShow from '../animation/Lazy'

export default function Info() {
  return (
    <>
      <LazyShow>
        <Container>
          <p className="text-white text-center fw-bold fs-2">
            WEN ACARDEX? Thursday!
          </p>
          <p className="text-white text-center">
            Written Jan 15, 2022 by The AcardexSwap Team
          </p>
          <div className="p-5">
            <p className="text-white fs-4 text-justify">
              The moment we’ve all been waiting for is upon us! Below we’ve laid
              out the most important points you need to keep in mind, as well as
              all the details you need to know about the AcardexSwap DEX launch
              in an easy-to-read FAQ format.
            </p>
            <div>
              <p className="fw-bold text-white">Keys Dates and Takeaways</p>
              <ul className="text-white">
                <li>
                  Thursday, January 20: AcardexSwap will launch as a
                  fully-functional beta decentralized exchange (DEX).
                </li>
                <li>
                  Tuesday, January 25: The first round of ISO rewards will be
                  calculated. ISO participants must delegate ADA to qualifying
                  ISO Scoopers prior to 21:45 UTC on January 25th to be able to
                  earn Acardex for all five ISO rounds. See below for more
                  details. Thursday, January 20: Yield farming Acardex rewards
                  begin. Yield farming will be available for at least the first
                  six months of the AcardexSwap DEX, and during this period, LP
                  tokens staked to yield farming contracts in eligible pools can
                  earn additional Acardex rewards. See below for more details.
                </li>
                <li>
                  Thursday, January 20: Yield farming Acardex rewards begin.
                  Yield farming will be available for at least the first six
                  months of the AcardexSwap DEX, and during this period, LP
                  tokens staked to yield farming contracts in eligible pools can
                  earn additional Acardex rewards. See below for more details.
                </li>
              </ul>
            </div>
            <div>
              <p className="fw-bold text-white">The Details / FAQ</p>
              <ul className="text-white">
                <p className="fw-bold text-white">WEN Acardex?</p>
                <li>
                  The AcardexSwap DEX will go live as a fully-functional beta on
                  Thursday, January 20, 2022. Projects will be allowed to create
                  pools beginning Tuesday, January 18th.
                </li>
                <p className="fw-bold text-white mt-3">HOW (TO) Acardex?</p>
                <p className="text-white">
                  Initially, there will be three ways to acquire Acardex:
                </p>
                <li>
                  Participate in the ISO (available during Cardano epochs 316
                  through 320). Earn yield farming rewards (available January
                  through June). Swap other tokens for Acardex on AcardexSwap
                  and other participating DEXs (this is a change of plans, see
                  the section on the Taste Test on why).
                </li>
                <p className="fw-bold text-white mt-3">WEN ISO?</p>
                <li className="list-unstyled">
                  The ISO will begin as well on Thursday, January 20, and will
                  continue for five epochs, with rewards (5% of the total
                  Acardex supply, 1% per epoch) being distributed based on the
                  snapshots that will be taken at each epoch boundary.
                </li>
                <p className="fw-bold text-white mt-3">
                  To participate in each ISO reward round, you must delegate
                  prior to the follow dates:
                </p>
                <li className="list-unstyled">
                  Round 1: January 25th (21:45 UTC)
                </li>
                <li className="list-unstyled">
                  Round 2: January 30th (21:45 UTC)
                </li>
                <li className="list-unstyled">
                  Round 3: February 4th (21:45 UTC)
                </li>
                <li className="list-unstyled">
                  Round 4: February 9th (21:45 UTC)
                </li>
                <li className="list-unstyled">
                  Round 5: February 14th (21:45 UTC)
                </li>
                <p className="fw-bold text-white mt-3">
                  As long as you are delegated to an official ISO Scooper{' '}
                  <a href="/" style={{ color: 'blue' }}>
                    (find the list here)
                  </a>{' '}
                  before the snapshot is taken, your rewards will be calculated
                  for the epoch you staked in.
                </p>
                <p className="fw-bold text-white mt-3">HOW (TO) ISO?</p>
                <li className="list-unstyled">
                  If you want to make sure you qualify for all five ISO reward
                  rounds, you must have ADA staked with eligible SPOs before
                  21:45 UTC on January 25th. Your reward will be calculated
                  based on the snapshot taken at that time, and at the same time
                  at each subsequent epoch boundary. Details on where and how
                  you will receive your Acardex and how you can check your
                  outstanding rewards will be shared soon.
                </li>
                <p className="fw-bold text-white mt-3">HOW (TO) YIELD FARM?</p>
                <li className="list-unstyled">
                  Yield farming is a form of staking used by DEXs to reduce the
                  volatility of their liquidity pools. You can learn more about
                  yield farming on the SundaeSwap help section here. 500,000
                  Acardex will be allocated daily over at least the first six
                  months of the DEX’s operation to yield farmers participating
                  in the following liquidity pools:
                </li>
                <div className="mt-3">
                  <li>Acardex/ADA</li>
                  <li>LQ/ADA</li>
                  <li>WMT/ADA</li>
                  <li>CARDS/ADA</li>
                </div>
                <p className="text-white mt-3">
                  This list of eligible pools will be adjusted by community vote
                  later as the ecosystem grows and stablecoins launch.
                </p>
                <p className="fw-bold text-white mt-3">WEN TASTE TEST?</p>
                <li className="list-unstyled">
                  While we still stand behind the benefits offered by the Taste
                  Test price-setting procedure we previously announced, the
                  contracts we wrote for the Taste Test were not part of our
                  audit. As we looked at the timelines for our launch, we made
                  the difficult choice not to launch the Acardex token with the
                  Taste Test. This change allows a Acardex / ADA pair to exist
                  at launch and be available for users to swap immediately
                  instead of waiting until after the ISO and the Taste Test. We
                  will continue to develop the Taste Test, and plan to offer
                  this as a service to other projects that choose to launch on
                  the AcardexSwap platform in the future.
                </li>
                <p className="fw-bold text-white mt-3">WHY BETA?</p>
                <li className="list-unstyled">
                  We are launching with a Beta label because, while the DEX’s
                  smart contracts have been fully audited and the DEX will meet
                  all industry standards for security, the implementation of
                  fully decentralized governance will not be immediately
                  possible due to existing transaction size limits on the
                  Cardano blockchain. We will post more on our roadmap to a
                  fully community-controlled DEX shortly.
                </li>
                <p className="fw-bold text-white mt-3">HOW FAST DEX?</p>
                <li className="list-unstyled">
                  <span style={{ color: 'blue' }}>
                    As mentioned a week ago,
                  </span>
                  &nbsp;even the most optimistic performance projections show a
                  backlog of orders during the first few weeks of the DEX’s
                  operation. However, we expect performance to improve as
                  adjustments are made by both the AcardexSwap and Cardano
                  teams. While orders (including swapping, providing liquidity
                  and withdrawing liquidity) may take hours to days to process
                  at first, it’s important to know that everybody’s orders will
                  be processed fairly and in the order they were received and
                  executable. It will also be possible to cancel orders at any
                  time before they are processed by the Scoopers. Canceling
                  orders is not subject to the same queue.
                  <p className="mt-2">
                    We hope you’re all excited as much as we are for this
                    monumental day for AcardexSwap and the Cardano community as
                    a whole!
                  </p>
                </li>
                <p className="mt-2">~ The AcardexSwap Labs Team</p>
              </ul>
            </div>
          </div>
        </Container>
      </LazyShow>
    </>
  )
}
