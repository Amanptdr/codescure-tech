export function Header() {
  return (
    <header className="site-header" id="top">
      <div className="site-header__top">
        <p className="site-header__announce">Register Yourself As An Amrutam Doctor</p>
        <a className="site-header__join" href="#join-circle">
          <svg
            className="site-header__join-icon"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              d="M12 12.2a4.1 4.1 0 1 0-4.1-4.1 4.1 4.1 0 0 0 4.1 4.1Zm0 1.8c-3.54 0-6.4 2.17-6.4 4.85V20h12.8v-1.15c0-2.68-2.86-4.85-6.4-4.85Zm7.7-5.8h1.1v-1.7h-1.1V5.4h-1.7v2.1H15.9v1.7h2.1v2.1h1.7Z"
              fill="currentColor"
            />
          </svg>
          <span>Join Now</span>
        </a>
      </div>

      <div className="site-header__nav-shell">
        <div className="site-header__nav-inner">
          <a className="site-header__brand" href="#top" aria-label="Amrutam">
            AMRUTAM
          </a>

          <nav className="site-header__nav" aria-label="Primary">
            <a className="site-header__link" href="#about">
              About Us
            </a>
            <a className="site-header__link" href="#onboarding">
              Onboarding
            </a>
            <a className="site-header__link" href="#faq">
              FAQ
            </a>
            <a className="site-header__link" href="#testimonials">
              Testimonials
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}
