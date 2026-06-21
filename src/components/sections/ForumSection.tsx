export function ForumSection() {
  return (
    <section className="section section--forum" aria-labelledby="forum-title">
      <div className="section-shell">
        <div className="split-grid">
          <div className="split-grid__content">
            <h3>Forum for Meaningful Connections</h3>
            <p>
              We value your journey in Ayurveda. The Amrutam Forum helps you engage with
              patients, ask questions, share insights, and exchange knowledge with a thoughtful
              community.
            </p>
            <div className="feature-list">
              <article className="feature-card">
                <strong>Ask & answer</strong>
                <span>Thoughtful conversations with peers and patients.</span>
              </article>
              <article className="feature-card">
                <strong>Practice visibility</strong>
                <span>Showcase your expertise in a trusted ecosystem.</span>
              </article>
            </div>
          </div>

          <div className="split-grid__visual split-grid__visual--forum" aria-hidden="true">
            <div className="blob blob--one"></div>
            <article className="board-card board-card--tall">
              <div className="board-card__header">Post your insights</div>
              <div className="board-card__body">
                <div className="board-line wide"></div>
                <div className="board-line"></div>
                <div className="board-line"></div>
              </div>
            </article>
            <article className="board-card board-card--small board-card--overlap">
              <div className="board-card__header">Patient response</div>
              <div className="board-card__body">
                <div className="board-line"></div>
                <div className="board-line short"></div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
