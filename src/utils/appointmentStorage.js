import {
  fetchAppointmentsFromDB,
  createAppointmentInDB,
  updateAppointmentStatusInDB,
  deleteAppointmentFromDB
} from '../api/apiClient'

// LocalStorage & State Management for Appointments
const STORAGE_KEY = 'pastlife_appointments_data'
const ADMIN_AUTH_KEY = 'pastlife_admin_auth'

/**
 * Get all appointments (Local + background MongoDB fetch)
 */
export const getStoredAppointments = () => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) {
      return []
    }
    const parsed = JSON.parse(raw)
    const cleanList = Array.isArray(parsed) 
      ? parsed.filter(item => !['apt_1001', 'apt_1002', 'apt_1003', 'apt_1004', 'apt_1005'].includes(item.id)) 
      : []
    return cleanList
  } catch (err) {
    console.error('Error reading appointments from localStorage:', err)
    return []
  }
}

/**
 * Sync appointments from MongoDB cloud database into local cache
 */
export const syncAppointmentsFromCloud = async () => {
  try {
    const cloudData = await fetchAppointmentsFromDB()
    if (cloudData && Array.isArray(cloudData)) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(cloudData))
      window.dispatchEvent(new Event('pastlife_appointment_updated'))
      return cloudData
    }
  } catch (err) {
    console.warn('Cloud sync skipped:', err)
  }
  return getStoredAppointments()
}

/**
 * Save new appointment to storage and push to MongoDB
 */
export const saveNewAppointment = (appointmentData) => {
  try {
    const existing = getStoredAppointments()
    const newRecord = {
      id: `apt_${Date.now()}`,
      customerName: appointmentData.customerName || 'Client',
      customerPhone: appointmentData.customerPhone || '',
      customerEmail: appointmentData.customerEmail || '',
      serviceTitle: appointmentData.serviceTitle || 'Spiritual Session',
      serviceId: appointmentData.serviceId || 'session',
      step: appointmentData.step || null,
      amount: appointmentData.amount || 0,
      paymentId: appointmentData.paymentId || `pay_MANUAL_${Date.now()}`,
      orderId: appointmentData.orderId || null,
      preferredDate: appointmentData.preferredDate || new Date().toISOString().split('T')[0],
      timeSlot: appointmentData.timeSlot || 'Morning',
      duration: appointmentData.duration || 'Session',
      status: 'Confirmed',
      paymentStatus: appointmentData.paymentStatus || 'Paid',
      bookingDate: appointmentData.date || new Date().toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric'
      }),
      bookingTime: appointmentData.time || new Date().toLocaleTimeString('en-IN', {
        hour: '2-digit',
        minute: '2-digit'
      }),
      notes: appointmentData.notes || '',
      zoomLink: appointmentData.zoomLink || ''
    }

    const updated = [newRecord, ...existing]
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
    window.dispatchEvent(new Event('pastlife_appointment_updated'))

    // Asynchronously push to MongoDB cloud
    createAppointmentInDB(newRecord)

    return newRecord
  } catch (err) {
    console.error('Error saving new appointment:', err)
    return null
  }
}

/**
 * Update existing appointment
 */
export const updateStoredAppointment = (id, updatedFields) => {
  try {
    const existing = getStoredAppointments()
    const updated = existing.map(item => {
      if (item.id === id) {
        return { ...item, ...updatedFields }
      }
      return item
    })
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
    window.dispatchEvent(new Event('pastlife_appointment_updated'))

    // Asynchronously update in MongoDB
    if (updatedFields.status) {
      updateAppointmentStatusInDB(id, updatedFields.status)
    }

    return true
  } catch (err) {
    console.error('Error updating appointment:', err)
    return false
  }
}

/**
 * Delete an appointment
 */
export const deleteStoredAppointment = (id) => {
  try {
    const existing = getStoredAppointments()
    const updated = existing.filter(item => item.id !== id)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated))
    window.dispatchEvent(new Event('pastlife_appointment_updated'))

    // Asynchronously delete from MongoDB
    deleteAppointmentFromDB(id)

    return true
  } catch (err) {
    console.error('Error deleting appointment:', err)
    return false
  }
}

/**
 * Admin Authentication Helpers
 */
export const checkAdminAuth = () => {
  try {
    const auth = localStorage.getItem(ADMIN_AUTH_KEY)
    return auth === 'authenticated'
  } catch {
    return false
  }
}

export const setAdminAuth = (isAuth) => {
  try {
    if (isAuth) {
      localStorage.setItem(ADMIN_AUTH_KEY, 'authenticated')
    } else {
      localStorage.removeItem(ADMIN_AUTH_KEY)
    }
  } catch (err) {
    console.error('Error setting admin auth:', err)
  }
}
