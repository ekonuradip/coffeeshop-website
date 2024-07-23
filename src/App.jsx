import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Cafe from './components/Cafe'
import About from './components/About'
import Menu from './components/Menu'
import Review from './components/Review'
import Footer from './components/Footer'


const App = () => {
  return (
    <div className=''>
      <Navbar/>
      <main>
        <div id="home">
          <Home/>
        </div>
        <div id="cafe">
          <Cafe/>
        </div>
        <div id="about">
          <About/>
        </div>
        <div id="menu">
          <Menu/>
        </div>
        <div id="review">
          <Review/>
        </div>
      </main>
      <Footer/>
    </div>
  )
}

export default App
