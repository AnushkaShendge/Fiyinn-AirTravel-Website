import React from 'react'
import { ContactUsComp } from '../../components/ContactUsComp'
import { HeaderComp } from '../../components/HeaderComp'
import { Services } from '../../components/Services'
import { LowestFare } from '../../components/LowestFare'
import { FooterComp } from '../../components/Footer'

export const LandingPage = () => {
  return (
    <div className='w-screen h-screen'>
      <ContactUsComp />
      <HeaderComp />
      <Services />
      <LowestFare />
      <FooterComp />
    </div>
  )
}