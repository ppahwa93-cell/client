import React, { useEffect } from 'react'
import { ArrowLeft, ShieldCheck, Mail, Phone, MapPin, Globe, Sparkles, FileText, Lock, CheckCircle2 } from 'lucide-react'
import './PrivacyPolicyPage.css'

function PrivacyPolicyPage({ onBack }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="privacy-page-root">
      
      {/* Back Navigation Bar */}
      <div className="privacy-top-bar">
        <div className="privacy-top-container">
          <button onClick={onBack} className="privacy-back-btn">
            <ArrowLeft size={18} />
            <span>Back to Home</span>
          </button>
          <span className="privacy-nav-title">Privacy Policy</span>
        </div>
      </div>

      {/* Hero Banner Header */}
      <section className="privacy-hero">
        <div className="privacy-hero-content">
          <div className="privacy-eyebrow">
            <ShieldCheck size={16} />
            <span>DATA CONFIDENTIALITY &amp; TRUST</span>
          </div>
          <h1 className="privacy-title">
            Privacy Policy
          </h1>
          <p className="privacy-subtitle">
            At Past Life with Sonika, we respect your privacy and are committed to handling your personal information responsibly, ethically, and securely.
          </p>

          {/* Key Metadata Cards */}
          <div className="privacy-meta-grid">
            <div className="privacy-meta-card">
              <span className="meta-card-label">Effective Date</span>
              <strong className="meta-card-val">September 3, 2026</strong>
            </div>
            <div className="privacy-meta-card">
              <span className="meta-card-label">Brand &amp; Website</span>
              <strong className="meta-card-val">pastlifewithsonika.com</strong>
            </div>
            <div className="privacy-meta-card">
              <span className="meta-card-label">Official Contact</span>
              <strong className="meta-card-val">pastlifewithsonika@gmail.com</strong>
            </div>
            <div className="privacy-meta-card">
              <span className="meta-card-label">Location</span>
              <strong className="meta-card-val">Panchkula, Haryana, India</strong>
            </div>
          </div>
        </div>
      </section>

      {/* Main Policy Document Body */}
      <main className="privacy-body-container">
        <div className="privacy-content-card">
          
          {/* Preamble Box */}
          <div className="privacy-intro-box">
            <p>
              At <strong>Past Life with Sonika</strong>, we understand that people seeking personal transformation, regression, and emotional healing may choose to share personal and sensitive information.
            </p>
            <p>
              We respect your privacy and are committed to handling personal information responsibly. This Privacy Policy explains how information may be collected, used, and protected when you visit <strong>pastlifewithsonika.com</strong>, contact us, or book and participate in our services.
            </p>
          </div>

          <hr className="privacy-divider" />

          {/* Section 1 */}
          <section className="policy-section">
            <h2 className="policy-section-title">
              <span className="sec-num">1</span> Information We May Collect
            </h2>
            <p className="policy-text">
              Depending on how you interact with our website and services, we may collect:
            </p>

            <div className="policy-subgroup">
              <h3 className="policy-sub-title">Personal Information</h3>
              <ul className="policy-bullet-list">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>City or general location</li>
                <li>Information submitted through contact or enquiry forms</li>
              </ul>
            </div>

            <div className="policy-subgroup">
              <h3 className="policy-sub-title">Booking Information</h3>
              <p className="policy-text">When you book a session, we may collect information such as:</p>
              <ul className="policy-bullet-list">
                <li>Name</li>
                <li>Contact details</li>
                <li>Appointment details</li>
                <li>Service selected</li>
                <li>Payment or transaction details</li>
                <li>Information necessary to manage your appointment</li>
              </ul>
            </div>

            <div className="policy-subgroup">
              <h3 className="policy-sub-title">Information You Voluntarily Share</h3>
              <p className="policy-text">
                You may voluntarily share information about your personal experiences, emotional concerns, life circumstances, goals or other matters when contacting us or participating in a session.
              </p>
              <p className="policy-text callout-note">
                💡 <em>Please only provide information that you are comfortable sharing and that is reasonably necessary for the service.</em>
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="policy-section">
            <h2 className="policy-section-title">
              <span className="sec-num">2</span> How We Use Information
            </h2>
            <p className="policy-text">Information may be used to:</p>
            <ul className="policy-bullet-list grid-bullets">
              <li>Respond to enquiries.</li>
              <li>Schedule appointments.</li>
              <li>Provide requested services.</li>
              <li>Communicate with you regarding your booking.</li>
              <li>Process payments.</li>
              <li>Provide customer support.</li>
              <li>Maintain business records.</li>
              <li>Improve our website and services.</li>
              <li>Send service-related communications.</li>
              <li>Send marketing communications where permitted and, where required, with appropriate consent.</li>
              <li>Prevent fraud or misuse.</li>
              <li>Comply with applicable legal obligations.</li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="policy-section">
            <h2 className="policy-section-title">
              <span className="sec-num">3</span> Sensitive Information
            </h2>
            <p className="policy-text">
              Information shared during a therapeutic or regression session may be personal or sensitive.
            </p>
            <p className="policy-text">
              We will take reasonable steps to protect such information and use it only for legitimate purposes connected with providing or managing our services, maintaining appropriate records, complying with legal obligations, or otherwise as permitted by applicable law.
            </p>
          </section>

          {/* Section 4 */}
          <section className="policy-section">
            <h2 className="policy-section-title">
              <span className="sec-num">4</span> Confidentiality
            </h2>
            <p className="policy-text">
              We respect the confidential nature of information shared during sessions.
            </p>
            <p className="policy-text">
              However, confidentiality is not absolute and may be subject to legal obligations or circumstances where disclosure is required or permitted by applicable law. This may include situations involving a legal requirement, court order, serious safety concern, or other circumstances recognized under applicable law.
            </p>
          </section>

          {/* Section 5 */}
          <section className="policy-section">
            <h2 className="policy-section-title">
              <span className="sec-num">5</span> Payment Information
            </h2>
            <p className="policy-text">
              Payments may be processed through third-party payment gateways or financial service providers. Where applicable, those providers may collect and process payment information directly.
            </p>
            <p className="policy-text">
              Past Life with Sonika does not intentionally retain complete debit or credit card information unless required and lawfully permitted.
            </p>
          </section>

          {/* Section 6 */}
          <section className="policy-section">
            <h2 className="policy-section-title">
              <span className="sec-num">6</span> Cookies
            </h2>
            <p className="policy-text">
              Our website may use cookies and similar technologies to improve website functionality, understand website usage and enhance the visitor experience.
            </p>
            <p className="policy-text">Cookies may help us understand general information such as:</p>
            <ul className="policy-bullet-list">
              <li>Pages visited</li>
              <li>Website interactions</li>
              <li>Browser/device information</li>
              <li>General traffic patterns</li>
            </ul>
            <p className="policy-text mt-2">
              You may control certain cookies through your browser settings.
            </p>
          </section>

          {/* Section 7 */}
          <section className="policy-section">
            <h2 className="policy-section-title">
              <span className="sec-num">7</span> Analytics &amp; Website Technologies
            </h2>
            <p className="policy-text">
              We may use third-party analytics or website technologies to understand how visitors use our website and to improve website performance.
            </p>
            <p className="policy-text">
              Such services may collect information including device information, browser information, approximate location, pages visited and general website activity. Third-party services may process information according to their own privacy policies.
            </p>
          </section>

          {/* Section 8 */}
          <section className="policy-section">
            <h2 className="policy-section-title">
              <span className="sec-num">8</span> Communications
            </h2>
            <p className="policy-text">
              If you contact Past Life with Sonika through email, telephone, website forms, messaging applications or other communication channels, we may retain relevant information necessary to respond to your enquiry or manage your relationship with us.
            </p>
            <p className="policy-text">We may contact you regarding:</p>
            <ul className="policy-bullet-list">
              <li>Appointment confirmations</li>
              <li>Appointment reminders</li>
              <li>Rescheduling</li>
              <li>Payments</li>
              <li>Service-related information</li>
              <li>Responses to enquiries</li>
            </ul>
            <p className="policy-text mt-2">
              Marketing communications will be sent in accordance with applicable law.
            </p>
          </section>

          {/* Section 9 */}
          <section className="policy-section">
            <h2 className="policy-section-title">
              <span className="sec-num">9</span> Sharing of Information
            </h2>
            <p className="policy-text">
              Past Life with Sonika does not sell or rent your personal information for monetary gain.
            </p>
            <p className="policy-text">
              Information may be shared with third parties where reasonably necessary to operate the website and provide services, including:
            </p>
            <ul className="policy-bullet-list grid-bullets">
              <li>Payment providers</li>
              <li>Website hosting providers</li>
              <li>Appointment/scheduling platforms</li>
              <li>Communication providers</li>
              <li>Technology providers</li>
              <li>Professional service providers</li>
              <li>Government or law-enforcement authorities where legally required</li>
            </ul>
            <p className="policy-text mt-2">
              We aim to limit information shared to what is reasonably necessary for the relevant purpose.
            </p>
          </section>

          {/* Section 10 */}
          <section className="policy-section">
            <h2 className="policy-section-title">
              <span className="sec-num">10</span> Data Security
            </h2>
            <p className="policy-text">
              We take reasonable measures to protect personal information against unauthorized access, misuse, alteration, disclosure or destruction.
            </p>
            <p className="policy-text">
              However, no internet transmission or electronic storage system can be guaranteed to be completely secure.
            </p>
          </section>

          {/* Section 11 */}
          <section className="policy-section">
            <h2 className="policy-section-title">
              <span className="sec-num">11</span> Data Retention
            </h2>
            <p className="policy-text">
              We may retain personal information for as long as reasonably necessary to:
            </p>
            <ul className="policy-bullet-list">
              <li>Provide services.</li>
              <li>Manage appointments.</li>
              <li>Maintain business records.</li>
              <li>Process transactions.</li>
              <li>Resolve disputes.</li>
              <li>Meet legal, accounting or regulatory requirements.</li>
              <li>Protect our legal rights.</li>
            </ul>
            <p className="policy-text mt-2">
              When information is no longer reasonably required, it may be deleted or anonymized where appropriate.
            </p>
          </section>

          {/* Section 12 */}
          <section className="policy-section">
            <h2 className="policy-section-title">
              <span className="sec-num">12</span> Your Privacy Rights
            </h2>
            <p className="policy-text">
              Subject to applicable law, you may have rights relating to your personal information, including the right to request:
            </p>
            <ul className="policy-bullet-list">
              <li>Access to certain personal information.</li>
              <li>Correction of inaccurate information.</li>
              <li>Deletion where legally permissible.</li>
              <li>Withdrawal of consent where applicable.</li>
              <li>Information about how your information is being processed.</li>
            </ul>
            <p className="policy-text mt-2">
              To make a privacy-related request, please contact us.
            </p>
          </section>

          {/* Section 13 */}
          <section className="policy-section">
            <h2 className="policy-section-title">
              <span className="sec-num">13</span> Children's Privacy
            </h2>
            <p className="policy-text">
              The website is not intentionally designed to collect personal information from children without appropriate parental or legal guardian involvement.
            </p>
            <p className="policy-text">
              If you believe that a child has provided personal information without appropriate authorization, please contact us.
            </p>
          </section>

          {/* Section 14 */}
          <section className="policy-section">
            <h2 className="policy-section-title">
              <span className="sec-num">14</span> Third-Party Websites
            </h2>
            <p className="policy-text">
              Our website may contain links to external websites, social media platforms or third-party services.
            </p>
            <p className="policy-text">
              We do not control those websites and are not responsible for their privacy practices, content or security. Please review the privacy policies of third-party websites before providing them with personal information.
            </p>
          </section>

          {/* Section 15 */}
          <section className="policy-section">
            <h2 className="policy-section-title">
              <span className="sec-num">15</span> Changes to This Privacy Policy
            </h2>
            <p className="policy-text">
              We may update this Privacy Policy periodically. The latest version will be published on <strong>pastlifewithsonika.com</strong> with the applicable effective date.
            </p>
          </section>

          {/* Section 16 - Contact Us Box */}
          <section className="policy-section contact-policy-box">
            <h2 className="policy-section-title">
              <span className="sec-num">16</span> Contact Us
            </h2>
            <p className="policy-text mb-4">
              For questions, requests or concerns relating to privacy, please reach out to us:
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

export default PrivacyPolicyPage
