export function TestimonialsSection() {
  return (
    <section className="section section--testimonials" id="testimonials" aria-labelledby="testimonials-title">
      <div className="section-shell">
        <div className="section-heading">
          <p className="section-eyebrow">What other Ayurvedic Doctors are Saying</p>
          <h2 className="section-title">What other Ayurvedic Doctors are Saying</h2>
          <p className="section-subtitle">Trusted by experts - Hear what Ayurvedic doctors say about Amrutam!</p>
        </div>

        <div className="testimonial-grid">
          {['Dr. Priya Deshmukh', 'Dr. Riya Joshi', 'Dr. Ananya Sharma'].map((name) => (
            <article className="testimonial-card" key={name}>
              <div className="testimonial-card__header">
                <div className="avatar avatar--small"></div>
                <div>
                  <strong>{name}</strong>
                  <p>Ayurvedic Practitioner</p>
                </div>
              </div>
              <p>
                Amrutam makes it simple to connect with patients, manage consults, and grow a
                practice with a calm, trustworthy flow.
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
