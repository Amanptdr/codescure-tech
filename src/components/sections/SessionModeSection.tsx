export function SessionModeSection() {
  return (
    <section className="section section--session" aria-labelledby="session-title">
      <div className="section-shell">
        <div className="split-grid split-grid--reverse">
          <div className="split-grid__visual split-grid__visual--session" aria-hidden="true">
            <article className="session-switcher">
              <div className="session-switcher__pill session-switcher__pill--active">Chat</div>
              <div className="session-switcher__pill">Voice</div>
              <div className="session-switcher__pill">Video</div>
            </article>
            <article className="board-card board-card--stats">
              <div className="board-card__header">Sessions this week</div>
              <div className="stat-row">
                <strong>128</strong>
                <span>completed consults</span>
              </div>
            </article>
          </div>

          <div className="split-grid__content">
            <h3>Choose Your Session Mode</h3>
            <p>
              Amrutam offers you to connect with patients via instant chat, instant call,
              or scheduled video. Each option provides flexibility and personalized care.
            </p>
            <div className="feature-list feature-list--compact">
              <article className="feature-card">
                <strong>Instant Chat</strong>
                <span>Respond quickly when patients need guidance.</span>
              </article>
              <article className="feature-card">
                <strong>Scheduled Video</strong>
                <span>Plan deeper consults around your availability.</span>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
