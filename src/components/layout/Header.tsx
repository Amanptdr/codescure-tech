export function Header() {
  return (
    <header className="site-header">
      <div className="site-header__top">
        <p className="site-header__announce">Register Yourself As An Amrutam Doctor</p>
        <a className="site-header__join" href="#join">
          <svg
            className="site-header__join-icon"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M12 3a4 4 0 0 0-4 4c0 1.31.63 2.47 1.6 3.2A6 6 0 0 0 4 16v2h16v-2a6 6 0 0 0-5.6-5.8A4 4 0 0 0 12 3Zm6 8a3 3 0 0 0-2.2.95A7.98 7.98 0 0 1 18 18h2v-2a4 4 0 0 0-2-3.46Zm-12 0a4 4 0 0 0-2 3.46V18h2a7.98 7.98 0 0 1 2.2-6.05A3 3 0 0 0 6 11Z" />
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
