import PropTypes from 'prop-types'

function HomeNavbar({ cellCount, setCellCount }) {
  console.log(cellCount)
  console.log(setCellCount)
  return (
    <nav className="sticky top-0 py-3 bg-slate-800 flex justify-center z-10">
      <label htmlFor="steps-range" className="text-base font-medium text-center text-gray-300">
        Reel Symbols {cellCount}
        <input
          id="steps-range"
          type="range"
          min={3}
          max={15}
          value={cellCount}
          step={1}
          onChange={(e) => setCellCount(e.target.value)}
          className="w-full h-3 rounded-lg appearance-none cursor-pointer bg-gray-700"
        />
      </label>
    </nav>
  )
}

HomeNavbar.propTypes = {
  cellCount: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  setCellCount: PropTypes.func.isRequired,
}

export default HomeNavbar
