import React, { useState, useEffect } from 'react'
import { 
  ArrowLeft, 
  Clock, 
  PhoneCall, 
  CheckCircle2, 
  HelpCircle, 
  Sparkles, 
  ShieldCheck, 
  ChevronDown, 
  UserCheck, 
  Calendar,
  Zap,
  Heart,
  Moon,
  ArrowRight
} from 'lucide-react'
import WhatsAppIcon from './WhatsAppIcon'

function ServiceDetailPage({ service, onBack, onOpenBooking }) {
  const [openFaqIndex, setOpenFaqIndex] = useState(0)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [service])

  if (!service) return null

  const IconComponent = (typeof service.icon === 'function' ? service.icon : null) || Sparkles

  const toggleFaq = (index) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index)
  }

  const servicePrice = service.price || 5999
  const serviceOrigPrice = service.originalPrice || 7500

  return (
    <div className="service-detail-page">
      
      {/* Top Sticky Navigation Bar */}
      <div className="detail-top-nav">
        <div className="detail-nav-container">
          <button onClick={onBack} className="btn-back-link">
            <ArrowLeft size={18} />
            <span>Back to All Services</span>
          </button>
          <span className="detail-nav-title">{service.shortTitle}</span>
          <button 
            onClick={() => onOpenBooking && onOpenBooking(service.id)} 
            className="btn-nav-cta"
          >
            <PhoneCall size={16} />
            <span>Book Session</span>
          </button>
        </div>
      </div>

      {/* Hero Banner Section */}
      <section className="detail-hero-section">
        <div className="detail-hero-container">
          <div className="detail-hero-grid">
            
            {/* Left Content */}
            <div className="detail-hero-left">
              <div className="detail-badge-row">
                <span className={`service-badge ${service.badgeClass}`}>
                  {service.badge}
                </span>
                <span className="detail-duration-tag">
                  <Clock size={14} />
                  <span>{service.duration}</span>
                </span>
              </div>

              <h1 className="detail-hero-title">{service.title}</h1>
              <p className="detail-hero-tagline">{service.tagline}</p>
              
              <div className="detail-meta-pills">
                <div className="meta-pill">
                  <UserCheck size={16} className="meta-icon" />
                  <span>1-on-1 Private Session</span>
                </div>
                <div className="meta-pill">
                  <ShieldCheck size={16} className="meta-icon" />
                  <span>Confidential &amp; Safe Space</span>
                </div>
                <div className="meta-pill">
                  <Calendar size={16} className="meta-icon" />
                  <span>Online via Zoom Worldwide</span>
                </div>
              </div>

              {/* Pricing Display */}
              <div className="detail-pricing-container">
                {service.hasSteps ? (
                  <div className="detail-steps-pricing-box">
                    <div className="detail-step-badge">
                      <span className="step-num-pill">Step 1</span>
                      <span className="step-name">Pre-Session Consultation:</span>
                      <strong className="step-amount">₹{Number(service.consultationPrice || 2500).toLocaleString('en-IN')}</strong>
                    </div>
                    <div className="detail-step-badge highlight">
                      <span className="step-num-pill">Step 2</span>
                      <span className="step-name">Full Deep Regression Session:</span>
                      <strong className="step-amount">₹{Number(service.price || 25000).toLocaleString('en-IN')}</strong>
                    </div>
                  </div>
                ) : (
                  <div className="detail-single-pricing-box">
                    <span className="pricing-tag-label">Fee per Session:</span>
                    <strong className="pricing-tag-price">₹{Number(service.price || 5999).toLocaleString('en-IN')}</strong>
                    {service.originalPrice && service.originalPrice > service.price && (
                      <span className="pricing-tag-strike">₹{Number(service.originalPrice).toLocaleString('en-IN')}</span>
                    )}
                    <span className="pricing-tag-note">(1-on-1 Private Healing)</span>
                  </div>
                )}
              </div>

              <div className="detail-hero-cta-group">
                <button 
                  type="button"
                  onClick={() => onOpenBooking && onOpenBooking(service.id)} 
                  className="btn-hero-primary"
                >
                  <PhoneCall size={18} />
                  <span>Book Now</span>
                </button>
                <a 
                  href={`https://wa.me/919915896655?text=Hello%20Sonika%20Gupta,%20I%20want%20to%20know%20more%20about%20${encodeURIComponent(service.title)}`} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="btn-hero-whatsapp"
                >
                  <WhatsAppIcon size={18} />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Right Featured Card Image */}
            <div className="detail-hero-right">
              <div className="detail-image-card">
                <img src={service.image} alt={service.title} className="detail-hero-img" loading="lazy" decoding="async" />
                <div className="detail-image-overlay" />
                <div className="detail-image-caption">
                  <div className="caption-icon-wrap">
                    <IconComponent size={24} />
                  </div>
                  <div>
                    <strong>Sacred Soul Healing</strong>
                    <span>Guided personally by Sonika Gupta</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="detail-body-container">
        
        {/* Section 1: Overview & Philosophy */}
        <section className="detail-section overview-section">
          <div className="section-eyebrow">
            <Sparkles size={16} />
            <span>THERAPY OVERVIEW</span>
          </div>
          <h2 className="section-title">Understanding {service.title}</h2>
          <p className="overview-text">{service.summary}</p>
        </section>

        {/* Section 2: Who Needs This Therapy? */}
        <section className="detail-section symptoms-section">
          <div className="section-eyebrow">
            <ShieldCheck size={16} />
            <span>IS THIS FOR YOU?</span>
          </div>
          <h2 className="section-title">Who Needs This Therapy?</h2>
          <p className="section-subtitle">If you recognize any of these emotional, mental, or spiritual patterns, this session is crafted for your healing:</p>
          
          <div className="symptoms-grid">
            {service.whoNeedsThis.map((item, index) => (
              <div key={index} className="symptom-card">
                <div className="symptom-check">
                  <CheckCircle2 size={20} />
                </div>
                <p className="symptom-text">{item}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3: Step-by-Step Session Process */}
        <section className="detail-section process-section">
          <div className="section-eyebrow">
            <Clock size={16} />
            <span>YOUR HEALING JOURNEY</span>
          </div>
          <h2 className="section-title">What Happens in a Session?</h2>
          <p className="section-subtitle">A step-by-step breakdown of how Sonika guides you safely from start to finish:</p>

          <div className="process-timeline">
            {service.sessionProcess.map((proc, index) => (
              <div key={index} className="process-timeline-card">
                <div className="process-step-num">{proc.step}</div>
                <div className="process-content">
                  <h3 className="process-step-title">{proc.title}</h3>
                  <p className="process-step-desc">{proc.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4: Key Transformation Benefits */}
        <section className="detail-section benefits-section">
          <div className="section-eyebrow">
            <Zap size={16} />
            <span>CORE BENEFITS</span>
          </div>
          <h2 className="section-title">Transformations You Can Expect</h2>
          <p className="section-subtitle">Direct, tangible results clients experience after completing this therapy:</p>

          <div className="benefits-grid">
            {service.benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-icon-wrap">
                  <CheckCircle2 size={20} />
                </div>
                <span className="benefit-text">{benefit}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Section 5: Frequently Asked Questions */}
        {service.faqs && service.faqs.length > 0 && (
          <section className="detail-section faqs-section">
            <div className="section-eyebrow">
              <HelpCircle size={16} />
              <span>FREQUENTLY ASKED QUESTIONS</span>
            </div>
            <h2 className="section-title">Got Questions About {service.shortTitle}?</h2>

            <div className="faq-accordion-list">
              {service.faqs.map((faq, index) => {
                const isOpen = openFaqIndex === index
                return (
                  <div key={index} className={`faq-accordion-item ${isOpen ? 'active' : ''}`}>
                    <button 
                      className="faq-question-btn" 
                      onClick={() => toggleFaq(index)}
                    >
                      <span className="faq-question-text">{faq.question}</span>
                      <ChevronDown size={20} className={`faq-arrow ${isOpen ? 'rotate' : ''}`} />
                    </button>
                    {isOpen && (
                      <div className="faq-answer-content">
                        <p>{faq.answer}</p>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </section>
        )}

        {/* Section 6: Bottom Booking Callout Banner */}
        <section className="detail-booking-banner">
          <div className="booking-banner-content">
            <h2 className="booking-banner-title">Ready to Transform Your Life?</h2>
            <p className="booking-banner-desc">
              Take the first step toward soul freedom and deep inner healing. Book your 1-on-1 private {service.title} with Sonika Gupta today.
            </p>
            
            <div className="booking-banner-actions">
              <button 
                type="button"
                onClick={() => onOpenBooking && onOpenBooking(service.id)} 
                className="btn-banner-primary"
              >
                <PhoneCall size={18} />
                <span>Book Now</span>
              </button>
              <a 
                href={`https://wa.me/919915896655?text=Hello%20Sonika%20Gupta,%20I%20want%20to%20book%20a%20${encodeURIComponent(service.title)}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn-banner-secondary"
              >
                <WhatsAppIcon size={18} />
                <span>WhatsApp Instant Inquiry</span>
              </a>
            </div>
          </div>
        </section>

      </div>

    </div>
  )
}

export default ServiceDetailPage
