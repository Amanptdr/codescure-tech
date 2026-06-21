function SocialIcon({ type }: { type: string }) {
  switch (type) {
    case "facebook":
      return (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
          <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0 0 22 12z" />
        </svg>
      );
    case "instagram":
      return (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8">
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.2" cy="6.8" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
    case "youtube":
      return (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
          <path d="M22 12s0-3.2-.4-4.7c-.2-.9-.9-1.6-1.8-1.8C18 5 12 5 12 5s-6 0-7.8.5c-.9.2-1.6.9-1.8 1.8C2 8.8 2 12 2 12s0 3.2.4 4.7c.2.9.9 1.6 1.8 1.8C6 19 12 19 12 19s6 0 7.8-.5c.9-.2 1.6-.9 1.8-1.8.4-1.5.4-4.7.4-4.7zM10 15V9l5.2 3-5.2 3z" />
        </svg>
      );
    case "twitter":
      return (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
          <path d="M22 5.9c-.7.3-1.5.6-2.3.7.8-.5 1.5-1.3 1.8-2.3-.8.5-1.7.8-2.6 1-.7-.8-1.8-1.3-3-1.3-2.2 0-4 1.8-4 4 0 .3 0 .6.1.9-3.3-.2-6.3-1.8-8.3-4.2-.3.6-.5 1.3-.5 2 0 1.4.7 2.6 1.8 3.3-.6 0-1.3-.2-1.8-.5v.1c0 1.9 1.4 3.5 3.2 3.9-.3.1-.7.1-1.1.1-.3 0-.5 0-.8-.1.5 1.6 2 2.7 3.8 2.8-1.4 1.1-3.2 1.7-5.1 1.7-.3 0-.7 0-1-.1 1.8 1.2 4 1.9 6.3 1.9 7.5 0 11.7-6.3 11.7-11.7v-.5c.8-.6 1.5-1.3 2-2.1z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
          <path d="M6.9 8.4H3.6V20h3.3V8.4zM5.3 3.5a1.9 1.9 0 1 0 0 3.8 1.9 1.9 0 0 0 0-3.8zM20.4 13.4c0-3.1-1.7-4.6-3.9-4.6-1.8 0-2.6 1-3.1 1.7v-1.5H10v11.6h3.3v-6.4c0-.3 0-.6.1-.9.3-.6.9-1.3 2-1.3 1.4 0 2 1.1 2 2.6v6h3.3z" />
        </svg>
      );
    case "pinterest":
      return (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
          <path d="M12 2a10 10 0 0 0-3.6 19.3c0-.8 0-1.8.2-2.6l1.3-5.5s-.3-.7-.3-1.6c0-1.5.9-2.6 2-2.6.9 0 1.4.7 1.4 1.6 0 1-.6 2.4-1 3.8-.3 1.1.6 2 1.7 2 2 0 3.5-2.1 3.5-5.2 0-2.7-2-4.6-4.8-4.6-3.2 0-5.1 2.4-5.1 4.9 0 1 .4 2 .9 2.6.1.1.1.2.1.3l-.4 1.4c0 .2-.1.2-.3.1-1.2-.5-1.9-2.2-1.9-3.5 0-2.9 2.1-5.5 6-5.5 3.2 0 5.6 2.3 5.6 5.3 0 3.2-2 5.7-4.8 5.7-.9 0-1.8-.5-2.1-1.1l-.6 2.2c-.2.8-.8 1.9-1.2 2.5A10 10 0 1 0 12 2z" />
        </svg>
      );
    default:
      return null;
  }
}

export function Footer() {
  const infoLinks = [
    "About Us",
    "Terms and Conditions",
    "Privacy Policy",
    "Shipping and Return Policy",
    "International Delivery",
    "For Business, Hotels and Resorts",
  ];

  const socialLinks = [
    { name: "Facebook", icon: "facebook", href: "#" },
    { name: "Instagram", icon: "instagram", href: "#" },
    { name: "YouTube", icon: "youtube", href: "#" },
    { name: "Twitter", icon: "twitter", href: "#" },
    { name: "LinkedIn", icon: "linkedin", href: "#" },
    { name: "Pinterest", icon: "pinterest", href: "#" },
  ];

  return (
    <footer className="site-footer">
      <div className="section-shell site-footer__grid">
        <div className="site-footer__col">
          <div className="site-footer__brand">AMRUTAM</div>
          <p className="site-footer__heading">Get in touch</p>
          <a className="site-footer__muted" href="mailto:support@amrutam.global">
            support@amrutam.global
          </a>
          <p className="site-footer__address">
            Amrutam Pharmaceuticals Pvt Ltd,
            <br />
            Itnirajpur Ganj, Nai Sadak, Lashkar,
            <br />
            Gwalior – 474001
          </p>
          <a className="site-footer__muted" href="tel:+919713171999">
            +91 9713171999
          </a>
        </div>

        <div className="site-footer__col">
          <h4>Information</h4>
          <ul className="site-footer__links">
            {infoLinks.map((link) => (
              <li key={link}>
                <a href="#">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="site-footer__col">
          <h4>Follow Us</h4>
          <div className="site-footer__socials">
            {socialLinks.map((s) => (
              <a key={s.name} href={s.href} aria-label={s.name} className="social-icon">
                <SocialIcon type={s.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}