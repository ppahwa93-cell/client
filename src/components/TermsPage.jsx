import React, { useEffect } from 'react'
import { ArrowLeft, FileText, Mail, Phone, MapPin, Globe, ShieldAlert, Scale, CheckCircle2 } from 'lucide-react'
import './TermsPage.css'

function TermsPage({ onBack }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="terms-page-root">
      
      {/* Top Sticky Navigation Bar */}
      <div className="terms-top-bar">
        <div className="terms-top-container">
          <button onClick={onBack} className="terms-back-btn">
            <ArrowLeft size={18} />
            <span>Back to Home</span>
          </button>
          <span className="terms-nav-title">Terms &amp; Conditions</span>
        </div>
      </div>

      {/* Hero Banner Header */}
      <section className="terms-hero">
        <div className="terms-hero-content">
          <div className="terms-eyebrow">
            <Scale size={16} />
            <span>TERMS OF SERVICE &amp; AGREEMENT</span>
          </div>
          <h1 className="terms-title">
            Terms &amp; Conditions
          </h1>
          <p className="terms-subtitle">
            Welcome to Past Life with Sonika. Please read these terms carefully before using our website or booking a session.
          </p>

          {/* Key Metadata Cards */}
          <div className="terms-meta-grid">
            <div className="terms-meta-card">
              <span className="meta-card-label">Effective Date</span>
              <strong className="meta-card-val">September 3, 2026</strong>
            </div>
            <div className="terms-meta-card">
              <span className="meta-card-label">Brand &amp; Website</span>
              <strong className="meta-card-val">pastlifewithsonika.com</strong>
            </div>
            <div className="terms-meta-card">
              <span className="meta-card-label">Official Contact</span>
              <strong className="meta-card-val">pastlifewithsonika@gmail.com</strong>
            </div>
            <div className="terms-meta-card">
              <span className="meta-card-label">Jurisdiction</span>
              <strong className="meta-card-val">Haryana, India</strong>
            </div>
          </div>
        </div>
      </section>

      {/* Main Document Body */}
      <main className="terms-body-container">
        <div className="terms-content-card">
          
          {/* Preamble Box */}
          <div className="terms-intro-box">
            <p>
              Welcome to <strong>Past Life with Sonika</strong>. The website <strong>pastlifewithsonika.com</strong> provides information about past life regression, therapeutic regression, trauma-focused emotional healing, self-exploration, personal transformation, and related wellbeing services offered by Sonika.
            </p>
            <p>
              By accessing this website, contacting us, booking a session, purchasing a service or otherwise using our website, you agree to these Terms &amp; Conditions.
            </p>
          </div>

          <hr className="terms-divider" />

          {/* Section 1 */}
          <section className="policy-section">
            <h2 className="policy-section-title">
              <span className="sec-num">1</span> Nature of Our Services
            </h2>
            <p className="policy-text">
              Past Life with Sonika offers services and sessions that may include:
            </p>
            <ul className="policy-bullet-list grid-bullets">
              <li>Past Life Regression Therapy</li>
              <li>Beyond-Life Regression (Life Between Lives / LBL) Therapy</li>
              <li>Therapeutic Regression</li>
              <li>Trauma-focused emotional healing</li>
              <li>Inner-child work</li>
              <li>Emotional release and self-exploration</li>
              <li>Subconscious-focused therapeutic practices</li>
              <li>Guided meditation and relaxation</li>
              <li>Personal growth and transformation sessions</li>
              <li>Other related wellbeing and personal development services</li>
            </ul>
            <p className="policy-text mt-2">
              The exact services available may change from time to time and will be described on the relevant service or booking page.
            </p>
          </section>

          {/* Section 2 */}
          <section className="policy-section">
            <h2 className="policy-section-title">
              <span className="sec-num">2</span> Understanding Past Life Regression
            </h2>
            <p className="policy-text">
              Past Life Regression is an experiential and exploratory practice that may involve guided relaxation, visualization, memories, emotions, sensations, imagery or experiences perceived by a participant during a session.
            </p>
            <p className="policy-text">
              Experiences arising during a regression session should not automatically be interpreted as historically verified events or factual memories.
            </p>
            <p className="policy-text">
              Different individuals may experience regression differently. Some people may experience vivid imagery or emotions, while others may experience little or nothing. There is no guarantee that a particular memory, experience or emotional response will occur during a session.
            </p>
          </section>

          {/* Section 3 */}
          <section className="policy-section">
            <h2 className="policy-section-title">
              <span className="sec-num">3</span> Purpose of the Sessions
            </h2>
            <p className="policy-text">
              Sessions are intended to support self-exploration, emotional awareness, personal insight, wellbeing and personal development.
            </p>
            <p className="policy-text">
              They are not intended to replace appropriate medical, psychiatric or emergency care. Past Life with Sonika does not claim that regression therapy can diagnose, prevent or cure a medical or psychiatric condition unless such claim is expressly supported by appropriate professional qualifications and applicable law.
            </p>
          </section>

          {/* Section 4 */}
          <section className="policy-section">
            <h2 className="policy-section-title">
              <span className="sec-num">4</span> No Guaranteed Results
            </h2>
            <p className="policy-text">
              Every person's circumstances and experience are different. Past Life with Sonika does not guarantee any particular outcome from a session, including but not limited to:
            </p>
            <ul className="policy-bullet-list">
              <li>Emotional healing</li>
              <li>Trauma resolution</li>
              <li>Relief from anxiety or stress</li>
              <li>Relationship improvement</li>
              <li>Removal of emotional blocks</li>
              <li>Recovery of memories</li>
              <li>Changes in behaviour</li>
              <li>Financial or professional improvement</li>
              <li>Physical health improvement</li>
              <li>Any specific spiritual or personal transformation</li>
            </ul>
            <p className="policy-text callout-note mt-2">
              💡 <em>Testimonials and client experiences displayed on the website represent individual experiences and should not be understood as guaranteed results.</em>
            </p>
          </section>

          {/* Section 5 */}
          <section className="policy-section disclaimer-box">
            <h2 className="policy-section-title">
              <span className="sec-num">5</span> Medical &amp; Mental Health Disclaimer
            </h2>
            <p className="policy-text">
              The services provided through Past Life with Sonika are not a substitute for medical diagnosis, medical treatment, psychiatric treatment, psychotherapy from a licensed mental-health professional, or emergency care where such care is required.
            </p>
            <p className="policy-text">
              If you have a serious medical or mental-health concern, please consult an appropriately qualified healthcare professional.
            </p>
            <p className="policy-text callout-warning">
              ⚠️ <strong>Emergency Notice:</strong> If you are experiencing an emergency or believe that you may be at immediate risk of harming yourself or another person, contact your local emergency service or an appropriate qualified professional immediately.
            </p>
          </section>

          {/* Section 6 */}
          <section className="policy-section">
            <h2 className="policy-section-title">
              <span className="sec-num">6</span> Trauma-Focused Work
            </h2>
            <p className="policy-text">
              Some sessions may involve discussion or exploration of difficult emotions, past experiences or traumatic experiences. Such exploration can sometimes bring up strong emotions or unexpected memories and sensations.
            </p>
            <p className="policy-text">
              Clients are encouraged to communicate openly about their comfort level during a session. You may choose to pause or discontinue a session at any time.
            </p>
          </section>

          {/* Section 7 */}
          <section className="policy-section">
            <h2 className="policy-section-title">
              <span className="sec-num">7</span> Client Responsibility
            </h2>
            <p className="policy-text">
              By booking a session, you acknowledge that you are voluntarily participating in the service.
            </p>
            <p className="policy-text">
              You are responsible for providing accurate information relevant to your booking and for communicating any concerns that may affect your participation. You should seek appropriate professional medical or mental-health advice where necessary.
            </p>
          </section>

          {/* Section 8 */}
          <section className="policy-section">
            <h2 className="policy-section-title">
              <span className="sec-num">8</span> Appointments
            </h2>
            <p className="policy-text">
              Appointments are subject to availability and are considered confirmed only after the required booking or payment process has been completed. You are responsible for providing accurate contact information.
            </p>
            <p className="policy-text">For online sessions, you are responsible for ensuring that you have:</p>
            <ul className="policy-bullet-list">
              <li>A suitable device</li>
              <li>Reliable internet access</li>
              <li>A functioning microphone/camera where required</li>
              <li>A quiet and reasonably private environment</li>
            </ul>
          </section>

          {/* Section 9 */}
          <section className="policy-section">
            <h2 className="policy-section-title">
              <span className="sec-num">9</span> Cancellation &amp; Rescheduling
            </h2>
            <p className="policy-text">
              If you are unable to attend an appointment, please inform us as early as possible.
            </p>
            <p className="policy-text">
              Cancellation and rescheduling are governed by our <strong>Refund &amp; Cancellation Policy</strong>, which forms part of these Terms &amp; Conditions. Repeated cancellations, late cancellations or missed appointments may result in the session fee being forfeited.
            </p>
          </section>

          {/* Section 10 */}
          <section className="policy-section">
            <h2 className="policy-section-title">
              <span className="sec-num">10</span> Payments
            </h2>
            <p className="policy-text">
              Where payment is required, you agree to provide accurate payment information. The applicable price will be displayed or communicated before booking.
            </p>
            <p className="policy-text">
              Prices and service offerings may change from time to time. Changes will generally not affect an already confirmed booking unless otherwise communicated.
            </p>
          </section>

          {/* Section 11 */}
          <section className="policy-section">
            <h2 className="policy-section-title">
              <span className="sec-num">11</span> Website Information
            </h2>
            <p className="policy-text">
              The content published on pastlifewithsonika.com is intended primarily for general information, education and personal-development purposes.
            </p>
            <p className="policy-text">
              Information about regression, trauma, emotional wellbeing, spirituality or related subjects should not be interpreted as individualized medical or psychiatric advice.
            </p>
          </section>

          {/* Section 12 */}
          <section className="policy-section">
            <h2 className="policy-section-title">
              <span className="sec-num">12</span> Testimonials
            </h2>
            <p className="policy-text">
              The website may contain testimonials, reviews or personal experiences from clients or other individuals.
            </p>
            <p className="policy-text">
              Testimonials represent the experiences of the individuals providing them. Individual results vary and Past Life with Sonika does not guarantee that another person will have the same experience.
            </p>
          </section>

          {/* Section 13 */}
          <section className="policy-section">
            <h2 className="policy-section-title">
              <span className="sec-num">13</span> Intellectual Property
            </h2>
            <p className="policy-text">
              Unless otherwise stated, all content on pastlifewithsonika.com belongs to or is used with permission by Past Life with Sonika. This includes:
            </p>
            <ul className="policy-bullet-list grid-bullets">
              <li>Website text</li>
              <li>Branding</li>
              <li>Logos</li>
              <li>Images</li>
              <li>Videos</li>
              <li>Graphics</li>
              <li>Educational materials</li>
              <li>Original articles</li>
              <li>Digital content</li>
              <li>Other creative materials</li>
            </ul>
            <p className="policy-text mt-2">
              You may not reproduce, copy, modify, distribute or commercially use this material without prior written permission.
            </p>
          </section>

          {/* Section 14 */}
          <section className="policy-section">
            <h2 className="policy-section-title">
              <span className="sec-num">14</span> Third-Party Platforms
            </h2>
            <p className="policy-text">
              The website may use third-party services for payments, appointments, communication, analytics, hosting or other functionality.
            </p>
            <p className="policy-text">
              Your use of such third-party services may also be governed by their own terms and privacy policies. Past Life with Sonika is not responsible for the independent practices, availability or policies of third-party platforms.
            </p>
          </section>

          {/* Section 15 */}
          <section className="policy-section">
            <h2 className="policy-section-title">
              <span className="sec-num">15</span> Website Availability
            </h2>
            <p className="policy-text">
              We make reasonable efforts to keep the website operational and accessible.
            </p>
            <p className="policy-text">
              However, we do not guarantee that the website will always be available, uninterrupted, secure or free from errors. We may modify, suspend or discontinue any part of the website or its content without prior notice.
            </p>
          </section>

          {/* Section 16 */}
          <section className="policy-section">
            <h2 className="policy-section-title">
              <span className="sec-num">16</span> Prohibited Use
            </h2>
            <p className="policy-text">You agree not to use the website:</p>
            <ul className="policy-bullet-list">
              <li>For unlawful purposes.</li>
              <li>To interfere with website security or functionality.</li>
              <li>To attempt unauthorized access to our systems.</li>
              <li>To copy or exploit website content without permission.</li>
              <li>To submit malicious or harmful material.</li>
              <li>To impersonate another person.</li>
              <li>To use the website in a manner that could harm Past Life with Sonika or others.</li>
            </ul>
          </section>

          {/* Section 17 */}
          <section className="policy-section">
            <h2 className="policy-section-title">
              <span className="sec-num">17</span> Limitation of Liability
            </h2>
            <p className="policy-text">
              To the maximum extent permitted by applicable law, Past Life with Sonika shall not be liable for indirect, incidental, consequential or unforeseeable losses arising from the use of the website or participation in our services.
            </p>
            <p className="policy-text">
              Nothing in these Terms &amp; Conditions excludes or limits any liability that cannot legally be excluded or limited under applicable law.
            </p>
          </section>

          {/* Section 18 */}
          <section className="policy-section">
            <h2 className="policy-section-title">
              <span className="sec-num">18</span> Privacy
            </h2>
            <p className="policy-text">
              Your use of this website is also subject to our <strong>Privacy Policy</strong>, which explains how personal information may be collected, used and protected.
            </p>
          </section>

          {/* Section 19 */}
          <section className="policy-section">
            <h2 className="policy-section-title">
              <span className="sec-num">19</span> Changes to These Terms
            </h2>
            <p className="policy-text">
              Past Life with Sonika may update these Terms &amp; Conditions from time to time.
            </p>
            <p className="policy-text">
              The latest version will be published on this page together with the applicable effective date.
            </p>
          </section>

          {/* Section 20 */}
          <section className="policy-section">
            <h2 className="policy-section-title">
              <span className="sec-num">20</span> Governing Law
            </h2>
            <p className="policy-text">
              These Terms &amp; Conditions shall be governed by the applicable laws of India.
            </p>
            <p className="policy-text">
              Subject to applicable law, disputes arising from these Terms &amp; Conditions or the use of our services shall be subject to the appropriate courts in Haryana, India.
            </p>
          </section>

          {/* Section 21 - Contact Us Box */}
          <section className="policy-section contact-policy-box">
            <h2 className="policy-section-title">
              <span className="sec-num">21</span> Contact Us
            </h2>
            <p className="policy-text mb-4">
              For any questions or legal inquiries regarding these Terms &amp; Conditions:
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

export default TermsPage
