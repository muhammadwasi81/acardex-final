import React from 'react'
import Navbar from './connect-wallet/Navbar'
import System from './connect-wallet/System'
import Pools from './connect-wallet/Pools'
import '../App.css'

export default function Home() {
  return (
    <>
      <Navbar />
      <System />
      <Pools />
    </>
  )
}
