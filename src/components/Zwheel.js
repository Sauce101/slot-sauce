import { useState, useEffect, useRef, useLayoutEffect } from 'react'
// import symbols from './symbols'
import symbols2 from './symbols2'

// eslint-disable-next-line react/prop-types
function Zwheel({ isHorizontal, rng, cellCount }) {
  const carousel = useRef(null)
  const refs = useRef([])
  const cells = []
  // const [cellCount, setCellCount] = useState(9)
  const [selectedIndex, setSelectedIndex] = useState(null)
  // const [isHorizontal, setIsHorizontal] = useState(false)
  // const isHorizontal = false
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  let rotateFn = isHorizontal ? 'rotateY' : 'rotateX'
  let radius
  let theta
  let cellAngle

  function randomNumberInRange(min, max) {
    // 👇️ get number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min
  }

  useEffect(() => {
    setSelectedIndex(selectedIndex + randomNumberInRange(2, 6))
    // setSelectedIndex(selectedIndex + 1)
  }, [rng])

  // eslint-disable-next-line no-restricted-syntax
  for (const value of refs.current) {
    cells.push(value)
  }

  useLayoutEffect(() => {
    // eslint-disable-next-line no-restricted-syntax
    for (const value of refs.current) {
      cells.push(value)
    }
  }, [])

  useLayoutEffect(() => {
    setWidth(carousel.current.offsetWidth)
    setHeight(carousel.current.offsetHeight)
    setSelectedIndex(0)
  }, [])

  useEffect(() => {
    // cellCount = cellsRange
    theta = 360 / cellCount
    rotateFn = isHorizontal ? 'rotateY' : 'rotateX'
    const angle = theta * selectedIndex * -1
    carousel.current.style.transform = `translateZ(${-radius}px) ${rotateFn}(${angle}deg)`
  }, [selectedIndex])

  function rotateCarousel() {
    const angles = theta * selectedIndex * -1
    carousel.current.style.transform = `translateZ(${-radius}px) ${rotateFn}(${angles}deg)`
  }

  function changeCarousel() {
    theta = 360 / cellCount
    const cellSize = isHorizontal ? width : height
    radius = Math.round(cellSize / 2 / Math.tan(Math.PI / cellCount))
    // console.log('Helo')
    // console.log(cells.length)
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < cells.length; i++) {
      const cell = cells[i]
      if (i < cellCount) {
        cell.style.opacity = 1
        cellAngle = theta * i
        cell.style.transform = `${rotateFn}(${cellAngle}deg) translateZ(${radius}px)`
        rotateCarousel()
      } else {
        cell.style.opacity = 0
        cell.style.transform = 'none'
      }
    }
  }

  function onOrientationChange() {
    rotateFn = isHorizontal ? 'rotateY' : 'rotateX'
    changeCarousel()
  }
  // set initials
  onOrientationChange()

  // const increment = () => {
  //   setSelectedIndex(selectedIndex + 1)
  //   console.log('Increment')
  // }
  // const decrement = () => {
  //   setSelectedIndex(selectedIndex - 1)
  //   console.log('Decrement')
  // }

  // const horiz = () => {
  //   setIsHorizontal(true)
  //   console.log('Horizontal True')
  //   changeCarousel()
  // }
  // const verti = () => {
  //   setIsHorizontal(false)
  //   console.log('Horizontal False')
  //   changeCarousel()
  // }

  return (
    <div className="scene mx-auto">
      <div className="carousel" ref={carousel}>
        {symbols2.map((c, index) => (
          <div
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            className={`carousel__cell flex bg-white ${c.transform}`}
            ref={(element) => {
              refs.current[index] = element
            }}>
            <img src={c.src} alt="..." className="h-24 w-24 m-auto" />
          </div>
        ))}
      </div>
    </div>
  )
}
export default Zwheel
