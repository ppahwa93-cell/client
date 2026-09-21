import React from 'react'
import { ArrowRight, Sparkles, Clock, CheckCircle2, PhoneCall } from 'lucide-react'
import { getDynamicServices, getDynamicConsultation } from '../utils/serviceStorage'

function ServicesSection({ services, consultation, onSelectService, onOpenBooking }) {
  const displayServices = services || getDynamicServices()
  const displayConsultation = consultation || getDynamicConsultation()

  return (
    <section id="services" className="services-section">
      <div className="services-container">
        
        {/* Section Header */}
        <div className="services-header">
          <div className="services-eyebrow">
            <Sparkles size={16} className="services-sparkle" />
            <span>OUR SACRED HEALING SERVICES</span>
          </div>
          <h2 className="services-title">
            Transformative Therapies for <br />
            <span className="services-title-gradient">Deep Soul Evolution</span>
          </h2>
          <p className="services-subtitle">
            Private, intimate 1-on-1 spiritual sessions designed to gently uncover root causes, dissolve karma, and restore inner harmony. Click any service to read full details.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid">
          {displayServices.map((service) => {
            const Icon = (typeof service.icon === 'function' ? service.icon : null) || Sparkles
            const price = Number(service.price || 5999)
            const consultPrice = Number(service.consultationPrice || 2500)

            return (
              <div 
                key={service.id} 
                className="service-card" 
                id={service.id}
              >
                {/* Image Container */}
                <div 
                  className="service-img-wrapper"
                  onClick={() => onSelectService && onSelectService(service)}
                  style={{ cursor: 'pointer' }}
                >
                  <img
                    src={service.image}
                    alt={service.title}
                    className="service-img"
                  />
                  <span className={`service-badge ${service.badgeClass}`}>
                    {service.badge}
                  </span>
                  <div className="service-img-overlay" />
                </div>

                {/* Card Content */}
                <div className="service-card-body">
                  <div className="service-icon-bar">
                    <div className="service-icon-wrap">
                      <Icon size={20} />
                    </div>
                    <div className="service-duration">
                      <Clock size={14} />
                      <span>{service.duration}</span>
                    </div>
                  </div>

                  <h3 
                    className="service-card-title"
                    onClick={() => onSelectService && onSelectService(service)}
                    style={{ cursor: 'pointer' }}
                  >
                    {service.title}
                  </h3>
                  <p className="service-card-desc">{service.tagline}</p>

                  {/* Pricing Info Box */}
                  <div className="service-card-pricing-box">
                    {service.hasSteps ? (
                      <div className="card-steps-price-wrap">
                        <div className="card-step-row">
                          <span className="step-label">Step 1 (Consultation):</span>
                          <span className="step-val">₹{consultPrice.toLocaleString('en-IN')}</span>
                        </div>
                        <div className="card-step-row highlight">
                          <span className="step-label">Step 2 (Session):</span>
                          <span className="step-val">₹{price.toLocaleString('en-IN')}</span>
                        </div>
                      </div>
                    ) : (
                      <div className="card-single-price-wrap">
                        <span className="price-main">₹{price.toLocaleString('en-IN')}</span>
                        {service.originalPrice && service.originalPrice > price && (
                          <span className="price-strike">₹{Number(service.originalPrice).toLocaleString('en-IN')}</span>
                        )}
                        <span className="price-term">/ session</span>
                      </div>
                    )}
                  </div>

                  {/* Highlights List */}
                  <div className="service-highlights">
                    {service.benefits.slice(0, 3).map((h, i) => (
                      <div key={i} className="highlight-item">
                        <CheckCircle2 size={15} className="highlight-check" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="service-card-footer-split">
                    <button 
                      onClick={() => onOpenBooking && onOpenBooking(service.id)}
                      className="service-btn-book-quick"
                      title={`Book ${service.shortTitle}`}
                    >
                      <span>Book Now</span>
                    </button>
                    <button 
                      onClick={() => onSelectService && onSelectService(service)}
                      className="service-btn-details"
                    >
                      <span>Details</span>
                      <ArrowRight size={15} />
                    </button>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Bottom Consultation Banner */}
        <div className="services-consultation-banner">
          <div className="banner-left">
            <h3 className="banner-heading">Not sure which therapy is right for you?</h3>
            <p className="banner-desc">
              Book a 1-on-1 private consultation with Sonika Gupta for a customized healing roadmap. (Fee: ₹{Number(displayConsultation.price || 2500).toLocaleString('en-IN')})
            </p>
          </div>
          <button 
            type="button" 
            onClick={() => onOpenBooking && onOpenBooking('consultation')}
            className="banner-cta-btn"
          >
            <PhoneCall size={18} />
            <span>Book Consultation (₹{Number(displayConsultation.price || 2500).toLocaleString('en-IN')})</span>
          </button>
        </div>

      </div>
    </section>
  )
}

export default ServicesSection
