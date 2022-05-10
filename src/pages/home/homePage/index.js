import React from 'react'
import CartOverLay from '../../../components/cartOverlay'
import SidebarOverlay from '../../../components/sidebarOverlay'
import Featured from './Featured'
import Hero from './Hero'

export default function HomePage() {
  return (
    <div>
        <Hero />
        <SidebarOverlay />
        <CartOverLay />
        <Featured />
    </div>
  )
}
