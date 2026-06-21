import { SectionHeading } from '../ui/SectionHeading'
import brand1 from '../../assets/brand1.svg'
import brand2 from '../../assets/brand2.svg'
import brand3 from '../../assets/brand3.svg'
import brand4 from '../../assets/brand4.svg'

const brands = [
  brand1,
  brand2,
  brand3,
  brand4,
  brand1,
  brand2,
  brand3,
  brand4,
  brand1,
]

export function FeaturedSection() {
  return (
    <section className="section section--featured" aria-labelledby="featured-title">
      <SectionHeading
        eyebrow="Featured"
        title="Featured"
        subtitle="Recognized and celebrated by leading publications — Amrutam in the spotlight!"
      />
      <div className="feature-svg-layout">
        <div className="brand-container">
          {brands.map((brand, index) => (
            <div className="brand-item" key={index}>
              <img src={brand} alt={`Featured publication ${index + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
