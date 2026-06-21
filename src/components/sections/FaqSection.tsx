export function FaqSection() {
  const questions = [
    'What is Amrutam?',
    'How does Amrutam help me grow as a practitioner?',
    'How do I become a part of Amrutam Doctor?',
    'What documents do I need to provide?',
    'Is there a fee to join Amrutam?',
  ]

  return (
    <section className="section section--faq" id="faq" aria-labelledby="faq-title">
      <div className="section-shell">
        <div className="section-heading">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Find quick answers to common questions to help you navigate the app and its features easily.
          </p>
        </div>
        <div className="faq-list">
          {questions.map((question) => (
            <details className="faq-item" key={question}>
              <summary>{question}</summary>
              <p>
                This can be expanded into a full accordion later. For now, the layout mirrors the
                reference while keeping the page lightweight and easy to scan.
              </p>
            </details>
          ))}
        </div>
        <div className="center-row">
          <a className="cta-button cta-button--outline" href="#contact">
            See More
          </a>
        </div>
      </div>
    </section>
  )
}
