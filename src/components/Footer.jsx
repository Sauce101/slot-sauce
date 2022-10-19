import PropTypes from 'prop-types'

function Footer({ handleRng, handleRngReverse }) {
  return (
    <footer className="bg-gray-200 text-center fixed left-0 right-0 bottom-0 flex justify-between lg:justify-around">
      <button
        type="button"
        onClick={handleRngReverse}
        className="bg-slate-800 hover:bg-slate-700 text-white font-bold py-2 px-4 border border-slate-900">
        SPIN
      </button>
      <div className="text-gray-700 text-center p-3 font-normal text-base">
        © 2022 Michael Saucedo
      </div>
      <button
        type="button"
        onClick={handleRng}
        className="bg-slate-800 hover:bg-slate-700 text-white font-bold py-2 px-4 border border-slate-900">
        SPIN
      </button>
    </footer>
  )
}

Footer.propTypes = {
  handleRng: PropTypes.func.isRequired,
  handleRngReverse: PropTypes.func.isRequired,
}

export default Footer
