import { useState, useEffect, useRef, useLayoutEffect } from 'react'
import '../css/Vwheel.css'

function Vwheel() {
  const carousel = useRef(null)
  const [width, setWidth] = useState(0)
  const [height, setHeight] = useState(0)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [isHorizontal, setIsHorizontal] = useState(true)
  const [cellsRange, setCellsRange] = useState(9)
  const cells = document.querySelectorAll('carousel__cell')
  // const cellWidth = width
  // const cellHeight = height
  let rotateFn = isHorizontal ? 'rotateY' : 'rotateX'
  let cellCount
  let radius
  let theta

  // let cellAngle

  useLayoutEffect(() => {
    setWidth(carousel.current.offsetWidth)
    setHeight(carousel.current.offsetHeight)
  }, [])

  useEffect(() => {
    cellCount = cellsRange
    theta = 360 / cellCount
    // rotateFn = isHorizontal ? 'rotateY' : 'rotateX'
    const angle = theta * selectedIndex * -1
    carousel.current.style.transform = `translateZ(${-radius}px) ${rotateFn}(${angle}deg)`
  }, [selectedIndex])

  // const rotateC = () => {
  //   cellCount = cellsRange
  //   theta = 360 / cellCount
  //   rotateFn = isHorizontal ? 'rotateY' : 'rotateX'
  //   const angle = theta * selectedIndex * -1
  //   carousel.current.style.transform = `translateZ(${-radius}px) ${rotateFn}(${angle}deg)`
  // }

  // function rotateCarousel() {
  //   const angles = theta * selectedIndex * -1
  //   // eslint-disable-next-line prefer-template, prettier/prettier
  //   carousel.current.style.transform =
  //     // eslint-disable-next-line prefer-template
  //     'translateZ(' + -radius + 'px) ' + rotateFn + '(' + angles + 'deg)'
  // }

  const horiz = () => {
    setIsHorizontal(true)
    console.log('Horizontal True')
  }
  const verti = () => {
    setIsHorizontal(false)
    console.log('Horizontal False')
  }

  function changeCarousel() {
    cellCount = cellsRange
    theta = 360 / cellCount
    const cellSize = isHorizontal ? width : height
    // eslint-disable-next-line prettier/prettier
    radius = Math.round(cellSize / 2 / Math.tan(Math.PI / cellCount))
    for (let i = 0; i < cells.length; i + 1) {
      const cell = cells[i]
      if (i < cellCount) {
        // visible cell
        rotateFn = isHorizontal ? 'rotateY' : 'rotateX'
        cell.style.opacity = 1
        const cellAngle = theta * i
        // eslint-disable-next-line prefer-template
        cell.style.transform = rotateFn + '(' + cellAngle + 'deg) translateZ(' + radius + 'px)'
        console.log(rotateFn)
      } else {
        // hidden cell
        cell.style.opacity = 0
        cell.style.transform = 'none'
      }
    }
    // rotateCarousel()
  }

  function onOrientationChange() {
    rotateFn = isHorizontal ? 'rotateY' : 'rotateX'
    changeCarousel()
  }

  onOrientationChange()

  const increment = () => {
    setSelectedIndex(selectedIndex + 1)
    // eslint-disable-next-line no-plusplus
    // selectedIndex = () => selectedIndex + 1
    console.log('Increment')
    // rotateCarousel()
  }
  const decrement = () => {
    setSelectedIndex(selectedIndex - 1)
    // eslint-disable-next-line no-plusplus
    // selectedIndex = () => selectedIndex - 1
    console.log('Decrement')
    // rotateCarousel()
  }

  return (
    <>
      <div className="scene">
        <div className="carousel" ref={carousel}>
          <div className="carousel__cell">1</div>
          <div className="carousel__cell">2</div>
          <div className="carousel__cell">4</div>
          <div className="carousel__cell">3</div>
          <div className="carousel__cell">5</div>
          <div className="carousel__cell">6</div>
          <div className="carousel__cell">7</div>
          <div className="carousel__cell">8</div>
          <div className="carousel__cell">9</div>
          <div className="carousel__cell">10</div>
          <div className="carousel__cell">11</div>
          <div className="carousel__cell">12</div>
          <div className="carousel__cell">13</div>
          <div className="carousel__cell">14</div>
          <div className="carousel__cell">15</div>
        </div>
      </div>

      <div className="carousel-options">
        <p>
          W:{width} H:{height}
        </p>
        <p>
          <label htmlFor="cells">
            {cellsRange} Cells
            <input
              className="cells-range"
              type="range"
              min="3"
              max="15"
              value={cellsRange}
              id="cells"
              onChange={(e) => setCellsRange(e.target.value)}
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
export default Vwheel
