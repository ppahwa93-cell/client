import { PhoneCall, Sparkles } from 'lucide-react'

function HeroSection({ setActiveTab, onOpenBooking }) {
  return (
    <section className="hero-section">
      <div className="hero-banner-wrapper">
        <img
          src="/banner.png"
          alt="Heal Past Life Trauma - PastLifeWithSonika"
          className="hero-banner-img"
        />

        {/* Dark overlay for text readability */}
        <div className="hero-overlay" />

        {/* Hero Content */}
        <div className="hero-content">

          {/* Badge */}
          <div className="hero-badge hero-anim-1">
            <Sparkles size={14} />
            <span>Certified Past Life Regression Therapist</span>
          </div>

          {/* Heading - each line animated separately */}
          <h1 className="hero-heading">
            <span className="hero-line hero-anim-2">
              Heal Your <span className="hero-gold">Past Life</span>
            </span>
            <span className="hero-line hero-anim-3">
              Transform Your <span className="hero-gold-light">Present</span>
            </span>
          </h1>

          {/* Subtext */}
          <p className="hero-subtext hero-anim-4">
            Release emotional baggage, karma &amp; trauma.<br />
            Awaken your soul. Live your best life. 💜
          </p>

          <div className="hero-cta-group hero-anim-5">
            <button
              type="button"
              className="hero-btn-primary"
              onClick={onOpenBooking}
            >
              <PhoneCall size={18} />
              <span>Book Consultation</span>
            </button>

            <button
              className="hero-btn-secondary"
              onClick={() => setActiveTab('services')}
            >
              Explore Services
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
