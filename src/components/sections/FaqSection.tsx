import { SectionHeading } from "../ui/SectionHeading";

export function FaqSection() {
  const faqs = [
    {
      question: "What is Amrutam?",
      answer:
        "Amrutam is a trusted platform connecting Ayurvedic experts with people seeking holistic healthcare solutions. Join our growing community of doctors to share your expertise, grow your practice, and make a lasting impact.",
    },
    {
      question: "How does Amrutam help me grow as a practitioner?",
      answer:
        "Amrutam is a trusted platform connecting Ayurvedic experts with people seeking holistic healthcare solutions. Join our growing community of doctors to share your expertise, grow your practice, and make a lasting impact.",
    },
    {
      question: "How do I become a part of Amrutam Doctor?",
      answer:
        "Amrutam is a trusted platform connecting Ayurvedic experts with people seeking holistic healthcare solutions. Join our growing community of doctors to share your expertise, grow your practice, and make a lasting impact.",
    },
    {
      question: "What documents do I need to provide?",
      answer:
        "Amrutam is a trusted platform connecting Ayurvedic experts with people seeking holistic healthcare solutions. Join our growing community of doctors to share your expertise, grow your practice, and make a lasting impact.",
    },
    {
      question: "Is there a fee to join Amrutam?",
      answer:
        "Amrutam is a trusted platform connecting Ayurvedic experts with people seeking holistic healthcare solutions. Join our growing community of doctors to share your expertise, grow your practice, and make a lasting impact.",
    },
  ];

  return (
    <section className="section section--faq" id="faq" aria-labelledby="faq-title">
      <div className="section-shell">
        <SectionHeading
        
          title="Frequently Asked Questions"
          subtitle="Find quick answers to common questions to help you navigate the app and its features easily."
        />

        <div className="faq-list">
          {faqs.map(({ question, answer }) => (
            <details className="faq-item" key={question}>
              <summary className="faq-item__question">{question}</summary>
              <p className="faq-item__answer">{answer}</p>
            </details>
          ))}
        </div>
        <div className="journey-tabs" style={{marginTop:2}} role="tablist" aria-label="Journey modes">
              <button
                type="button"
                role="tab"
                className={`journey-tabs__button${true ? ' journey-tabs__button--active' : ''}`}
              >See More
              </button>
        </div>


      </div>
    </section>
  );
}
