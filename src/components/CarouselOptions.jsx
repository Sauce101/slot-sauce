import '../css/Zwheel.css'
// eslint-disable-next-line react/prop-types
function CarouselOptions({ cellCount, setCellCount }) {
  return (
    <div className="carousel-options mt-auto hidden">
      {/* <p>
          W:{width} H:{height}
        </p> */}
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
      {/* <div>
        <p style={{ textAlign: 'center' }}>
          <button
            type="button"
            className="next-button focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
            onClick={increment}>
            SPIN
          </button>
          <button
            type="button"
            className="previous-button focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
            onClick={decrement}>
            - -
          </button>
        </p>
      </div> */}
      {/* <div>
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
      </div> */}
    </div>
  )
}
export default CarouselOptions
