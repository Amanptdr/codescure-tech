import { Button } from "../ui/Button";
import { SectionHeading } from "../ui/SectionHeading";
import drImg from '../../assets/dr.png'

const testimonials = [
  {
    name: "Dr. Pooja Deshmukh",
    title: "BAMS",
    rating: 4,
    quote:
      "Amrutam's formulations stay true to the ancient wisdom of Ayurveda. Their authentic, chemical-free products help restore balance and promote holistic well-being. I often recommend them to my patients seeking natural healing.",
    image: drImg,
  },
  {
    name: "Dr. Rajesh Iyer",
    title: "Ayurvedic Practitioner",
    rating: 4,
    quote:
      "Amrutam beautifully bridges the gap between traditional Ayurveda and modern wellness. Their high-quality ingredients and ethical practices make them a trustworthy choice for those looking to embrace a healthier lifestyle.",
    image: drImg,
    featured: true,
  },
  {
    name: "Dr. Ananya Sharma",
    title: "BAMS",
    rating: 4,
    quote:
      "As an Ayurvedic doctor, I appreciate Amrutam's commitment to purity and efficacy. Their herbal blends are thoughtfully crafted, ensuring maximum benefits for mind and body. I've personally seen positive results in my patients using their products.",
    image: drImg,
  },
];

export function TestimonialsSection() {
  return (
    <section className="section section--testimonials" id="testimonials" aria-labelledby="testimonials-title">
      <div className="section-shell">
        {/* <div className="testimonials-cta">
          <button className="btn-join">Join Now</button>
        </div> */}
        <div className="journey-tabs" role="tablist" aria-label="Journey modes">
              <button
                type="button"
                role="tab"
                className={`journey-tabs__button${true ? ' journey-tabs__button--active' : ''}`}
              >
Join <b>Now</b>
              </button>
        </div>

        <SectionHeading
          title="What other Ayurvedic Doctors are Saying"
          subtitle="Trusted by experts – Hear what Ayurvedic doctors say about Amrutam!"
        />

        <div className="testimonial-grid">
          {testimonials.map((t) => (
            <article
              className={`testimonial-card ${t.featured ? "testimonial-card--featured" : ""}`}
              key={t.name}
            >
              <div className="testimonial-card__header">
                <img className="testimonial-card__avatar" src={t.image} alt={t.name} />
                <div>
                  <p className="testimonial-card__name">
                    {t.name}, <span>{t.title}</span>
                  </p>
                  <div className="testimonial-card__stars" aria-label={`${t.rating} out of 5 stars`}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} className={i < t.rating ? "star star--filled" : "star"}>
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <p className="testimonial-card__quote">"{t.quote}"</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}