export function JourneySection() {
  return (
    <section className="section section--journey" aria-labelledby="journey-title">
      <div className="section-shell">
        <div className="journey-grid">
          <article className="phone-mock">
            <div className="phone-mock__screen"></div>
          </article>
          <article className="phone-mock phone-mock--center">
            <div className="phone-mock__screen"></div>
          </article>
          <article className="phone-mock">
            <div className="phone-mock__screen"></div>
          </article>
        </div>
        <div className="journey-cta">
          <h3>Today&apos;s Healing Journey</h3>
          <a className="cta-button" href="#join-circle">
            Join Now
          </a>
        </div>
      </div>
    </section>
  )
}
