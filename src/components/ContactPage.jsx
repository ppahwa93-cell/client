import React, { useState, useEffect } from 'react'
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  ArrowLeft, 
  ShieldCheck, 
  Sparkles,
  Calendar,
  Globe2,
  User,
  HelpCircle
} from 'lucide-react'
import WhatsAppIcon from './WhatsAppIcon'

function ContactPage({ onBack, onOpenBooking }) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: 'plr-therapy',
    sessionFormat: 'zoom',
    preferredTime: 'morning',
    message: ''
  })

  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate submission delay
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 800)
  }

  return (
    <div className="contact-page">
      
      {/* Top Sticky Navigation */}
      <div className="detail-top-nav">
        <div className="detail-nav-container">
          <button onClick={onBack} className="btn-back-link">
            <ArrowLeft size={18} />
            <span>Back to Home</span>
          </button>
          <span className="detail-nav-title">Contact &amp; Session Booking</span>
          <button 
            type="button" 
            onClick={() => onOpenBooking && onOpenBooking('consultation')}
            className="btn-nav-cta"
          >
            <Sparkles size={16} />
            <span>Book &amp; Pay Online</span>
          </button>
        </div>
      </div>

      {/* Hero Header Section */}
      <section className="contact-hero-section">
        <div className="contact-hero-container">
          <div className="contact-eyebrow">
            <Sparkles size={16} />
            <span>1-ON-1 SACRED HEALING</span>
          </div>
          <h1 className="contact-hero-title">
            Begin Your Healing Journey <br />
            <span className="gold-gradient-text">With Sonika Gupta</span>
          </h1>
          <p className="contact-hero-desc">
            Reach out directly for private 1-on-1 session bookings, consultations, or guidance on choosing the right therapy for your soul.
          </p>

          <div className="contact-trust-badges">
            <div className="trust-badge-item">
              <ShieldCheck size={18} className="badge-icon" />
              <span>100% Confidential &amp; Safe</span>
            </div>
            <div className="trust-badge-item">
              <Globe2 size={18} className="badge-icon" />
              <span>Worldwide Zoom Sessions</span>
            </div>
            <div className="trust-badge-item">
              <Clock size={18} className="badge-icon" />
              <span>Fast 24-Hour Response</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main 2-Column Content Grid */}
      <div className="contact-body-container">
        <div className="contact-grid">
          
          {/* Left Column: Direct Contact Info Cards */}
          <div className="contact-info-column">
            <h2 className="column-heading">Instant Booking &amp; Contact</h2>
            <p className="column-subtext">
              Lock in your private 1-on-1 session immediately with secure Razorpay online payment or reach out via WhatsApp.
            </p>

            {/* Instant Online Booking Card */}
            <div className="contact-card-box highlight-card online-booking-card">
              <div className="card-icon-wrap phone-wrap">
                <Sparkles size={22} />
              </div>
              <div className="card-details">
                <span className="card-lbl">Instant Online Booking</span>
                <div className="booking-rate-pills">
                  <span className="rate-pill">Consultation: ₹2,500</span>
                  <span className="rate-pill">Mind &amp; Energy Therapies: ₹5,999</span>
                  <span className="rate-pill">PLR &amp; Beyond-Life: ₹25,000</span>
                </div>
                <span className="card-hint">Instant Zoom Slot Confirmation via Razorpay</span>
              </div>
              <button 
                type="button" 
                onClick={() => onOpenBooking && onOpenBooking('consultation')}
                className="btn-card-pay-online"
              >
                <Sparkles size={16} />
                <span>Pay &amp; Book Online Now</span>
              </button>
            </div>

            {/* Card 1: Call & WhatsApp */}
            <div className="contact-card-box">
              <div className="card-icon-wrap phone-wrap">
                <Phone size={22} />
              </div>
              <div className="card-details">
                <span className="card-lbl">Call or WhatsApp Directly</span>
                <a href="tel:+919915896655" className="card-val-link">+91 99158 96655</a>
                <span className="card-hint">Available for consultation calls &amp; inquiries</span>
              </div>
              <a 
                href="https://wa.me/919915896655?text=Hello%20Sonika%20Gupta,%20I%20want%20to%20book%20a%20consultation%20/%20session."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-card-whatsapp"
              >
                <WhatsAppIcon size={18} />
                <span>WhatsApp Instant Chat</span>
              </a>
            </div>

            {/* Card 2: Email Support */}
            <div className="contact-card-box">
              <div className="card-icon-wrap email-wrap">
                <Mail size={22} />
              </div>
              <div className="card-details">
                <span className="card-lbl">Official Email Address</span>
                <a href="mailto:pastlifewithsonika@gmail.com" className="card-val-link">
                  pastlifewithsonika@gmail.com
                </a>
                <span className="card-hint">Send us detailed queries or file attachments</span>
              </div>
            </div>

            {/* Card 3: Working Hours & Format */}
            <div className="contact-card-box">
              <div className="card-icon-wrap hours-wrap">
                <Clock size={22} />
              </div>
              <div className="card-details">
                <span className="card-lbl">Session Hours &amp; Location</span>
                <strong className="card-val-text">Mon – Sat: 10:00 AM – 7:00 PM (IST)</strong>
                <span className="card-hint">
                  <MapPin size={14} style={{ display: 'inline', marginRight: 4 }} />
                  1-on-1 Online via Zoom Worldwide
                </span>
              </div>
            </div>

            {/* Emergency / Confidentiality Note */}
            <div className="contact-note-box">
              <ShieldCheck size={20} className="note-icon" />
              <div>
                <strong>Privacy Promise:</strong> Your personal information, session discussions, and contact details are kept strictly private and confidential.
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Session Inquiry Form */}
          <div className="contact-form-column">
            <div className="form-card-wrapper">
              
              {isSubmitted ? (
                <div className="form-success-state">
                  <div className="success-icon-wrap">
                    <CheckCircle2 size={56} />
                  </div>
                  <h3 className="success-title">Thank You, {formData.fullName}!</h3>
                  <p className="success-desc">
                    Your session inquiry has been received. Sonika Gupta’s team will review your requirements and reach out to you via WhatsApp / Email at <strong>{formData.phone || formData.email}</strong> within 24 hours.
                  </p>
                  
                  <div className="success-action-group">
                    <a 
                      href={`https://wa.me/919915896655?text=Hello%20Sonika%20Gupta,%20my%20name%20is%20${encodeURIComponent(formData.fullName)}.%20I%20just%20submitted%20a%20session%20inquiry%20form.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-success-whatsapp"
                    >
                      <WhatsAppIcon size={18} />
                      <span>Speed Up via WhatsApp</span>
                    </a>
                    
                    <button 
                      onClick={() => {
                        setIsSubmitted(false)
                        setFormData({
                          fullName: '',
                          email: '',
                          phone: '',
                          service: 'plr-therapy',
                          sessionFormat: 'zoom',
                          preferredTime: 'morning',
                          message: ''
                        })
                      }}
                      className="btn-reset-form"
                    >
                      Submit Another Query
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-header">
                    <h2 className="form-title">Send a Session Inquiry</h2>
                    <p className="form-subtitle">Fill in your details below to schedule your 1-on-1 session or consultation.</p>
                  </div>

                  {/* Full Name */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="fullName">
                      Full Name <span className="req-star">*</span>
                    </label>
                    <div className="input-wrap">
                      <User size={18} className="input-icon" />
                      <input 
                        type="text" 
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Ananya Sharma"
                        required
                        className="form-input"
                      />
                    </div>
                  </div>

                  {/* Contact Number & Email Row */}
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="phone">
                        WhatsApp / Phone No. <span className="req-star">*</span>
                      </label>
                      <div className="input-wrap">
                        <Phone size={18} className="input-icon" />
                        <input 
                          type="tel" 
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          required
                          className="form-input"
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="email">
                        Email Address <span className="req-star">*</span>
                      </label>
                      <div className="input-wrap">
                        <Mail size={18} className="input-icon" />
                        <input 
                          type="email" 
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="yourname@gmail.com"
                          required
                          className="form-input"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="service">
                      Select Desired Therapy / Service <span className="req-star">*</span>
                    </label>
                    <select 
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="form-select"
                      required
                    >
                      <option value="plr-therapy">Past Life Regression (PLR) Therapy (2.5 Hours)</option>
                      <option value="beyond-life-regression">Beyond-Life (LBL) Regression Therapy (2.5 - 3 Hours)</option>
                      <option value="hypnoheal-therapy">Hypnoheal &amp; Subconscious Rewiring (90 Mins)</option>
                      <option value="inner-child-healing">Inner Child Healing Therapy (90 Mins)</option>
                      <option value="emotional-trauma-healing">Emotional &amp; Trauma Healing (2 Hours)</option>
                      <option value="soul-energy">Soul &amp; Energy Healing (90 Mins)</option>
                      <option value="consultation">Consultation First (30 Mins)</option>
                      <option value="unsure">Not Sure - Need Guidance Call</option>
                    </select>
                  </div>

                  {/* Session Format & Preferred Time Row */}
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="sessionFormat">
                        Session Format
                      </label>
                      <select 
                        id="sessionFormat"
                        name="sessionFormat"
                        value={formData.sessionFormat}
                        onChange={handleChange}
                        className="form-select"
                      >
                        <option value="zoom">1-on-1 Online via Zoom (Worldwide)</option>
                        <option value="phone">Direct Phone Call Consultation</option>
                      </select>
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="preferredTime">
                        Preferred Time Slot
                      </label>
                      <select 
                        id="preferredTime"
                        name="preferredTime"
                        value={formData.preferredTime}
                        onChange={handleChange}
                        className="form-select"
                      >
                        <option value="morning">Morning (10:00 AM – 1:00 PM IST)</option>
                        <option value="afternoon">Afternoon (2:00 PM – 5:00 PM IST)</option>
                        <option value="evening">Evening (5:00 PM – 7:00 PM IST)</option>
                      </select>
                    </div>
                  </div>

                  {/* Message / Primary Challenge */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="message">
                      Primary Challenges / Healing Goals (Optional)
                    </label>
                    <textarea 
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      placeholder="Briefly describe what issues or fears you wish to address during your session..."
                      className="form-textarea"
                    />
                  </div>

                  {/* Submit Button */}
                  <button 
                    type="submit" 
                    className="btn-submit-form"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span>Sending Inquiry...</span>
                    ) : (
                      <>
                        <Send size={18} />
                        <span>Submit Session Inquiry</span>
                      </>
                    )}
                  </button>

                  <p className="form-disclaimer">
                    <ShieldCheck size={14} style={{ display: 'inline', marginRight: 4 }} />
                    We respect your privacy. No spam ever.
                  </p>

                </form>
              )}

            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default ContactPage
