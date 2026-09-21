const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000/api'

/**
 * Fetch all appointments from MongoDB API (with fallback)
 */
export const fetchAppointmentsFromDB = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/appointments`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
    if (!res.ok) throw new Error('Network error')
    const data = await res.json()
    return data.success ? data.data : null
  } catch (error) {
    console.warn('API offline or unreachable, using local storage:', error.message)
    return null
  }
}

/**
 * Save new appointment to MongoDB API
 */
export const createAppointmentInDB = async (appointmentData) => {
  try {
    const res = await fetch(`${API_BASE_URL}/appointments`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(appointmentData)
    })
    if (!res.ok) throw new Error('Failed to create in MongoDB')
    const data = await res.json()
    return data.data || appointmentData
  } catch (error) {
    console.warn('Could not save to MongoDB, saved locally:', error.message)
    return appointmentData
  }
}

/**
 * Update appointment status in MongoDB API
 */
export const updateAppointmentStatusInDB = async (id, status) => {
  try {
    const res = await fetch(`${API_BASE_URL}/appointments/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status })
    })
    return res.ok
  } catch (error) {
    console.warn('Could not update status in MongoDB:', error.message)
    return false
  }
}

/**
 * Delete appointment from MongoDB API
 */
export const deleteAppointmentFromDB = async (id) => {
  try {
    const res = await fetch(`${API_BASE_URL}/appointments/${id}`, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' }
    })
    return res.ok
  } catch (error) {
    console.warn('Could not delete from MongoDB:', error.message)
    return false
  }
}

/**
 * Fetch services from MongoDB API
 */
export const fetchServicesFromDB = async () => {
  try {
    const res = await fetch(`${API_BASE_URL}/services`, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    })
    if (!res.ok) throw new Error('Failed to fetch services from DB')
    const data = await res.json()
    return data.success ? data : null
  } catch (error) {
    console.warn('Using local service cache:', error.message)
    return null
  }
}

/**
 * Update service in MongoDB API
 */
export const updateServiceInDB = async (serviceId, updatedFields) => {
  try {
    const res = await fetch(`${API_BASE_URL}/services/${serviceId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedFields)
    })
    return res.ok
  } catch (error) {
    console.warn('Could not update service in MongoDB:', error.message)
    return false
  }
}
