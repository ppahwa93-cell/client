import React from 'react'
import { PhoneCall, Award, ShieldCheck, ArrowRight, Sparkles } from 'lucide-react'

function AboutSection() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        
        {/* Left Column: Sonika Gupta Portrait & Trust Bar */}
        <div className="about-image-column">
          <div className="about-photo-wrapper">
            <img
              src="/sonika gupta.png"
              alt="Sonika Gupta – Certified Past Life Regression Therapist"
              className="about-portrait-img"
            />
            <div className="about-photo-caption">
              <Award size={18} className="caption-gold-icon" />
              <div>
                <strong>Sonika Gupta</strong>
                <span>Certified Past Life Regression Therapist</span>
              </div>
            </div>
          </div>

          {/* Clean Horizontal Stats Bar */}
          <div className="about-stats-bar">
            <div className="stat-item">
              <span className="stat-num">500+</span>
              <span className="stat-lbl">Clients Healed</span>
            </div>
            <div className="stat-sep" />
            <div className="stat-item">
              <span className="stat-num">8+ Yrs</span>
              <span className="stat-lbl">Experience</span>
            </div>
            <div className="stat-sep" />
            <div className="stat-item">
              <span className="stat-num">100%</span>
              <span className="stat-lbl">Confidential</span>
            </div>
          </div>
        </div>

        {/* Right Column: Clean Editorial Paragraphs Narrative */}
        <div className="about-content-column">
          
          {/* Eyebrow Badge */}
          <div className="about-eyebrow-tag">
            <span>ABOUT SONIKA GUPTA</span>
          </div>

          {/* Main Headline */}
          <h2 className="about-heading">
            Illuminating Your Past. <br />
            <span className="heading-gradient-text">Empowering Your Present.</span>
          </h2>

          {/* Purpose Paragraph */}
          <p className="about-paragraph purpose-paragraph">
            We help people recognise the <strong>invisible patterns shaping their present</strong> by gently illuminating the stories held in their past lives — so they can finally move forward with <strong>clarity, peace, and intention.</strong>
          </p>

          {/* Positioning Paragraph */}
          <p className="about-paragraph positioning-paragraph">
            This is a <strong>premium, intimate spiritual-healing brand</strong> at the intersection of ancestral wisdom and modern self-inquiry. Not mysticism for the masses — a <strong>sacred, guided experience for the quietly seeking soul.</strong>
          </p>

          {/* Subtle Golden Accent Divider Line */}
          <div className="about-clean-divider" />

          {/* Feature Badges / Pillars */}
          <div className="about-pillars-row">
            <div className="pillar-chip">
              <ShieldCheck size={15} className="chip-icon" />
              <span>Ancestral Wisdom &amp; Self-Inquiry</span>
            </div>
            <div className="pillar-chip">
              <Sparkles size={15} className="chip-icon" />
              <span>Karmic Pattern Resolution</span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="about-action-group">
            <a href="tel:9915896655" className="about-primary-cta">
              <PhoneCall size={18} />
              <span>Book Consultation</span>
            </a>

            <a href="#services" className="about-secondary-cta">
              <span>Explore Services</span>
              <ArrowRight size={16} />
            </a>
          </div>

        </div>

      </div>
    </section>
  )
}

export default AboutSection




