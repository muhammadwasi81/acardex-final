import React from 'react'
import './App.css'
import Decenteralized from './components/Decenteralized'
import Exchange from './components/Exchange'
import Footer from './components/Footer'
import Global from './components/Global'
import Header from './components/Header'

export default function App() {
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
