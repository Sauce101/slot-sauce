import { useState, useRef, useEffect } from 'react'
import '../css/App.css'

function Wheel() {
  const [count, setCount] = useState(0)
  const cellCount = 9
  const carousel = useRef()
  const angle = (count / cellCount) * -360
  // function randomNumberInRange(min, max) {
  //   // 👇️ get number between min (inclusive) and max (inclusive)
  //   return Math.floor(Math.random() * (max - min + 1)) + min
  // }

  useEffect(() => {
    carousel.current.style.transform = `translateZ(-288px) rotateY(${angle}deg)`
  }, [count])
  const increment = () => {
    // const x = randomSpin
    // setCount(count + randomNumberInRange(1, 9))
    setCount(count + 1)
    console.log('Increment')
  }
  const decrement = () => {
    setCount(count - 1)
    console.log('Decrement')
  }

  return (
    <>
      <div className="scene">
        <div className="carousel" ref={carousel}>
          <div className="carousel__cell">=</div>
          <div className="carousel__cell">777</div>
          <div className="carousel__cell">==</div>
          <div className="carousel__cell">7</div>
          <div className="carousel__cell">===</div>
          <div className="carousel__cell">$</div>
          <div className="carousel__cell">=</div>
          <div className="carousel__cell">7 7</div>
          <div className="carousel__cell">==</div>
        </div>
      </div>
      <p style={{ textAlign: 'center' }}>
        <button
          type="button"
          className="next-button focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          onClick={increment}>
          Increment
        </button>
        <button
          type="button"
          className="previous-button focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          onClick={decrement}>
          Decrement
        </button>
      </p>
    </>
  )
}
export default Wheel
