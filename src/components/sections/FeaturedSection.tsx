import { SectionHeading } from "../ui/SectionHeading";
import brand1 from "../../assets/brand1.svg"
import brand2 from "../../assets/brand2.svg"
import brand3 from "../../assets/brand3.svg"
import brand4 from "../../assets/brand4.svg"
export function FeaturedSection() {
  return <>
  <SectionHeading
    title="Featured"
    subtitle="Recognized and celebrated by leading publications — Amrutam in the spotlight!"
  />
  <div className="feature-svg-layout">
    <div className="brand-container">
      <div className="brand-item"><img src={brand1} alt="Logo 1" /></div>
        <div className="brand-item"><img src={brand2} alt="Logo 2" /></div>
        <div className="brand-item"><img src={brand3} alt="Logo 3" /></div>
        <div className="brand-item"><img src={brand4} alt="Logo 4" /></div>
        <div className="brand-item"><img src={brand1} alt="Logo 5" /></div>
        <div className="brand-item"><img src={brand2} alt="Logo 6" /></div>
        <div className="brand-item"><img src={brand3} alt="Logo 7" /></div>
        <div className="brand-item"><img src={brand4} alt="Logo 8" /></div>
        <div className="brand-item"><img src={brand1} alt="Logo 9" /></div>
      </div>
  </div>
  </>
}
