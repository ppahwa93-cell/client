import { Phone } from 'lucide-react'
import WhatsAppIcon from './WhatsAppIcon'

function FloatingContact() {
  const phoneNum = '+919915896655'
  const whatsappUrl = `https://wa.me/919915896655?text=Hello%20Sonika%20Gupta,%20I%20would%20like%20to%20know%20more%20about%20Past%20Life%20Regression%20Therapy.`

  return (
    <div className="floating-contact-container">

      {/* WhatsApp Button */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="floating-btn whatsapp-btn"
        aria-label="Chat on WhatsApp"
      >
        <div className="btn-pulse-ring whatsapp-pulse" />
        <WhatsAppIcon size={26} />
        <span className="floating-tooltip">Chat on WhatsApp</span>
      </a>

      {/* Direct Call Button */}
      <a
        href={`tel:${phoneNum}`}
        className="floating-btn call-btn"
        aria-label="Call Sonika Gupta"
      >
        <div className="btn-pulse-ring call-pulse" />
        <Phone size={22} />
        <span className="floating-tooltip">Call +91 99158 96655</span>
      </a>

    </div>
  )
}

export default FloatingContact
