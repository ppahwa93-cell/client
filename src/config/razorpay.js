// Razorpay Payment Configuration & Helper
export const RAZORPAY_CONFIG = {
  keyId: 'rzp_live_TeHM74ZBjTT5sR',
  businessName: 'Past Life With Sonika',
  businessDescription: 'Sacred Soul Healing & Regression Therapy',
  logo: '/past life logo.jpeg',
  themeColor: '#6b21a8',
  supportPhone: '+919915896655',
  supportEmail: 'pastlifewithsonika@gmail.com',
  pricing: {
    consultation: {
      id: 'consultation',
      title: 'Private 1-on-1 Consultation',
      amount: 2500,
      originalAmount: 3500,
      duration: '30-45 Mins',
      description: 'Comprehensive Soul Diagnosis & Personal Healing Roadmapping'
    },
    hypnoheal: {
      id: 'hypnoheal-therapy',
      title: 'Hypnoheal & Subconscious Rewiring',
      amount: 5999,
      originalAmount: 7500,
      duration: '90 Minutes Clinical Session',
      description: 'Reprogram subconscious fear loops, anxiety & mental blocks'
    },
    plr: {
      id: 'plr-therapy',
      title: 'Past Life Regression Therapy',
      amount: 25000,
      originalAmount: 30000,
      consultationAmount: 2500,
      duration: '2.5 Hours Deep Session',
      description: 'Uncover past life memories, dissolve karma & ancient vows'
    },
    beyondLife: {
      id: 'beyond-life-regression',
      title: 'Beyond Life Regression - Soul Contacts',
      amount: 25000,
      originalAmount: 30000,
      consultationAmount: 2500,
      duration: '2.5 - 3 Hours Deep Session',
      description: 'Explore between-lives state, spirit guides & soul contracts'
    },
    innerChild: {
      id: 'inner-child-healing',
      title: 'Inner Child Healing Therapy',
      amount: 5999,
      originalAmount: 7500,
      duration: '90 Minutes Transformative Session',
      description: 'Heal childhood wounds, abandonment fears & emotional triggers'
    },
    emotionalTrauma: {
      id: 'emotional-trauma-healing',
      title: 'Emotional & Trauma Healing',
      amount: 5999,
      originalAmount: 7500,
      duration: '2 Hours Somatic & Energy Session',
      description: 'Release stored somatic trauma, emotional grief & aura blocks'
    },
    soulEnergy: {
      id: 'soul-energy',
      title: 'Soul & Energy Healing',
      amount: 5999,
      originalAmount: 7500,
      duration: '90 Minutes Alignment Session',
      description: 'Chakra balancing, aura purification & divine alignment'
    }
  }
}

/**
 * Dynamically loads Razorpay checkout script if not already present
 */
export const loadRazorpayScript = () => {
  return new Promise((resolve) => {
    if (window.Razorpay) {
      resolve(true)
      return
    }
    const script = document.createElement('script')
    script.src = 'https://checkout.razorpay.com/v1/checkout.js'
    script.async = true
    script.onload = () => resolve(true)
    script.onerror = () => resolve(false)
    document.body.appendChild(script)
  })
}

/**
 * Opens Razorpay Standard Checkout
 */
export const launchRazorpayPayment = async ({
  amount, // in INR (e.g., 2500 or 5999)
  serviceTitle,
  customerName,
  customerEmail,
  customerPhone,
  onSuccess,
  onDismiss,
  onError
}) => {
  const isLoaded = await loadRazorpayScript()
  if (!isLoaded || !window.Razorpay) {
    if (onError) onError('Razorpay SDK failed to load. Please check your internet connection.')
    else alert('Unable to connect to Razorpay. Please check your internet connection.')
    return
  }

  const options = {
    key: RAZORPAY_CONFIG.keyId,
    amount: Math.round(Number(amount) * 100), // amount in paise
    currency: 'INR',
    name: RAZORPAY_CONFIG.businessName,
    description: `Booking: ${serviceTitle} (${RAZORPAY_CONFIG.businessDescription})`,
    image: RAZORPAY_CONFIG.logo,
    prefill: {
      name: customerName || '',
      email: customerEmail || '',
      contact: customerPhone || ''
    },
    theme: {
      color: RAZORPAY_CONFIG.themeColor
    },
    notes: {
      service: serviceTitle,
      client_name: customerName,
      client_phone: customerPhone,
      session_format: '1-on-1 Online via Zoom'
    },
    modal: {
      ondismiss: () => {
        if (onDismiss) onDismiss()
      }
    },
    handler: (response) => {
      // response contains: razorpay_payment_id, razorpay_order_id, razorpay_signature
      if (onSuccess) {
        onSuccess({
          paymentId: response.razorpay_payment_id,
          orderId: response.razorpay_order_id || null,
          signature: response.razorpay_signature || null,
          amount: amount,
          serviceTitle: serviceTitle,
          customerName: customerName,
          customerEmail: customerEmail,
          customerPhone: customerPhone,
          date: new Date().toLocaleDateString('en-IN', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
          }),
          time: new Date().toLocaleTimeString('en-IN', {
            hour: '2-digit',
            minute: '2-digit'
          })
        })
      }
    }
  }

  try {
    const paymentInstance = new window.Razorpay(options)
    paymentInstance.open()
  } catch (err) {
    console.error('Error opening Razorpay checkout:', err)
    if (onError) onError(err.message || 'Payment initialization failed.')
  }
}
