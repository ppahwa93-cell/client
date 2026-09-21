import { useState, useEffect } from 'react'
import { 
  Home, 
  User, 
  Sparkles, 
  Star, 
  HelpCircle, 
  Mail, 
  ChevronDown, 
  Menu, 
  X, 
  PhoneCall, 
  Moon,
  HeartHandshake,
  Zap,
  ShieldCheck,
  Globe2,
  Compass
} from 'lucide-react'
import TopMarquee from './TopMarquee'
import { servicesData } from '../data/serviceData'

function Header({ activeTab = 'home', setActiveTab = () => {}, onSelectServiceById = () => {}, onOpenBooking = () => {} }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const servicesList = [
    { id: 'plr-therapy', title: 'Past Life Regression Therapy', icon: Moon, desc: 'Uncover past life memories & karmic patterns' },
    { id: 'beyond-life-regression', title: 'Beyond Life Regression - Soul Contacts', icon: Compass, desc: 'Explore between-lives state, guides & soul contracts' },
    { id: 'hypnoheal-therapy', title: 'Hypnoheal & Subconscious Rewiring', icon: Zap, desc: 'Reprogram fear loops & mental phobias' },
    { id: 'inner-child-healing', title: 'Inner Child Healing Therapy', icon: HeartHandshake, desc: 'Heal childhood wounds & rejection triggers' },
    { id: 'emotional-trauma-healing', title: 'Emotional & Trauma Healing', icon: ShieldCheck, desc: 'Release somatic trauma & aura blocks' },
    { id: 'soul-energy', title: 'Soul & Energy Healing', icon: Sparkles, desc: 'Chakra balancing & spiritual alignment' },
  ]

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { 
      id: 'services', 
      label: 'Services', 
      icon: Sparkles, 
      hasDropdown: true 
    },
    { id: 'testimonials', label: 'Testimonials', icon: Star },
    { id: 'faqs', label: 'FAQs', icon: HelpCircle },
    { id: 'contact', label: 'Contact', icon: Mail }
  ]

  const handleNavClick = (id) => {
    setActiveTab(id)
    setIsMobileMenuOpen(false)
    setIsServicesOpen(false)
  }

  const handleServiceClick = (serviceId) => {
    setIsMobileMenuOpen(false)
    setIsServicesOpen(false)
    if (onSelectServiceById) {
      onSelectServiceById(serviceId)
    } else {
      setActiveTab('services')
    }
  }

  return (
    <header className={`site-header ${isScrolled ? 'scrolled' : ''}`}>
      {/* Top Animated Marquee Banner */}
      <TopMarquee />

      {/* Main Navbar Header */}
      <div className="navbar">
        <div className="navbar-container">
          
          {/* Logo & Brand Name */}
          <a 
            href="#home" 
            className="navbar-brand" 
            onClick={(e) => {
              e.preventDefault()
              handleNavClick('home')
            }}
          >
            <div className="brand-logo-frame">
              <img
                src="/past life logo.jpeg"
                alt="Past Life With Sonika Logo"
                className="brand-logo-img"
                decoding="async"
              />
            </div>
          </a>

          {/* Navigation Links */}
          <nav className={`nav-menu ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            {navItems.map((item) => {
              const isActive = activeTab === item.id || (item.id === 'services' && activeTab.startsWith('service'))
              
              if (item.hasDropdown) {
                return (
                  <div 
                    key={item.id} 
                    className={`nav-item dropdown-wrapper ${isActive ? 'active-wrapper' : ''}`}
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    <button
                      className={`nav-link dropdown-btn ${isActive ? 'active' : ''}`}
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                    >
                      <span>{item.label}</span>
                      <ChevronDown size={14} className={`dropdown-arrow ${isServicesOpen ? 'rotate' : ''}`} />
                      {isActive && <div className="active-line-indicator" />}
                    </button>

                    {/* Services Dropdown Menu */}
                    <div className={`dropdown-menu ${isServicesOpen ? 'show' : ''}`}>
                      <div className="dropdown-header">
                        <span>Our Sacred Services (Click to view)</span>
                      </div>
                      <div className="dropdown-items-grid">
                        {servicesList.map((service) => {
                          return (
                            <a
                              key={service.id}
                              href={`#${service.id}`}
                              className="dropdown-item"
                              onClick={(e) => {
                                e.preventDefault()
                                handleServiceClick(service.id)
                              }}
                            >
                              <div className="dropdown-item-content">
                                <div className="dropdown-item-title">{service.title}</div>
                                <div className="dropdown-item-desc">{service.desc}</div>
                              </div>
                            </a>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                )
              }

              return (
                <div key={item.id} className="nav-item">
                  <a
                    href={`#${item.id}`}
                    className={`nav-link ${isActive ? 'active' : ''}`}
                    onClick={(e) => {
                      e.preventDefault()
                      handleNavClick(item.id)
                    }}
                  >
                    <span>{item.label}</span>
                    {isActive && <div className="active-line-indicator" />}
                  </a>
                </div>
              )
            })}
          </nav>

          {/* Right Action CTA Button */}
          <div className="navbar-actions">
            <button 
              className="btn-header-cta" 
              onClick={onOpenBooking}
            >
              <PhoneCall size={16} />
              <span>Book Consultation</span>
            </button>

            {/* Mobile Hamburger Toggle Button */}
            <button
              className="mobile-toggle-btn"
              aria-label="Toggle navigation menu"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </div>
    </header>
  )
}

export default Header
