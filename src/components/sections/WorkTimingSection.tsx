export function WorkTimingSection() {
  return (
    <section className="section section--work" aria-labelledby="work-title">
      <div className="section-shell">
        <div className="split-grid split-grid--reverse">
          <div className="split-grid__visual split-grid__visual--work" aria-hidden="true">
            <article className="mini-card mini-card--profile">
              <div className="avatar"></div>
              <div>
                <strong>Dr. Priya Menon</strong>
                <p>Ayurveda Consultant</p>
              </div>
            </article>
            <article className="session-switcher session-switcher--stacked">
              <div className="session-switcher__pill session-switcher__pill--active">Flexible</div>
              <div className="session-switcher__pill">Balanced</div>
            </article>
          </div>

          <div className="split-grid__content">
            <h3>Flexible Work Timing</h3>
            <p>
              We recognize the importance of managing your time. With Amrutam, you can choose
              your availability and focus on care without sacrificing balance.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
