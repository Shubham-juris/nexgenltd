import React from 'react'
import Medician from '../../Components/Medicians/Medician'
import Service from '../../Components/Medicians/Service'
import MedicianHome from '../../Components/Medicians/MedicianHome'

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
