import { SectionHeading } from '../ui/SectionHeading'
import Vector from '../../assets/Vector.svg'
import CallIcon from '../../assets/CallIcon.svg'
import Calling1 from '../../assets/Calling1.svg'
import Calling from '../../assets/Calling.svg'

export function WhyChooseSection() {
  return (
    <section className="section section--why" id="about" aria-labelledby="why-title">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Why Doctors Choose Us?"
          title="Why Doctors Choose Us?"
          subtitle="Unlock the benefits of smarter healthcare management and patient care"
        />

        <div className="split-grid split-grid--reverse">
          <div className="split-grid__visual split-grid__visual--freecall" aria-hidden="true">
            <img className="split-grid__blob" src={Vector} alt="" />
            <img className="split-grid__icon" src={CallIcon} alt="" />
            <img className="split-grid__card split-grid__card--large" src={Calling} alt="" />
            <img className="split-grid__card split-grid__card--small" src={Calling1} alt="" />
          </div>

          <div className="split-grid__content">
            <h3>Instant FREE 5-Mins Call</h3>
            <p>
              We understand the importance of building trust with your patients. That's why
              Amrutam offers a free 5-minute call, helping you connect instantly and foster
              lasting patient relationships with ease.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
