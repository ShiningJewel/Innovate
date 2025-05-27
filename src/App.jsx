import Banner from "./components/Banner/Banner"
import FactsSection from "./components/FactsSection/FactsSection"
import Features from "./components/Features/Features"
import Intergration from "./components/Intergration/Intergration"
import Container from "./components/Layout/Container"
import Navbar from "./components/Navbar/Navbar"
import OurServices from "./components/OurServices/OurServices"
import Platform from "./components/Platform/Platform"


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
    </>
  )
}

export default App
