import type { ReactNode } from 'react'

type SplitFeatureSectionProps = {
  id: string
  content: ReactNode
  visual: ReactNode
  reverse?: boolean
}

export function SplitFeatureSection({
  id,
  content,
  visual,
  reverse = false,
}: SplitFeatureSectionProps) {
  return (
    <section
      className={`section feature-split${reverse ? ' feature-split--reverse' : ''}`}
      id={id}
    >
      <div className="section-shell">
        <div className="feature-split__grid">
          <div className="feature-split__visual">{visual}</div>
          <div className="feature-split__content">{content}</div>
        </div>
      </div>
    </section>
  )
}
