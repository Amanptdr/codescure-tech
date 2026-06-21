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
          <div className="hero-section__badge hero-section__badge--top">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2.5c-.5 0-1 .2-1.4.6-.4.4-.6.9-.6 1.4 0 .8.4 1.4 1 1.8V8h2V6.3c.6-.4 1-1.1 1-1.8 0-.5-.2-1-.6-1.4-.4-.4-.9-.6-1.4-.6Zm0 4.8c-2.9 0-5.4 2.3-5.4 5.2 0 1.5.6 2.9 1.7 3.9 1 .9 2.3 1.4 3.7 1.4 1.4 0 2.7-.5 3.7-1.4 1.1-1 1.7-2.4 1.7-3.9 0-2.9-2.5-5.2-5.4-5.2Zm0 2c1.8 0 3.4 1.4 3.4 3.2 0 1.8-1.6 3.2-3.4 3.2s-3.4-1.4-3.4-3.2C8.6 10.7 10.2 9.3 12 9.3Z" />
            </svg>
          </div>
          <div className="hero-section__badge hero-section__badge--bottom-left">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 3.5a1 1 0 0 1 1 1V6h5.5a1 1 0 0 1 1 1v9a2.5 2.5 0 0 1-2.5 2.5H7A2.5 2.5 0 0 1 4.5 16V7a1 1 0 0 1 1-1H11V4.5a1 1 0 0 1 1-1Zm5.5 5h-11V16a.5.5 0 0 0 .5.5h10.5a.5.5 0 0 0 .5-.5V8.5Z" />
            </svg>
          </div>
          <div className="hero-section__badge hero-section__badge--bottom-right">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M7 3.5a1 1 0 0 1 1 1V6h8V4.5a1 1 0 1 1 2 0V6h1a2 2 0 0 1 2 2v9a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 5 17V8a2 2 0 0 1 2-2h1V4.5a1 1 0 0 1 1-1Z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
