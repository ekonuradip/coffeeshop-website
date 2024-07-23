import React from 'react'
import CafeCard from '../layouts/CafeCard'
import img1 from "../assets/img/img1.jpg"
import img2 from "../assets/img/img2.jpg"
import img3 from "../assets/img/img3.jpg"

const Menu = () => {
  return (
    <div className=' min-h-screen flex flex-col justify-center items-center lg:px-32 px-5'>
      <h1 className=' text-4xl font-semibold text-center lg:pt-8 pt-24 pb-10'>Premium Menu</h1>
      <div className='flex flex-wrap gap-8 justify-center'>
        <CafeCard img={img1} title="Cappucino" price="Rp. 25000"/>       
        <CafeCard img={img2} title="Espresso" price="Rp. 5.000" />
        <CafeCard img={img3} title="Coffee Milk" price="Rp. 15.000" /> 
      </div>
    </div>
  )
}

export default Menu
