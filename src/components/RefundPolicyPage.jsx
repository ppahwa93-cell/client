import React, { useEffect } from 'react'
import { ArrowLeft, RefreshCw, Mail, Phone, MapPin, Globe, Clock, AlertCircle, ShieldCheck } from 'lucide-react'
import './RefundPolicyPage.css'

function RefundPolicyPage({ onBack }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="refund-page-root">
      
      {/* Top Sticky Navigation Bar */}
      <div className="refund-top-bar">
        <div className="refund-top-container">
          <button onClick={onBack} className="refund-back-btn">
            <ArrowLeft size={18} />
            <span>Back to Home</span>
          </button>
          <span className="refund-nav-title">Refund &amp; Cancellation Policy</span>
        </div>
      </div>

      {/* Hero Banner Header */}
      <section className="refund-hero">
        <div className="refund-hero-content">
          <div className="refund-eyebrow">
            <RefreshCw size={16} />
            <span>TRANSPARENT BOOKING &amp; CANCELLATION TERMS</span>
          </div>
          <h1 className="refund-title">
            Refund &amp; Cancellation Policy
          </h1>
          <p className="refund-subtitle">
            At Past Life with Sonika, every appointment involves dedicated time, preparation and an appointment slot reserved exclusively for you.
          </p>

          {/* Key Metadata Cards */}
          <div className="refund-meta-grid">
            <div className="refund-meta-card">
              <span className="meta-card-label">Effective Date</span>
              <strong className="meta-card-val">September 3, 2026</strong>
            </div>
            <div className="refund-meta-card">
              <span className="meta-card-label">Brand &amp; Website</span>
              <strong className="meta-card-val">pastlifewithsonika.com</strong>
            </div>
            <div className="refund-meta-card">
              <span className="meta-card-label">Official Contact</span>
              <strong className="meta-card-val">pastlifewithsonika@gmail.com</strong>
            </div>
            <div className="refund-meta-card">
              <span className="meta-card-label">Support Line</span>
              <strong className="meta-card-val">+91 99158 96655</strong>
            </div>
          </div>
        </div>
      </section>

      {/* Main Document Body */}
      <main className="refund-body-container">
        <div className="refund-content-card">
          
          {/* Preamble Box */}
          <div className="refund-intro-box">
            <p>
              At <strong>Past Life with Sonika</strong>, every appointment involves dedicated time, preparation, and an appointment slot reserved for the client.
            </p>
            <p>
              This Refund &amp; Cancellation Policy explains our approach to cancellations, rescheduling, and refunds for all individual sessions, guidance calls, and therapy packages.
            </p>
          </div>

          <hr className="refund-divider" />

          {/* Section 1 */}
          <section className="policy-section">
            <h2 className="policy-section-title">
              <span className="sec-num">1</span> Booking Confirmation
            </h2>
            <p className="policy-text">
              A session is considered booked once the required booking and payment process has been successfully completed.
            </p>
            <p className="policy-text">
              By completing a booking, you acknowledge that you have reviewed the applicable service information and this Refund &amp; Cancellation Policy.
            </p>
          </section>

          {/* Section 2 */}
          <section className="policy-section">
            <h2 className="policy-section-title">
              <span className="sec-num">2</span> Cancellation More Than 48 Hours Before the Session
            </h2>
            <p className="policy-text">
              If you cancel more than 48 hours before your scheduled session, you may request:
            </p>
            <ul className="policy-bullet-list">
              <li>Rescheduling to another available appointment; or</li>
              <li>A refund, subject to applicable payment-processing or transaction charges where relevant.</li>
            </ul>
            <p className="policy-text callout-note">
              ℹ️ <em>Refund eligibility may also depend on the specific service or package purchased.</em>
            </p>
          </section>

          {/* Section 3 */}
          <section className="policy-section">
            <h2 className="policy-section-title">
              <span className="sec-num">3</span> Cancellation Within 48 Hours
            </h2>
            <p className="policy-text">
              Cancellations made within 48 hours of the scheduled appointment may not be eligible for a refund because the appointment slot has been reserved specifically for you.
            </p>
            <p className="policy-text">
              Where possible, we may offer a rescheduling option subject to therapist availability.
            </p>
          </section>

          {/* Section 4 */}
          <section className="policy-section">
            <h2 className="policy-section-title">
              <span className="sec-num">4</span> Cancellation Within 24 Hours / No-Show
            </h2>
            <p className="policy-text">
              A cancellation made within 24 hours of the appointment, or failure to attend a scheduled session without prior notice, may be treated as a no-show.
            </p>
            <p className="policy-text">
              No-show appointments are generally non-refundable. A rescheduling option may be considered in exceptional circumstances at our sole discretion.
            </p>
          </section>

          {/* Section 5 */}
          <section className="policy-section">
            <h2 className="policy-section-title">
              <span className="sec-num">5</span> Rescheduling
            </h2>
            <p className="policy-text">
              We understand that unexpected situations can occur. Where reasonable notice is provided, we may allow you to reschedule your appointment subject to availability.
            </p>
            <p className="policy-text">
              Repeated rescheduling requests may be subject to additional restrictions.
            </p>
          </section>

          {/* Section 6 */}
          <section className="policy-section">
            <h2 className="policy-section-title">
              <span className="sec-num">6</span> Late Arrival
            </h2>
            <p className="policy-text">
              If you arrive late to a session, the session may still need to finish at the originally scheduled time so that subsequent clients are not delayed.
            </p>
            <p className="policy-text">
              Late arrival does not automatically entitle you to an extension or refund. If the delay substantially affects the session, an alternative arrangement may be considered at the discretion of Past Life with Sonika.
            </p>
          </section>

          {/* Section 7 */}
          <section className="policy-section">
            <h2 className="policy-section-title">
              <span className="sec-num">7</span> Cancellation by Past Life with Sonika
            </h2>
            <p className="policy-text">
              In exceptional circumstances, Past Life with Sonika may need to cancel or reschedule a session.
            </p>
            <p className="policy-text">
              If we cancel a paid session and are unable to provide a suitable alternative appointment, an eligible refund will be offered for the affected session.
            </p>
          </section>

          {/* Section 8 */}
          <section className="policy-section">
            <h2 className="policy-section-title">
              <span className="sec-num">8</span> Completed Sessions
            </h2>
            <p className="policy-text">
              Once a session has been delivered, the fee for that session is generally non-refundable.
            </p>
            <p className="policy-text">
              A difference between expected and actual personal experience does not automatically qualify for a refund. This includes situations where a client:
            </p>
            <ul className="policy-bullet-list">
              <li>Does not experience a particular memory.</li>
              <li>Does not experience a particular regression.</li>
              <li>Does not experience an expected emotional release.</li>
              <li>Does not feel an immediate change.</li>
              <li>Does not experience the personal transformation they expected.</li>
            </ul>
            <p className="policy-text callout-note mt-2">
              💡 <em>Therapeutic and regression experiences are deeply individual and cannot be guaranteed.</em>
            </p>
          </section>

          {/* Section 9 */}
          <section className="policy-section">
            <h2 className="policy-section-title">
              <span className="sec-num">9</span> Packages
            </h2>
            <p className="policy-text">
              Where multiple sessions are purchased as a package, cancellation or refund requests may be assessed based on:
            </p>
            <ul className="policy-bullet-list">
              <li>Sessions already completed.</li>
              <li>Sessions already scheduled.</li>
              <li>The original package price.</li>
              <li>Discounts provided as part of the package.</li>
              <li>Applicable transaction or processing charges.</li>
            </ul>
            <p className="policy-text mt-2">
              Any eligible refund will be calculated based on the applicable package terms and applicable law.
            </p>
          </section>

          {/* Section 10 */}
          <section className="policy-section">
            <h2 className="policy-section-title">
              <span className="sec-num">10</span> Exceptional Circumstances
            </h2>
            <p className="policy-text">
              If an unexpected serious circumstance prevents you from attending your appointment, please contact us as soon as reasonably possible.
            </p>
            <p className="policy-text">
              We may consider rescheduling or another appropriate arrangement on a case-by-case basis.
            </p>
          </section>

          {/* Section 11 */}
          <section className="policy-section">
            <h2 className="policy-section-title">
              <span className="sec-num">11</span> Refund Processing
            </h2>
            <p className="policy-text">
              Where a refund is approved, it will generally be processed through the original payment method where technically possible.
            </p>
            <p className="policy-text">
              The time required for the refund to appear in your account may depend on the relevant payment gateway, bank or financial institution.
            </p>
          </section>

          {/* Section 12 */}
          <section className="policy-section request-box">
            <h2 className="policy-section-title">
              <span className="sec-num">12</span> How to Request a Refund or Cancellation
            </h2>
            <p className="policy-text mb-3">
              To request a cancellation, rescheduling or refund, please contact us with the required information:
            </p>
            <div className="request-info-grid">
              <div className="req-card">
                <span className="req-label">Include in your email/message:</span>
                <ul className="policy-bullet-list">
                  <li>Your full name</li>
                  <li>Booking details &amp; appointment date</li>
                  <li>Service booked</li>
                  <li>Reason for cancellation / refund request</li>
                  <li>Payment or transaction reference (if available)</li>
                </ul>
              </div>
            </div>
            <p className="policy-text mt-3">
              Each request will be reviewed according to this policy and applicable law.
            </p>
          </section>

          {/* Section 13 */}
          <section className="policy-section">
            <h2 className="policy-section-title">
              <span className="sec-num">13</span> Policy Changes
            </h2>
            <p className="policy-text">
              Past Life with Sonika may update this Refund &amp; Cancellation Policy from time to time.
            </p>
            <p className="policy-text">
              The latest version will be published on <strong>pastlifewithsonika.com</strong> with the applicable effective date.
            </p>
          </section>

          {/* Section 14 - Contact Box */}
          <section className="policy-section contact-policy-box">
            <h2 className="policy-section-title">
              <span className="sec-num">14</span> Contact Us
            </h2>
            <p className="policy-text mb-4">
              For any questions or cancellation requests, reach out directly:
            </p>
            <div className="contact-details-card">
              <h3 className="brand-contact-name">Past Life with Sonika</h3>
              <div className="contact-detail-row">
                <MapPin size={18} className="detail-icon" />
                <span>Panchkula, Haryana, India</span>
              </div>
              <div className="contact-detail-row">
                <Mail size={18} className="detail-icon" />
                <a href="mailto:pastlifewithsonika@gmail.com" className="detail-link">pastlifewithsonika@gmail.com</a>
              </div>
              <div className="contact-detail-row">
                <Phone size={18} className="detail-icon" />
                <a href="tel:+919915896655" className="detail-link">+91 99158 96655</a>
              </div>
              <div className="contact-detail-row">
                <Globe size={18} className="detail-icon" />
                <span>pastlifewithsonika.com</span>
              </div>
            </div>
          </section>

        </div>
      </main>
    </div>
  )
}

export default RefundPolicyPage
