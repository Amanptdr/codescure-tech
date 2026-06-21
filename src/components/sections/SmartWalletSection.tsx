export function SmartWalletSection() {
  return (
    <section className="section section--wallet" aria-labelledby="wallet-title">
      <div className="section-shell">
        <div className="split-grid">
          <div className="split-grid__content">
            <h3>Smart Wallet</h3>
            <p>
              Understand the need for seamless transactions. With Amrutam Wallet, you can
              easily withdraw payments, stay secure, and keep your practice finances transparent.
            </p>
            <div className="wallet-metrics">
              <div>
                <strong>₹12,000.00</strong>
                <span>available balance</span>
              </div>
              <button type="button" className="cta-button cta-button--outline">
                Request Withdrawal
              </button>
            </div>
          </div>

          <div className="split-grid__visual split-grid__visual--wallet" aria-hidden="true">
            <article className="wallet-card">
              <div className="wallet-card__top">Recent Withdrawals</div>
              <div className="wallet-card__amount">₹40,000</div>
              <div className="wallet-card__meta">24th July 2024</div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
