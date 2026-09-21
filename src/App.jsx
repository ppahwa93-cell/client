import { useState, useEffect } from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import ServicesSection from './components/ServicesSection'
import JourneySection from './components/JourneySection'
import TestimonialsSection from './components/TestimonialsSection'
import Footer from './components/Footer'
import Preloader from './components/Preloader'
import FloatingContact from './components/FloatingContact'
import ServiceDetailPage from './components/ServiceDetailPage'
import ContactPage from './components/ContactPage'
import PrivacyPolicyPage from './components/PrivacyPolicyPage'
import RefundPolicyPage from './components/RefundPolicyPage'
import TermsPage from './components/TermsPage'
import BookingModal from './components/BookingModal'
import AdminPanel from './components/AdminPanel'
import { getDynamicServices, getDynamicConsultation } from './utils/serviceStorage'

function App() {
  const isInitialAdmin = () => {
    if (typeof window === 'undefined') return false
    return (
      window.location.pathname.toLowerCase().includes('/admin') ||
      window.location.hash.toLowerCase() === '#admin' ||
      window.location.search.includes('admin')
    )
  }

  const [activeTab, setActiveTab] = useState(isInitialAdmin() ? 'admin' : 'home')
  const [isLoading, setIsLoading] = useState(true)
  const [servicesList, setServicesList] = useState(getDynamicServices())
  const [consultationInfo, setConsultationInfo] = useState(getDynamicConsultation())
  const [selectedService, setSelectedService] = useState(null)
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [bookingServiceId, setBookingServiceId] = useState('consultation')

  // Listen to browser URL navigation & dynamic service updates
  useEffect(() => {
    const handleLocationChange = () => {
      if (
        window.location.pathname.toLowerCase().includes('/admin') ||
        window.location.hash.toLowerCase() === '#admin' ||
        window.location.search.includes('admin')
      ) {
        setActiveTab('admin')
        setSelectedService(null)
      }
    }

    const handleServicesUpdate = () => {
      const freshServices = getDynamicServices()
      const freshConsultation = getDynamicConsultation()
      setServicesList(freshServices)
      setConsultationInfo(freshConsultation)

      // If a service detail is open, refresh it with updated pricing/info
      if (selectedService) {
        const found = freshServices.find(s => s.id === selectedService.id)
        if (found) setSelectedService(found)
      }
    }

    window.addEventListener('popstate', handleLocationChange)
    window.addEventListener('hashchange', handleLocationChange)
    window.addEventListener('pastlife_services_updated', handleServicesUpdate)

    return () => {
      window.removeEventListener('popstate', handleLocationChange)
      window.removeEventListener('hashchange', handleLocationChange)
      window.removeEventListener('pastlife_services_updated', handleServicesUpdate)
    }
  }, [selectedService])

  const handleOpenBooking = (serviceId = 'consultation') => {
    setBookingServiceId(serviceId)
    setIsBookingOpen(true)
  }

  const handleCloseBooking = () => {
    setIsBookingOpen(false)
  }

  const handleSelectService = (service) => {
    setSelectedService(service)
    setActiveTab(`service:${service.id}`)
  }

  const handleSelectServiceById = (serviceId) => {
    const currentServices = getDynamicServices()
    const found = currentServices.find(s => s.id === serviceId)
    if (found) {
      setSelectedService(found)
      setActiveTab(`service:${found.id}`)
    }
  }

  const handleBackToMain = () => {
    setSelectedService(null)
    setActiveTab('services')
    setTimeout(() => {
      const servicesEl = document.getElementById('services')
      if (servicesEl) servicesEl.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }

  const handleNavClick = (tabId) => {
    setSelectedService(null)
    setActiveTab(tabId)
    
    if (tabId === 'admin') {
      try {
        window.history.pushState(null, '', '/admin')
      } catch (e) {}
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    } else {
      if (window.location.pathname.toLowerCase().includes('/admin')) {
        try {
          window.history.pushState(null, '', '/')
        } catch (e) {}
      }
    }

    if (tabId !== 'home' && tabId !== 'contact' && tabId !== 'privacy' && tabId !== 'refund' && tabId !== 'terms') {
      setTimeout(() => {
        const el = document.getElementById(tabId)
        if (el) el.scrollIntoView({ behavior: 'smooth' })
      }, 100)
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }

  // If in admin mode, show full screen Admin Panel
  if (activeTab === 'admin') {
    return (
      <div className="admin-app-root">
        <AdminPanel onNavigateHome={() => handleNavClick('home')} />
      </div>
    )
  }

  return (
    <div>
      {isLoading && <Preloader onLoaded={() => setIsLoading(false)} />}
      <Header 
        activeTab={activeTab} 
        setActiveTab={handleNavClick} 
        onSelectServiceById={handleSelectServiceById}
        onOpenBooking={() => handleOpenBooking('consultation')}
      />
      <main>
        {selectedService ? (
          <ServiceDetailPage 
            service={selectedService} 
            onBack={handleBackToMain} 
            onOpenBooking={(id) => handleOpenBooking(id || selectedService.id)}
          />
        ) : activeTab === 'contact' ? (
          <ContactPage 
            onBack={() => handleNavClick('home')} 
            onOpenBooking={handleOpenBooking}
          />
        ) : activeTab === 'privacy' ? (
          <PrivacyPolicyPage onBack={() => handleNavClick('home')} />
        ) : activeTab === 'refund' ? (
          <RefundPolicyPage onBack={() => handleNavClick('home')} />
        ) : activeTab === 'terms' ? (
          <TermsPage onBack={() => handleNavClick('home')} />
        ) : (
          <>
            <HeroSection 
              setActiveTab={handleNavClick} 
              onOpenBooking={() => handleOpenBooking('consultation')}
            />
            <AboutSection />
            <ServicesSection 
              services={servicesList}
              consultation={consultationInfo}
              onSelectService={handleSelectService} 
              onOpenBooking={handleOpenBooking}
            />
            <JourneySection />
            <TestimonialsSection />
          </>
        )}
      </main>
      <Footer 
        onSelectServiceById={handleSelectServiceById}
        onNavClick={handleNavClick}
        onOpenBooking={() => handleOpenBooking('consultation')}
      />
      <FloatingContact />
      <BookingModal 
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        initialServiceId={bookingServiceId}
      />
    </div>
  )
}

export default App
