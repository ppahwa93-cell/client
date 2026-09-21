import React from 'react'
import { Phone, Mail, MapPin, Heart, ArrowUp } from 'lucide-react'
import WhatsAppIcon from './WhatsAppIcon'

const InstagramIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)

const FacebookIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
)

const YoutubeIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
  </svg>
)

function Footer({ onSelectServiceById, onNavClick }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const handleLinkClick = (e, target) => {
    e.preventDefault()
    if (target.startsWith('service:')) {
      const serviceId = target.replace('service:', '')
      if (onSelectServiceById) onSelectServiceById(serviceId)
    } else {
      if (onNavClick) onNavClick(target)
      const el = document.getElementById(target)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <footer className="site-footer">
      
      {/* Top Footer Waves/Border Accent */}
      <div className="footer-top-accent" />

      <div className="footer-container">
        <div className="footer-grid">
          
          {/* Column 1: Brand Info */}
          <div className="footer-col brand-col">
            <div className="footer-brand-header">
              <div className="footer-logo-frame">
                <img src="/sonika gupta.png" alt="Sonika Gupta" className="footer-logo-img" />
              </div>
              <div className="footer-brand-titles">
                <h3 className="footer-brand-name">Sonika Gupta</h3>
                <span className="footer-brand-subtitle">Past Life Regression &amp; Healing</span>
              </div>
            </div>

            <p className="footer-bio">
              We help people recognise the invisible patterns shaping their present by gently illuminating the stories held in their past lives — so they can finally move forward with clarity, peace, and intention.
            </p>

            {/* Social Media Icons */}
            <div className="footer-socials">
              <a href="#" className="social-icon-btn" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <InstagramIcon size={18} />
              </a>
              <a href="#" className="social-icon-btn" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <FacebookIcon size={18} />
              </a>
              <a href="#" className="social-icon-btn" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
                <YoutubeIcon size={18} />
              </a>
              <a href="https://wa.me/919915896655" className="social-icon-btn whatsapp-icon" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon size={18} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Navigation</h4>
            <ul className="footer-links-list">
              <li><a href="#home" onClick={(e) => handleLinkClick(e, 'home')}>Home Banner</a></li>
              <li><a href="#about" onClick={(e) => handleLinkClick(e, 'about')}>About Sonika</a></li>
              <li><a href="#services" onClick={(e) => handleLinkClick(e, 'services')}>Sacred Services</a></li>
              <li><a href="#journey" onClick={(e) => handleLinkClick(e, 'journey')}>3-Step Journey</a></li>
              <li><a href="#privacy" onClick={(e) => handleLinkClick(e, 'privacy')}>Privacy Policy</a></li>
              <li><a href="#refund" onClick={(e) => handleLinkClick(e, 'refund')}>Refund Policy</a></li>
              <li><a href="#terms" onClick={(e) => handleLinkClick(e, 'terms')}>Terms &amp; Conditions</a></li>
            </ul>
          </div>

          {/* Column 3: Core Services */}
          <div className="footer-col">
            <h4 className="footer-col-title">Healing Therapies</h4>
            <ul className="footer-links-list">
              <li><a href="#plr-therapy" onClick={(e) => handleLinkClick(e, 'service:plr-therapy')}>Past Life Regression</a></li>
              <li><a href="#beyond-life-regression" onClick={(e) => handleLinkClick(e, 'service:beyond-life-regression')}>Beyond-Life (LBL) Regression</a></li>
              <li><a href="#hypnoheal-therapy" onClick={(e) => handleLinkClick(e, 'service:hypnoheal-therapy')}>Hypnoheal Therapy</a></li>
              <li><a href="#inner-child-healing" onClick={(e) => handleLinkClick(e, 'service:inner-child-healing')}>Inner Child Healing</a></li>
              <li><a href="#emotional-trauma-healing" onClick={(e) => handleLinkClick(e, 'service:emotional-trauma-healing')}>Emotional &amp; Trauma Healing</a></li>
              <li><a href="#soul-energy" onClick={(e) => handleLinkClick(e, 'service:soul-energy')}>Soul &amp; Energy Healing</a></li>
            </ul>
          </div>

          {/* Column 4: Contact & Booking */}
          <div className="footer-col contact-col">
            <h4 className="footer-col-title">Get in Touch</h4>
            <div className="footer-contact-info">
              
              <a href="tel:+919915896655" className="contact-item-link">
                <div className="contact-icon-wrap">
                  <Phone size={16} />
                </div>
                <div className="contact-text-group">
                  <span className="contact-lbl">Call / WhatsApp</span>
                  <strong className="contact-val">+91 99158 96655</strong>
                </div>
              </a>

              <a href="mailto:pastlifewithsonika@gmail.com" className="contact-item-link">
                <div className="contact-icon-wrap">
                  <Mail size={16} />
                </div>
                <div className="contact-text-group">
                  <span className="contact-lbl">Official Email</span>
                  <strong className="contact-val">pastlifewithsonika@gmail.com</strong>
                </div>
              </a>

              <div className="contact-item-link static-item">
                <div className="contact-icon-wrap">
                  <MapPin size={16} />
                </div>
                <div className="contact-text-group">
                  <span className="contact-lbl">Session Format</span>
                  <strong className="contact-val">1-on-1 Online via Zoom (Worldwide)</strong>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="footer-bottom-bar">
          <p className="copyright-text">
            &copy; {new Date().getFullYear()} Sonika Gupta. All Rights Reserved. |{' '}
            <a href="#terms" onClick={(e) => handleLinkClick(e, 'terms')} className="footer-legal-link">
              Terms &amp; Conditions
            </a>{' '}
            |{' '}
            <a href="#privacy" onClick={(e) => handleLinkClick(e, 'privacy')} className="footer-legal-link">
              Privacy Policy
            </a>{' '}
            |{' '}
            <a href="#refund" onClick={(e) => handleLinkClick(e, 'refund')} className="footer-legal-link">
              Refund &amp; Cancellation Policy
            </a>{' '}
            |{' '}
            <a href="/admin" onClick={(e) => handleLinkClick(e, 'admin')} className="footer-legal-link admin-link-subtle">
              Admin Portal
            </a>{' '}
            | Developed by{' '}
            <a href="tel:7018610136" className="developer-link">
              Vikas 7018610136
            </a>
          </p>

          <button onClick={scrollToTop} className="back-to-top-btn" aria-label="Back to top">
            <span>Back to top</span>
            <ArrowUp size={16} />
          </button>
        </div>

      </div>
    </footer>
  )
}

export default Footer
