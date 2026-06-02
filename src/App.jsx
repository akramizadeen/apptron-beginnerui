import { useState } from 'react'
import './App.css'
import HeaderSection from './components/headerSection/HeaderSection'
import HeroSection from './components/heroSection/HeroSection'
import PrinciplesSection from './components/principlesSection/PrinciplesSection'
import AboutSection from './components/aboutSection/AboutSection'
import FooterSection from './components/footerSection/FooterSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="bg-purple-100/40 min-h-screen">
      <HeaderSection />
      <HeroSection />
      <PrinciplesSection />
      <AboutSection />
      <FooterSection />
    </div>
  )
}

export default App
