import { useState } from 'react'
import joinStep1 from '../../assets/join-step-1.png'
import joinStep2 from '../../assets/join-step-2.png'
import joinStep3 from '../../assets/join-step-3.png'
import joinStep4 from '../../assets/join-step-4.png'

const steps = [
  {
    title: 'Step 1: Get your referral code',
    description: 'Contact us to receive your unique referral code.',
    image: joinStep1,
  },
  {
    title: 'Step 2: Register on Amrutam',
    description: 'Sign up on the Amrutam Doctors app or website to join our specialist network.',
    image: joinStep2,
  },
  {
    title: 'Step 3: Complete KYC',
    description: 'Fill in your details and upload the required documents for verification.',
    image: joinStep3,
  },
  {
    title: 'Step 4: Start consulting',
    description: 'Open your profile, set your timings, and begin helping patients.',
    image: joinStep4,
  },
]

export function JoinCircleSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeStep = steps[activeIndex]

  return (
    <section className="section section--join" id="join-circle" aria-labelledby="join-title">
      <div className="section-shell">
        <div className="section-heading section-heading--join">
          <h2 className="section-title">Join Our Circle of Care</h2>
          <p className="section-subtitle">Becoming a part of Amrutam is simple</p>
        </div>

        <div className="join-grid">
          <div className="join-grid__steps" aria-label="Joining steps">
            {steps.map((step, index) => {
              const isActive = index === activeIndex

              return (
                <button
                  key={step.title}
                  type="button"
                  className={`join-step${isActive ? ' join-step--active' : ''}`}
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  aria-pressed={isActive}
                >
                  <strong>{step.title}</strong>
                  <span>{step.description}</span>
                </button>
              )
            })}
          </div>

          <div className="join-grid__visual" aria-live="polite" aria-label="Step preview">
            <div className="join-preview">
              <div className="join-preview__blob" aria-hidden="true" />
              <img
                className="join-preview__image"
                src={activeStep.image}
                alt={activeStep.title}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
