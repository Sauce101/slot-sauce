import { useState, useEffect } from 'react'
import Footer from './components/Footer'
import HomeNavbar from './components/HomeNavbar'
import Reel from './components/Reel'
import './css/Reel.css'

function App() {
  const [isHorizontal, setIsHorizontal] = useState(false)
  const [cellCount, setCellCount] = useState(7)
  const [rng, setRng] = useState(false)
  const [rngReverse, setRngReverse] = useState(false)

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
  const handleRngReverse = () => {
    setRngReverse(!rngReverse)
  }

  useEffect(() => {
    if (mql.matches) {
      setIsHorizontal(true)
    } else {
      setIsHorizontal(false)
    }
  }, [])

  return (
    <div className="flex flex-col min-h-screen w-full pb-[48px] bg-slate-700 overflow-hidden">
      <HomeNavbar cellCount={cellCount} setCellCount={setCellCount} />
      <div className="flex flex-row portrait:flex-col justify-center items-center my-auto">
        <Reel rng={rng} rngReverse={rngReverse} cellCount={cellCount} isHorizontal={isHorizontal} />
        <Reel rng={rng} rngReverse={rngReverse} cellCount={cellCount} isHorizontal={isHorizontal} />
        <Reel rng={rng} rngReverse={rngReverse} cellCount={cellCount} isHorizontal={isHorizontal} />
      </div>
      <Footer handleRng={handleRng} handleRngReverse={handleRngReverse} />
    </div>
  )
}

export default App
