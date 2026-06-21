export function ContactSection() {
  return (
    <section className="section section--contact" id="contact" aria-labelledby="contact-title">
      <div className="section-shell">
        <div className="section-heading">
          <h2 className="section-title">Let&apos;s Connect</h2>
          <p className="section-subtitle">
            We&apos;re here to help you on your wellness journey. Reach out to us for any questions.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-grid__visual"></div>
          <form className="contact-form">
            <label>
              Your Name
              <input type="text" placeholder="Vikas Kumar" />
            </label>
            <label>
              Your Contact Number
              <input type="tel" placeholder="8734344676" />
            </label>
            <label>
              Email
              <input type="email" placeholder="vikas@gmail.com" />
            </label>
            <label>
              Message
              <textarea rows={4} placeholder="I want to Onboard as a Doctor" />
            </label>
            <button className="cta-button" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
