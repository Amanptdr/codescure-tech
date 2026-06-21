import type { ReactNode } from 'react'
import { FeatureVisualShowcase } from '../components/sections/FeatureVisualShowcase'

export type FeatureSectionItem = {
  id: string
  reverse?: boolean
  content: ReactNode
  visual: ReactNode
}

export const featureSections: FeatureSectionItem[] = [
  {
    id: 'about',
    reverse: false,
    visual: <FeatureVisualShowcase />,
    content: (
      <div>
        <p className="feature-split__eyebrow">Forum</p>
        <h3>Forum for Meaningful Connections</h3>
        <p>
          We value your journey in Ayurveda. The Amrutam Forum helps you engage with patients,
          ask questions, share insights, and exchange knowledge with a thoughtful community.
        </p>
      </div>
    ),
  },
  {
    id: 'onboarding',
    reverse: true,
    visual: <FeatureVisualShowcase />,
    content: (
      <div>
        <p className="feature-split__eyebrow">Session Mode</p>
        <h3>Choose Your Session Mode</h3>
        <p>
          Amrutam offers you to connect with patients via instant chat, instant call, or
          scheduled video. Each option provides flexibility and personalized care.
        </p>
      </div>
    ),
  },
  {
    id: 'wallet',
    reverse: false,
    visual: <FeatureVisualShowcase />,
    content: (
      <div>
        <p className="feature-split__eyebrow">Smart Wallet</p>
        <h3>Smart Wallet</h3>
        <p>
          Understand the need for seamless transactions. With Amrutam Wallet, you can easily
          withdraw payments, stay secure, and keep your practice finances transparent.
        </p>
      </div>
    ),
  },
  {
    id: 'work-timing',
    reverse: true,
    visual: <FeatureVisualShowcase />,
    content: (
      <div>
        <p className="feature-split__eyebrow">Work Timing</p>
        <h3>Flexible Work Timing</h3>
        <p>
          We recognize the importance of managing your time. With Amrutam, you can choose your
          availability and focus on care without sacrificing balance.
        </p>
      </div>
    ),
  },
  {
    id: 'free-call',
    reverse: false,
    visual: <FeatureVisualShowcase />,
    content: (
      <div>
        <p className="feature-split__eyebrow">Why Doctors Choose Us?</p>
        <h3>Instant FREE 5-Mins Call</h3>
        <p>
          We understand the importance of building trust with your patients. That&apos;s why
          Amrutam offers a free 5-minute call, helping you connect instantly and foster lasting
          patient relationships with ease.
        </p>
      </div>
    ),
  },
]
