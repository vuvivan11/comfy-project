import React from 'react'
import Breadcrumb from '../../../components/Breadcrumb/Breadcrumb'
import CartOverLay from '../../../components/cartOverlay'
import SidebarOverlay from '../../../components/sidebarOverlay'
import About from './About'

export default function AboutPage() {
  return (
    <>
        <Breadcrumb />
        <SidebarOverlay />
        <CartOverLay />
        <About />
    </>
  )
}
