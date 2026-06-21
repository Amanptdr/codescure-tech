type SectionHeadingProps = {
  title: string
  subtitle?: string
  eyebrow?: string
}

export function SectionHeading({ title, subtitle, eyebrow }: SectionHeadingProps) {
  return (
    <div className="section-heading">
      {eyebrow && <p className="section-eyebrow">{eyebrow}</p>}
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  )
}
