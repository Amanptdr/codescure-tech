export function JoinCircleSection() {
  return (
    <section className="section section--join" id="join-circle" aria-labelledby="join-title">
      <div className="section-shell">
        <div className="join-grid">
          <div className="join-grid__steps">
            <div className="join-step">
              <strong>Step 1: Get your referral code</strong>
              <span>Connect with an existing doctor partner or team lead.</span>
            </div>
            <div className="join-step">
              <strong>Step 2: Register on Amrutam</strong>
              <span>Fill out the onboarding form with your details.</span>
            </div>
            <div className="join-step">
              <strong>Step 3: Complete KYC</strong>
              <span>Verify your documents to activate the account.</span>
            </div>
            <div className="join-step">
              <strong>Step 4: Start consulting</strong>
              <span>Open your profile, set timings, and begin helping patients.</span>
            </div>
          </div>

          <div className="join-grid__visual" aria-hidden="true">
            <div className="phone-window">
              <div className="phone-window__screen">
                <div className="phone-window__image phone-window__image--join"></div>
                <div className="phone-window__panel">
                  <div className="phone-window__line wide"></div>
                  <div className="phone-window__line"></div>
                  <div className="phone-window__line short"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="tab-row" aria-label="Consultation types">
          <button type="button" className="tab-pill tab-pill--active">Consultations</button>
          <button type="button" className="tab-pill">Payment withdrawal</button>
          <button type="button" className="tab-pill">Schedule</button>
        </div>
      </div>
    </section>
  )
}
