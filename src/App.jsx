import './App.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import About from './components/About'
import Testimonials from './components/Testimonials'
import OurCustomers from './components/OurCustomers'
import Services from './components/Services'
import Hero from './components/Hero'
import WhatSetsUsApart from './components/WhatSetsUsApart'
import WhyChooseUs from './components/ChooseUs'
function App() {
  return (
    <>
      <div>
          <Navbar/>
          <Hero/>
          <About/>
          <WhyChooseUs/>
          <Services/>
          <WhatSetsUsApart/>
          <OurCustomers/>
          <Testimonials/>
          <Footer/>
      </div>
    </>
  )
}

export default App
