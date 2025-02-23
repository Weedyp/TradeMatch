import './App.css'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import CardSection from './components/CardsSection'
import { Footer } from './components/Footer'
import CompareTable from './components/CompareTable'
import ReviewCarousel from './components/ReviewCarousel'
import { MatchTest } from './components/Matchtest'
function App() {

  return (
    <>
      <div className="bg-[#011A30] min-h-screen">
        <Navbar />

        <div className='max-w-7xl mx-auto pt-16 px-6 '>
          <HeroSection />
        </div>

        <div className="pt-32">
          <CardSection />
        </div>

        <div className="pt-0">
          <CompareTable />
        </div>
        <ReviewCarousel />
        <MatchTest />
        <Footer />
      </div>
    </>
  )
}

export default App
