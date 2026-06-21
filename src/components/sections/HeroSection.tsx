import heroGroup from '../../assets/hero-group.png'

export function HeroSection() {
  return (
    <section className="hero-section" id="hero">
      <div className="hero-section__frame">
        <div className="hero-section__background" aria-hidden="true" />

        <div className="hero-section__copy">
          <p className="hero-section__eyebrow">Namaste, Welcome to Amrutam</p>
          <h1 className="hero-section__title">
            Join Amrutam - <span>Grow Your Practice</span>
          </h1>
          <p className="hero-section__description">
            Connect with more patients, set your own schedule,
            <br />
            and grow your Ayurvedic practice effortlessly.
          </p>

          <a className="hero-section__cta" href="#join">
            Join Now
          </a>

          <dl className="hero-section__stats">
            <div className="hero-section__stat">
              <dt>500+</dt>
              <dd>Average Active Users</dd>
            </div>
            <div className="hero-section__stat">
              <dt>40+</dt>
              <dd>Average daily free calls</dd>
            </div>
          </dl>
        </div>

        <div className="hero-section__art" aria-hidden="true">
          <img
            className="hero-section__art-image"
            src={heroGroup}
            alt=""
          />
        </div>
      </div>
    </section>
  )
}
