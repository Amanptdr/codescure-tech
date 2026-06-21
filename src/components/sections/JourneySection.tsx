import { useState } from 'react'
import joinStep4 from '../../assets/join-step-4.png'
import joinStep2 from '../../assets/join-step-2.png'
import joinStep3 from '../../assets/join-step-3.png'

type JourneyTab = {
  label: string
  items: Array<{
    title: string
    image: string
    captionPosition: 'top' | 'bottom'
  }>
}

const journeyTabs: JourneyTab[] = [
  {
    label: 'Consultations',
    items: [
      {
        title: 'Value Your Practice',
        image: joinStep4,
        captionPosition: 'top',
      },
      {
        title: "Today's Healing Journey",
        image: joinStep2,
        captionPosition: 'bottom',
      },
      {
        title: 'Consultation Details',
        image: joinStep3,
        captionPosition: 'top',
      },
    ],
  },
  {
    label: 'Payment withdrawal',
    items: [
      {
        title: 'Withdraw Earnings',
        image: joinStep2,
        captionPosition: 'top',
      },
      {
        title: 'Track Payments',
        image: joinStep3,
        captionPosition: 'bottom',
      },
      {
        title: 'Wallet Summary',
        image: joinStep4,
        captionPosition: 'top',
      },
    ],
  },
  {
    label: 'Schedule',
    items: [
      {
        title: 'Plan Your Day',
        image: joinStep3,
        captionPosition: 'top',
      },
      {
        title: "Today's Journey",
        image: joinStep4,
        captionPosition: 'bottom',
      },
      {
        title: 'Consultation Slots',
        image: joinStep2,
        captionPosition: 'top',
      },
    ],
  },
]

export function JourneySection() {
  const [activeTab, setActiveTab] = useState(0)
  const tab = journeyTabs[activeTab]

  return (
    <section className="section section--journey" aria-labelledby="journey-title">
      <div className="section-shell">
        <h2 id="journey-title" className="sr-only">
          Today&apos;s Healing Journey
        </h2>

        <div className="journey-tabs" role="tablist" aria-label="Journey modes">
          {journeyTabs.map((item, index) => {
            const isActive = index === activeTab

            return (
              <button
                key={item.label}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`journey-tabs__button${isActive ? ' journey-tabs__button--active' : ''}`}
                onClick={() => setActiveTab(index)}
                onMouseEnter={() => setActiveTab(index)}
                onFocus={() => setActiveTab(index)}
              >
                {item.label}
              </button>
            )
          })}
        </div>

        <div className="journey-triptych" aria-live="polite">
          {tab.items.map((item) => (
            <article className="journey-visual-card" key={item.title}>
              {item.captionPosition === 'top' && <h3>{item.title}</h3>}

              <div className="journey-visual-card__phone">
                <img src={item.image} alt={item.title} />
              </div>

              {item.captionPosition === 'bottom' && <h3>{item.title}</h3>}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
