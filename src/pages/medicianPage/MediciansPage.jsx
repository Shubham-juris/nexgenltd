import React from 'react'
import MedicianHome from '../../Components/medicians/MediciansHome'
import Medician from '../../Components/medicians/Medicians'
import Service from '../../Components/medicians/Services'

const MedicianPage = () => {
  return (
    <>
    <MedicianHome/>
      <Medician/>
      <Service/>
    </>
  )
}

export default MedicianPage
