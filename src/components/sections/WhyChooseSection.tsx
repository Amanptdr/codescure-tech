import { SectionHeading } from '../ui/SectionHeading'
import CallIcon from '../../assets/CallIcon.svg'
import Calling1 from '../../assets/Calling1.svg'
import Calling from '../../assets/Calling.svg'

export function WhyChooseSection() {
  return (
    <section className="feature-call-wrapper">
      <div className="feature-call-shell">
        <SectionHeading
          title="Join Our Circle of Care"
          subtitle="Becoming a part of Amrutam is simple"
        />

        <div className="feature-call-section">
          <div className="feature-call-left" aria-hidden="true">
            <div className="svg svg-1">
              <img src={CallIcon} alt="" />
            </div>

            <div className="svg svg-2">
              <img src={Calling} alt="" />
            </div>

            <div className="svg svg-3">
              <img src={Calling1} alt="" />
            </div>
          </div>

          <div className="feature-call-right">
            <h2>
              Instant <span>FREE</span> 5-Mins Call
            </h2>

            <p>
              We understand the importance of building trust with your patients.
              That's why Amrutam offers a free 5-minute call, helping you connect
              instantly and foster lasting patient relationships with ease.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
