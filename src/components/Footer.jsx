// eslint-disable-next-line react/prop-types
function Footer({ handleRng }) {
  return (
    <footer className="bg-gray-200 text-center fixed left-0 right-0 bottom-0 flex justify-center">
      <div className="text-gray-700 text-center p-3 font-exo font-normal">
        © 2022 Michael Saucedo
      </div>
      {/* <div className="text-gray-700 p-3 font-normal">© 2022 Michael Saucedo</div> */}
      <button
        type="button"
        onClick={handleRng}
        className="text-center bg-slate-800 hover:bg-slate-700 text-white font-bold py-2 px-4 border border-slate-900 rounded">
        SPIN
      </button>
    </footer>
  )
}
export default Footer
