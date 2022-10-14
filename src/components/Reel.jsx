import { forwardRef } from 'react'
import symbols from './symbols'

// eslint-disable-next-line react/prop-types
function Reel({ carousel, ref }) {
  return (
    <div className="scene mx-auto">
      <div className="carousel" ref={carousel}>
        {symbols.map((c, index) => (
          <div
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            className={`carousel__cell flex bg-white ${c.transform}`}
            ref={(element) => {
              // eslint-disable-next-line react/prop-types, no-param-reassign
              ref.current[index] = element
            }}>
            <img src={c.src} alt="..." className="h-24 w-24 m-auto" />
          </div>
        ))}
      </div>
    </div>
  )
}
export default forwardRef(Reel)
