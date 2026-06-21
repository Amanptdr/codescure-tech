import Vector from '../../assets/Vector.svg'
import CallIcon from '../../assets/CallIcon.svg'
import Calling from '../../assets/Calling.svg'
import Calling1 from '../../assets/Calling1.svg'

export function FeatureVisualShowcase() {
  return (
    <div className="feature-showcase" aria-hidden="true">
      <img className="feature-showcase__blob" src={Vector} alt="" />
      <img className="feature-showcase__icon" src={CallIcon} alt="" />
      <img className="feature-showcase__card feature-showcase__card--large" src={Calling} alt="" />
      <img className="feature-showcase__card feature-showcase__card--small" src={Calling1} alt="" />
    </div>
  )
}
