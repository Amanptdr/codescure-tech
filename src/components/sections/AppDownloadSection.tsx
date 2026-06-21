export function AppDownloadSection() {
  return (
    <section className="section section--download" aria-labelledby="download-title">
      <div className="section-shell download-shell">
        <div className="download-copy">
          <h3>Get Started Today - Download the App Now!</h3>
          <p>
            Simplify consultations, manage patients, and grow your practice - all in one platform.
          </p>
          <div className="feature-list feature-list--compact">
            <article className="feature-card">
              <strong>Build Trust with Community</strong>
              <span>Professional setup for patient-first care.</span>
            </article>
            <article className="feature-card">
              <strong>Earn More with Pay</strong>
              <span>Transparent payouts and withdrawal flow.</span>
            </article>
          </div>
          <div className="store-row">
            <div className="store-badge">Get it on Google Play</div>
            <div className="store-badge">Download on the App Store</div>
          </div>
        </div>
        <div className="download-visual" aria-hidden="true">
          <div className="phone-mock phone-mock--download">
            <div className="phone-mock__screen"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
