import { SectionHeading } from '../ui/SectionHeading'
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
            <div className="orb orb--large"></div>
            <article className="mini-card mini-card--floating mini-card--top">
              <img src={CallIcon} alt="" />
              <div>
                <strong>Free Phone Screening</strong>
                <p>Connect with new patients before the visit.</p>
              </div>
            </article>
            <article className="mini-card mini-card--floating mini-card--right">
              <img src={Calling} alt="" />
              <div>
                <strong>Instant voice triage</strong>
                <p>Quick context, better recommendations.</p>
              </div>
            </article>
            <article className="mini-card mini-card--floating mini-card--left">
              <img src={Calling1} alt="" />
              <div>
                <strong>Warm introductions</strong>
                <p>Feel confident before the first consult.</p>
              </div>
            </article>
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
