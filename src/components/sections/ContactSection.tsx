import { SectionHeading } from "../ui/SectionHeading"
import imageData from "../../assets/ayurved.png";
export function ContactSection() {
  return (
    <section className="section section--contact" id="contact" aria-labelledby="contact-title">
      <div className="section-shell">
        <SectionHeading title="Let's Connect" subtitle="We are here to help you on your wellness journey." />

        <div className="contact-grid">
          <div className="contact-grid__visual">
            <img src={imageData} alt="Fresh Ayurvedic herbs and ingredients" />
          </div>

          <form className="contact-form">
            <div className="contact-form__row">
              <label className="contact-form__field">
                <span>Your Name</span>
                <input type="text" placeholder="Vikas Kumar" />
              </label>
              <label className="contact-form__field">
                <span>Your Contact Number</span>
                <input type="tel" placeholder="8743414476" />
              </label>
            </div>

            <label className="contact-form__field contact-form__field--full">
              <span>Your Email</span>
              <input type="email" placeholder="vikass@gmail.com" />
            </label>

            <label className="contact-form__field contact-form__field--full">
              <span>Message (Optional)</span>
              <textarea rows={3} placeholder="I want to On-board as a Doctor" />
            </label>

            <button className="contact-form__submit" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}