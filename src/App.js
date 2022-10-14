import { useState } from 'react'
import Footer from './components/Footer'
import HomeNavbar from './components/HomeNavbar'
import Zwheel from './components/Zwheel'
import './css/Zwheel.css'

function App() {
  const [isHorizontal, setIsHorizontal] = useState(false)
  const [rng, setRng] = useState(false)
  const [cellCount, setCellCount] = useState(9)

  const mql = window.matchMedia('(orientation: portrait)')
  mql.onchange = (e) => {
    if (e.matches) {
      setIsHorizontal(true)
    } else {
      setIsHorizontal(false)
    }
  }

  const handleRng = () => {
    setRng(!rng)
  }

  return (
    <div className="flex flex-col min-h-screen pb-[48px] bg-slate-700">
      <HomeNavbar cellCount={cellCount} setCellCount={setCellCount} />
      <div className="flex flex-row portrait:flex-col justify-center my-auto">
        <div className="flex flex-col">
          <Zwheel rng={rng} cellCount={cellCount} isHorizontal={isHorizontal} />
        </div>
        <div className="flex flex-col">
          <Zwheel rng={rng} cellCount={cellCount} isHorizontal={isHorizontal} />
        </div>
        <div className="flex flex-col">
          <Zwheel rng={rng} cellCount={cellCount} isHorizontal={isHorizontal} />
        </div>
      </div>
      <Footer handleRng={handleRng} />
    </div>
  )
}

export default App
