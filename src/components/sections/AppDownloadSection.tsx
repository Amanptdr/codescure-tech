import drImg from "../../assets/dr.png";
import Mobile from "../../assets/join-step-3.png";

const features = [
  { title: "Build Trust and Community with Forum", icon: "leaf" },
  { title: "Earn More with Pay Per Conversation", icon: "coin" },
  { title: "Attract Patients with 5-Minute Free Call", icon: "call" },
  { title: "Instant Access to Your Earnings with Wallet", icon: "wallet" },
];

const floatingAvatars = [
  { src: drImg, className: "avatar-float avatar-float--top" },
  { src: drImg, className: "avatar-float avatar-float--mid" },
  { src: drImg, className: "avatar-float avatar-float--right" },
  { src: drImg, className: "avatar-float avatar-float--bottom" },
];

function FeatureIcon({ type }: { type: string }) {
  switch (type) {
    case "leaf":
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M5 12c0-5 4-8 9-8 1 5-1 9-5 11-2 1-4 1-6 0z" />
          <path d="M5 19c2-3 5-5 9-6" />
        </svg>
      );
    case "coin":
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v10M9.5 9.2c0-1.2 1.1-2 2.5-2s2.5.9 2.5 2-1.1 1.6-2.5 1.8c-1.4.2-2.5 1-2.5 2.2s1.1 2 2.5 2 2.5-.8 2.5-2" />
        </svg>
      );
    case "call":
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M6 3h3l1.5 4.5L8 9.5a12 12 0 0 0 6.5 6.5l2-2.5L21 15v3a2 2 0 0 1-2 2C10.6 20 4 13.4 4 5a2 2 0 0 1 2-2z" />
        </svg>
      );
    case "wallet":
      return (
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="3" y="6" width="18" height="13" rx="2" />
          <path d="M3 9h18" />
          <circle cx="17" cy="14" r="1.4" fill="currentColor" stroke="none" />
        </svg>
      );
    default:
      return null;
  }
}

export function AppDownloadSection() {
  return (
    <section className="section section--download" aria-labelledby="download-title">
      <div className="section-shell download-shell">
        <div className="download-copy">
          <h3 id="download-title">Get Started Today – Download the App Now!</h3>
          <p>Simplify consultations, manage patients, and grow your practice—all in one place.</p>

          <div className="feature-grid">
            {features.map((f) => (
              <article className="feature-card" key={f.title}>
                <span className="feature-card__icon">
                  <FeatureIcon type={f.icon} />
                </span>
                <span className="feature-card__title">{f.title}</span>
              </article>
            ))}
          </div>

          <div className="store-row">
            <a className="store-badge" href="#" aria-label="Get it on Google Play">
              <svg className="store-badge__icon" viewBox="0 0 512 512" width="22" height="22">
                <path fill="#00d2ff" d="M325 256 104 35c-7 7-11 17-11 28v386c0 11 4 21 11 28z" />
                <path fill="#ffe000" d="M404 207l-69-40-71 71 71 71 70-40c14-8 22-22 22-31s-9-23-23-31z" />
                <path fill="#00f076" d="M104 35c4-4 9-6 14-6 5 0 10 2 14 5l192 111-71 71z" />
                <path fill="#ff3a44" d="M118 477c4 3 9 5 14 5 5 0 10-2 14-5l192-111-71-71z" />
              </svg>
              <span>
                <small>GET IT ON</small>
                <strong>Google Play</strong>
              </span>
            </a>
            <a className="store-badge" href="#" aria-label="Download on the App Store">
              <svg className="store-badge__icon" viewBox="0 0 384 512" width="20" height="20" fill="#fff">
                <path d="M318 268c-1-54 44-80 46-81-25-37-64-42-78-42-33-3-64 19-81 19-17 0-43-19-71-18-37 1-71 21-90 54-38 67-10 166 28 220 18 26 40 55 69 54 28-1 38-18 71-18 33 0 42 18 71 17 30-1 48-26 66-53 21-30 29-59 30-61-1 0-57-22-58-87zM263 65c15-18 25-43 22-68-22 1-48 15-64 33-14 16-26 42-23 67 24 2 49-12 65-32z" />
              </svg>
              <span>
                <small>Download on the</small>
                <strong>App Store</strong>
              </span>
            </a>
          </div>
        </div>

        <div className="download-visual">
          {floatingAvatars.map((a) => (
            <img key={a.src} src={a.src} alt="" className={a.className} aria-hidden="true" />
          ))}
          <div className="phone-mock phone-mock--download">
            <img
              className="phone-mock__screen"
              src={Mobile}
              alt="Amrutam appointments screen on mobile app"
            />
          </div>
        </div>
      </div>
    </section>
  );
}