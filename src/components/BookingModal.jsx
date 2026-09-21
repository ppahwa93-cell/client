import React, { useState, useEffect } from 'react'
import { 
  X, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  Lock, 
  CreditCard, 
  Copy, 
  Check, 
  ChevronRight,
  AlertCircle
} from 'lucide-react'
import WhatsAppIcon from './WhatsAppIcon'
import { RAZORPAY_CONFIG, launchRazorpayPayment } from '../config/razorpay'
import { getDynamicServices, getDynamicConsultation } from '../utils/serviceStorage'
import { saveNewAppointment } from '../utils/appointmentStorage'

function BookingModal({ isOpen, onClose, initialServiceId = 'consultation' }) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    date: '',
    timeSlot: 'morning',
    notes: ''
  })
  const [selectedStep, setSelectedStep] = useState(null) // null by default, user must choose 1 or 2
  const [isProcessing, setIsProcessing] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const [paymentSuccessData, setPaymentSuccessData] = useState(null)
  const [copiedPaymentId, setCopiedPaymentId] = useState(false)

  // Retrieve current dynamic services from storage
  const dynamicServices = getDynamicServices()
  const dynamicConsultation = getDynamicConsultation()

  // Sync initial service and reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setPaymentSuccessData(null)
      setErrorMessage('')
      setSelectedStep(null) // Do NOT pre-select by default, user selects actively
      
      // Default date to tomorrow in YYYY-MM-DD format
      const tomorrow = new Date()
      tomorrow.setDate(tomorrow.getDate() + 1)
      const formattedDate = tomorrow.toISOString().split('T')[0]
      setFormData(prev => ({
        ...prev,
        date: prev.date || formattedDate
      }))
    }
  }, [isOpen, initialServiceId])

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  // Find the exact service user clicked
  const isConsultation = !initialServiceId || initialServiceId === 'consultation'
  const activeService = isConsultation 
    ? dynamicConsultation 
    : (dynamicServices.find(s => s.id === initialServiceId) || dynamicConsultation)

  const hasSteps = !!activeService.hasSteps
  const step1Price = activeService.consultationPrice || 2500
  const step2Price = activeService.price || 25000

  // Price calculations based on selected step or standard service
  let currentPrice = null
  let currentOriginalPrice = null
  let currentDuration = activeService.duration || '90 Minutes'
  let currentSessionTitle = activeService.title

  if (isConsultation) {
    currentPrice = dynamicConsultation.price || 2500
    currentOriginalPrice = dynamicConsultation.originalPrice || 3500
    currentDuration = dynamicConsultation.duration || '30-45 Mins Online'
    currentSessionTitle = '1-on-1 Consultation'
  } else if (hasSteps) {
    if (selectedStep === 1) {
      currentPrice = step1Price
      currentOriginalPrice = 3500
      currentDuration = '30-45 Mins Initial Consultation'
      currentSessionTitle = `${activeService.title} (Step 1: Consultation)`
    } else if (selectedStep === 2) {
      currentPrice = step2Price
      currentOriginalPrice = activeService.originalPrice || 30000
      currentDuration = activeService.duration || '2.5 Hours Deep Session'
      currentSessionTitle = `${activeService.title} (Step 2: Deep Session)`
    } else {
      currentPrice = null
      currentOriginalPrice = null
      currentDuration = 'Choose Step 1 or Step 2'
      currentSessionTitle = activeService.title
    }
  } else {
    currentPrice = activeService.price || 5999
    currentOriginalPrice = activeService.originalPrice || 7500
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    if (errorMessage) setErrorMessage('')
  }

  const handleCopyPaymentId = () => {
    if (paymentSuccessData?.paymentId) {
      navigator.clipboard.writeText(paymentSuccessData.paymentId)
      setCopiedPaymentId(true)
      setTimeout(() => setCopiedPaymentId(false), 2500)
    }
  }

  const handlePayment = async (e) => {
    e.preventDefault()
    
    // Check step selection for multi-step services
    if (hasSteps && !selectedStep) {
      setErrorMessage('Please select either Step 1 (Consultation - ₹2,500) or Step 2 (Full Session - ₹25,000) above.')
      return
    }

    // Basic validation
    if (!formData.name.trim()) {
      setErrorMessage('Please enter your full name.')
      return
    }
    if (!formData.phone.trim() || formData.phone.trim().length < 10) {
      setErrorMessage('Please enter a valid 10-digit WhatsApp / mobile number.')
      return
    }
    if (!formData.email.trim() || !formData.email.includes('@')) {
      setErrorMessage('Please enter a valid email address.')
      return
    }
    if (!formData.date) {
      setErrorMessage('Please select your preferred session date.')
      return
    }

    setIsProcessing(true)
    setErrorMessage('')

    try {
      await launchRazorpayPayment({
        amount: currentPrice,
        serviceTitle: currentSessionTitle,
        customerName: formData.name,
        customerEmail: formData.email,
        customerPhone: formData.phone,
        onSuccess: (successData) => {
          setIsProcessing(false)
          setPaymentSuccessData({
            ...successData,
            preferredDate: formData.date,
            timeSlot: formData.timeSlot,
            notes: formData.notes,
            duration: currentDuration
          })

          // Save to Admin Appointment Storage
          saveNewAppointment({
            customerName: formData.name,
            customerPhone: formData.phone,
            customerEmail: formData.email,
            serviceTitle: currentSessionTitle,
            serviceId: activeService.id,
            step: hasSteps ? selectedStep : null,
            amount: currentPrice,
            paymentId: successData.paymentId,
            orderId: successData.orderId,
            preferredDate: formData.date,
            timeSlot: formData.timeSlot === 'morning' 
              ? 'Morning (10 AM – 1 PM)' 
              : formData.timeSlot === 'afternoon' 
                ? 'Afternoon (2 PM – 5 PM)' 
                : 'Evening (5 PM – 7 PM)',
            duration: currentDuration,
            notes: formData.notes,
            date: successData.date,
            time: successData.time
          })
        },
        onDismiss: () => {
          setIsProcessing(false)
        },
        onError: (err) => {
          setIsProcessing(false)
          setErrorMessage(typeof err === 'string' ? err : 'Payment could not be initialized.')
        }
      })
    } catch (err) {
      setIsProcessing(false)
      setErrorMessage('An unexpected error occurred. Please try again or reach out on WhatsApp.')
    }
  }

  const generateWhatsAppConfirmationUrl = () => {
    if (!paymentSuccessData) return ''
    const msg = `*🎉 NEW SESSION BOOKING CONFIRMATION*%0A%0A` +
      `*Name:* ${encodeURIComponent(paymentSuccessData.customerName)}%0A` +
      `*Service:* ${encodeURIComponent(paymentSuccessData.serviceTitle)}%0A` +
      `*Amount Paid:* ₹${paymentSuccessData.amount}/- (Razorpay Paid)%0A` +
      `*Payment ID:* ${paymentSuccessData.paymentId}%0A` +
      `*Preferred Date:* ${paymentSuccessData.preferredDate || 'Flexible'}%0A` +
      `*Time Slot:* ${paymentSuccessData.timeSlot || 'Morning'}%0A` +
      `*Phone:* ${paymentSuccessData.customerPhone}%0A` +
      `*Email:* ${paymentSuccessData.customerEmail}%0A%0A` +
      `_Hello Sonika Gupta, I have completed my booking payment online via Razorpay. Kindly confirm my Zoom session slot._`

    return `https://wa.me/919915896655?text=${msg}`
  }

  return (
    <div className="booking-modal-overlay" onClick={onClose}>
      <div 
        className="booking-modal-card" 
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        {/* Modal Close Button */}
        <button 
          className="booking-modal-close-btn" 
          onClick={onClose}
          aria-label="Close modal"
        >
          <X size={18} />
        </button>

        {paymentSuccessData ? (
          /* ========================================================
             SUCCESS RECEIPT VIEW
             ======================================================== */
          <div className="booking-success-view">
            <div className="success-badge-icon-wrap">
              <CheckCircle2 size={50} className="success-badge-icon" />
            </div>

            <span className="success-tag">PAYMENT SUCCESSFUL</span>
            <h2 className="success-main-title">Booking Confirmed!</h2>
            <p className="success-main-desc">
              Thank you, <strong>{paymentSuccessData.customerName}</strong>! Your 1-on-1 session has been booked with Sonika Gupta.
            </p>

            {/* Receipt Card */}
            <div className="booking-receipt-box">
              <div className="receipt-row highlight">
                <span className="receipt-lbl">Amount Paid</span>
                <span className="receipt-val price-highlight">₹{paymentSuccessData.amount}/-</span>
              </div>

              <div className="receipt-divider" />

              <div className="receipt-row">
                <span className="receipt-lbl">Service</span>
                <span className="receipt-val">{paymentSuccessData.serviceTitle}</span>
              </div>

              <div className="receipt-row">
                <span className="receipt-lbl">Duration &amp; Format</span>
                <span className="receipt-val">{paymentSuccessData.duration} • Zoom 1-on-1</span>
              </div>

              {paymentSuccessData.preferredDate && (
                <div className="receipt-row">
                  <span className="receipt-lbl">Preferred Date</span>
                  <span className="receipt-val">{paymentSuccessData.preferredDate} ({paymentSuccessData.timeSlot} slot)</span>
                </div>
              )}

              <div className="receipt-row payment-id-row">
                <span className="receipt-lbl">Razorpay Payment ID</span>
                <div className="payment-id-badge">
                  <code>{paymentSuccessData.paymentId}</code>
                  <button 
                    onClick={handleCopyPaymentId} 
                    className="btn-copy-id" 
                    title="Copy Payment ID"
                  >
                    {copiedPaymentId ? <Check size={14} className="text-green" /> : <Copy size={14} />}
                  </button>
                </div>
              </div>

              <div className="receipt-row">
                <span className="receipt-lbl">Date &amp; Time</span>
                <span className="receipt-val">{paymentSuccessData.date} at {paymentSuccessData.time}</span>
              </div>
            </div>

            {/* WhatsApp Confirmation Action Button */}
            <div className="success-actions">
              <a 
                href={generateWhatsAppConfirmationUrl()} 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-whatsapp-confirm"
              >
                <WhatsAppIcon size={20} />
                <span>Confirm Slot on WhatsApp</span>
              </a>

              <button 
                onClick={onClose}
                className="btn-close-receipt"
              >
                Done &amp; Return to Website
              </button>
            </div>

            <p className="success-note">
              <ShieldCheck size={14} style={{ display: 'inline', marginRight: 4 }} />
              A confirmation copy along with Zoom details will also be shared to your WhatsApp (+91 {paymentSuccessData.customerPhone}).
            </p>
          </div>
        ) : (
          /* ========================================================
             BOOKING FORM VIEW (DETAILS FIRST -> PAYMENT)
             ======================================================== */
          <div className="booking-form-view">
            
            {/* Modal Header */}
            <div className="booking-modal-header">
              <span className="modal-badge-tag">ONLINE SESSION BOOKING</span>
              <h2 className="modal-title">Book with Sonika Gupta</h2>
              <p className="modal-subtitle">
                Enter your contact details and preferred time slot to proceed to payment.
              </p>
            </div>

            {/* Selected Service Card */}
            <div className="selected-service-card">
              <div className="service-card-text">
                <span className="service-badge-label">SELECTED SESSION</span>
                <h3 className="service-title-text">{activeService.title}</h3>
                <span className="service-meta-text">
                  {hasSteps && !selectedStep 
                    ? 'Please choose Step 1 or Step 2 below • 1-on-1 Online via Zoom' 
                    : `${currentDuration} • 1-on-1 Online via Zoom`}
                </span>
              </div>
              <div className="service-pricing-wrap">
                {hasSteps && !selectedStep ? (
                  <span className="select-step-prompt-pill">Select Option Below</span>
                ) : (
                  <>
                    {currentOriginalPrice && <span className="orig-price-strike">₹{currentOriginalPrice}</span>}
                    <strong className="final-price-tag">₹{currentPrice}/-</strong>
                  </>
                )}
              </div>
            </div>

            {/* Multi-Step Option Selector for PLR & Beyond-Life Regression */}
            {hasSteps && (
              <div className={`step-picker-container ${!selectedStep ? 'needs-selection' : ''}`}>
                <div className="step-picker-header">
                  <label className="step-picker-label">
                    Select Session Option <span className="req-star">*</span>
                  </label>
                  {!selectedStep && (
                    <span className="step-picker-hint">Please choose one option</span>
                  )}
                </div>
                
                <div className="step-picker-buttons">
                  <button
                    type="button"
                    className={`step-pick-btn ${selectedStep === 1 ? 'active' : ''}`}
                    onClick={() => {
                      setSelectedStep(1)
                      if (errorMessage) setErrorMessage('')
                    }}
                  >
                    <div className="step-radio-circle">
                      {selectedStep === 1 && <div className="step-radio-inner" />}
                    </div>
                    <div className="step-pick-info">
                      <strong className="step-pick-title">Step 1: Consultation</strong>
                      <span className="step-pick-duration">30–45 Mins Initial Diagnosis</span>
                    </div>
                    <span className="step-pick-price">₹2,500</span>
                  </button>

                  <button
                    type="button"
                    className={`step-pick-btn ${selectedStep === 2 ? 'active' : ''}`}
                    onClick={() => {
                      setSelectedStep(2)
                      if (errorMessage) setErrorMessage('')
                    }}
                  >
                    <div className="step-radio-circle">
                      {selectedStep === 2 && <div className="step-radio-inner" />}
                    </div>
                    <div className="step-pick-info">
                      <strong className="step-pick-title">Step 2: Full Deep Session</strong>
                      <span className="step-pick-duration">{activeService.duration}</span>
                    </div>
                    <span className="step-pick-price">₹25,000</span>
                  </button>
                </div>
              </div>
            )}

            {errorMessage && (
              <div className="booking-error-banner">
                <AlertCircle size={16} />
                <span>{errorMessage}</span>
              </div>
            )}

            <form onSubmit={handlePayment} className="booking-modal-form">
              
              {/* Contact Inputs */}
              <div className="form-fields-section">
                <div className="modal-input-grid">
                  {/* Name */}
                  <div className="modal-field-group">
                    <label className="modal-sublabel" htmlFor="modalName">
                      Full Name <span className="req-star">*</span>
                    </label>
                    <input 
                      type="text"
                      id="modalName"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Priya Verma"
                      required
                      className="clean-text-input"
                    />
                  </div>

                  {/* WhatsApp Phone */}
                  <div className="modal-field-group">
                    <label className="modal-sublabel" htmlFor="modalPhone">
                      WhatsApp / Mobile <span className="req-star">*</span>
                    </label>
                    <input 
                      type="tel"
                      id="modalPhone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      required
                      className="clean-text-input"
                    />
                  </div>

                  {/* Email */}
                  <div className="modal-field-group">
                    <label className="modal-sublabel" htmlFor="modalEmail">
                      Email Address <span className="req-star">*</span>
                    </label>
                    <input 
                      type="email"
                      id="modalEmail"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="priya@gmail.com"
                      required
                      className="clean-text-input"
                    />
                  </div>

                  {/* Preferred Date */}
                  <div className="modal-field-group">
                    <label className="modal-sublabel" htmlFor="modalDate">
                      Preferred Date <span className="req-star">*</span>
                    </label>
                    <input 
                      type="date"
                      id="modalDate"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      min={new Date().toISOString().split('T')[0]}
                      required
                      className="clean-text-input"
                    />
                  </div>
                </div>

                {/* Preferred Time Slot */}
                <div className="modal-timeslot-group">
                  <label className="modal-sublabel">Preferred Time Window:</label>
                  <div className="timeslot-button-grid">
                    {[
                      { id: 'morning', label: 'Morning (10 AM – 1 PM)' },
                      { id: 'afternoon', label: 'Afternoon (2 PM – 5 PM)' },
                      { id: 'evening', label: 'Evening (5 PM – 7 PM)' }
                    ].map((slot) => (
                      <button
                        type="button"
                        key={slot.id}
                        className={`timeslot-btn ${formData.timeSlot === slot.id ? 'active' : ''}`}
                        onClick={() => setFormData(prev => ({ ...prev, timeSlot: slot.id }))}
                      >
                        {slot.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Order Total & Action */}
              <div className="booking-footer-box">
                <div className="order-summary-row">
                  <div className="order-text">
                    <span className="summary-lbl">Total Payable Amount</span>
                    <span className="summary-sub">
                      {hasSteps && !selectedStep 
                        ? 'Select Step 1 or Step 2 above' 
                        : `${currentSessionTitle} • 1-on-1 Zoom`}
                    </span>
                  </div>
                  <div className="order-amount">
                    {hasSteps && !selectedStep ? (
                      <strong className="main-amount select-prompt">Select Option</strong>
                    ) : (
                      <>
                        {currentOriginalPrice && <span className="strike-amount">₹{currentOriginalPrice}</span>}
                        <strong className="main-amount">₹{currentPrice}/-</strong>
                      </>
                    )}
                  </div>
                </div>

                {/* Razorpay Pay Button */}
                <button 
                  type="submit" 
                  className="btn-razorpay-checkout"
                  disabled={isProcessing}
                >
                  {isProcessing ? (
                    <div className="pay-btn-loading">
                      <div className="spinner-border" />
                      <span>Opening Payment Gateway...</span>
                    </div>
                  ) : (
                    <>
                      <span>
                        {hasSteps && !selectedStep 
                          ? 'Select Step 1 or Step 2 to Pay' 
                          : `Pay ₹${currentPrice}/- with Razorpay`}
                      </span>
                      <ChevronRight size={18} />
                    </>
                  )}
                </button>

                <div className="security-badges-bar">
                  <span>🔒 256-Bit SSL Encrypted</span>
                  <span>•</span>
                  <span>UPI / Cards / NetBanking</span>
                  <span>•</span>
                  <span>100% Confidential</span>
                </div>
              </div>

            </form>

          </div>
        )}

      </div>
    </div>
  )
}

export default BookingModal
