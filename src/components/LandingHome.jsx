import React from 'react'
import Decenteralized from './landing-page/Decenteralized'
import Exchange from './landing-page/Exchange'
import Footer from './landing-page/Footer'
import Global from './landing-page/Global'
import Header from './landing-page/Header'

export default function LandingHome() {
  return (
    <>
      <Header />
      <Decenteralized />
      <Exchange />
      <Global />
      <Footer />
    </>
  )
}
