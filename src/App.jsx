import Banner from "./components/Banner/Banner"
import FactsSection from "./components/FactsSection/FactsSection"
import Features from "./components/Features/Features"
import Footer from "./components/Footer/Footer"
import Intergration from "./components/Intergration/Intergration"
import Container from "./components/Layout/Container"
import Navbar from "./components/Navbar/Navbar"
import OurServices from "./components/OurServices/OurServices"
import Platform from "./components/Platform/Platform"
import Pricing from "./components/Pricing/Pricing"
import Testimonial from "./components/Testimonial/Testimonial"
import TestimonialSlider from "./components/Testimonial/TestimonialSlider"


function App() {

  return (
    <>
    <Navbar/>
    <Banner/>
    <Platform/>
    <Features/>
    <Intergration/>
    <OurServices/>
    <FactsSection/>
    <Pricing/>
    <Testimonial/>
    <Footer/>
    </>
  )
}

export default App
