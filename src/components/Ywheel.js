import { useState, useEffect, useRef, useLayoutEffect } from 'react'
import '../css/Ywheel.css'
// import cherry from '../assets/images/cherry.png'

function Ywheel() {
  const carousel = useRef(null)
  const refs = useRef([])
  const cells = []
  const [cellCount, setCellCount] = useState(9)
  const [selectedIndex, setSelectedIndex] = useState(null)
  const [isHorizontal, setIsHorizontal] = useState(true)
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  let rotateFn = isHorizontal ? 'rotateY' : 'rotateX'
  let radius
  let theta
  let cellAngle

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
    console.log('Helo')
    console.log(cells.length)
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

  const increment = () => {
    setSelectedIndex(selectedIndex + 1)
    console.log('Increment')
  }
  const decrement = () => {
    setSelectedIndex(selectedIndex - 1)
    console.log('Decrement')
  }

  const horiz = () => {
    setIsHorizontal(true)
    console.log('Horizontal True')
    changeCarousel()
  }
  const verti = () => {
    setIsHorizontal(false)
    console.log('Horizontal False')
    changeCarousel()
  }

  const CellNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

  return (
    <>
      <div className="scene">
        <div className="carousel" ref={carousel} id="car">
          {CellNum.map((c, index) => (
            <div
              // eslint-disable-next-line react/no-array-index-key
              key={index}
              className="carousel__cell"
              ref={(element) => {
                refs.current[index] = element
              }}>
              {c}
            </div>
          ))}
        </div>
      </div>

      <div className="carousel-options">
        <p>
          W:{width} H:{height}
        </p>
        <p>
          <label htmlFor="cells">
            {cellCount} Cells
            <input
              className="cells-range"
              type="range"
              min="3"
              max="15"
              value={cellCount}
              id="cells"
              onChange={(e) => setCellCount(e.target.value)}
            />
          </label>
        </p>
        <div>
          <p style={{ textAlign: 'center' }}>
            <button
              type="button"
              className="next-button focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              onClick={increment}>
              + +
            </button>
            <button
              type="button"
              className="previous-button focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              onClick={decrement}>
              - -
            </button>
          </p>
        </div>
        <div>
          <p style={{ textAlign: 'center' }}>
            <button
              type="button"
              className="next-button focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              onClick={horiz}>
              Horizontal
            </button>
            <button
              type="button"
              className="previous-button focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
              onClick={verti}>
              Vertical
            </button>
          </p>
        </div>
      </div>
    </>
  )
}
export default Ywheel
