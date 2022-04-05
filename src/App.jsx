import React from 'react'
import { Route, Switch } from 'react-router-dom'
import LiquidityContainer from './components/connect-wallet/LiquidityContainer'
import LandingHome from './components/LandingHome'
import SwapContainer from './components/swap/SwapContainer'
import QueueContainer from './components/queue/QueueContainer'
import Wallet from './components/Wallet'
import UpdatesContainer from './components/recent-updates/UpdatesContainer'

export default function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={LandingHome} exact />
        <Route path="/wallet" component={Wallet} exact />
        <Route path="/liquidity" component={LiquidityContainer} exact />
        <Route path="/swap" component={SwapContainer} exact />
        <Route path="/queue" component={QueueContainer} exact />
        <Route path="/updates" component={UpdatesContainer} exact />
      </Switch>
    </>
  )
}
