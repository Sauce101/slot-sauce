// eslint-disable-next-line react/prop-types
function HomeNavbar({ cellCount, setCellCount }) {
  return (
    <nav className="sticky top-0 py-3 bg-slate-800 flex justify-center z-10">
      <label htmlFor="steps-range" className="text-base font-medium text-gray-300">
        Reel Symbols {cellCount} &nbsp;
        <input
          id="steps-range"
          type="range"
          min="3"
          max="15"
          value={cellCount}
          step="1"
          onChange={(e) => setCellCount(e.target.value)}
          className="w-full h-3 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
        />
      </label>
    </nav>
  )
}
export default HomeNavbar
