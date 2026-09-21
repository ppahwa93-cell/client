import { servicesData as initialServices, consultationData as initialConsultation } from '../data/serviceData'
import { fetchServicesFromDB, updateServiceInDB } from '../api/apiClient'

const SERVICES_STORAGE_KEY = 'pastlife_dynamic_services_data'
const CONSULTATION_STORAGE_KEY = 'pastlife_dynamic_consultation_data'

/**
 * Get dynamic services list (or fallback to initial seed)
 */
export const getDynamicServices = () => {
  try {
    const raw = localStorage.getItem(SERVICES_STORAGE_KEY)
    let list = initialServices
    if (raw) {
      const parsed = JSON.parse(raw)
      if (Array.isArray(parsed) && parsed.length > 0) {
        list = parsed
      }
    }

    // Restore React icon component references from initial seed
    return list.map(service => {
      const seed = initialServices.find(s => s.id === service.id)
      return {
        ...service,
        icon: (seed && seed.icon) || service.icon || null
      }
    })
  } catch (err) {
    console.error('Error reading dynamic services:', err)
    return initialServices
  }
}

/**
 * Sync services from MongoDB cloud database into local cache
 */
export const syncServicesFromCloud = async () => {
  try {
    const result = await fetchServicesFromDB()
    if (result && result.services && result.services.length > 0) {
      localStorage.setItem(SERVICES_STORAGE_KEY, JSON.stringify(result.services))
      if (result.consultation) {
        localStorage.setItem(CONSULTATION_STORAGE_KEY, JSON.stringify(result.consultation))
      }
      window.dispatchEvent(new Event('pastlife_services_updated'))
      return result
    }
  } catch (err) {
    console.warn('Could not sync services from cloud:', err)
  }
  return null
}

/**
 * Get dynamic consultation service
 */
export const getDynamicConsultation = () => {
  try {
    const raw = localStorage.getItem(CONSULTATION_STORAGE_KEY)
    if (!raw) {
      localStorage.setItem(CONSULTATION_STORAGE_KEY, JSON.stringify(initialConsultation))
      return initialConsultation
    }
    const parsed = JSON.parse(raw)
    return parsed && parsed.id ? parsed : initialConsultation
  } catch (err) {
    console.error('Error reading dynamic consultation:', err)
    return initialConsultation
  }
}

/**
 * Update a specific service
 */
export const updateDynamicService = (serviceId, updatedFields) => {
  try {
    const currentServices = getDynamicServices()
    let payloadToSave = null

    const updated = currentServices.map(service => {
      if (service.id === serviceId) {
        let updatedSteps = service.steps
        if (service.hasSteps && updatedFields.consultationPrice) {
          updatedSteps = [
            { step: 1, title: 'Step 1: Consultation', price: Number(updatedFields.consultationPrice), duration: '30-45 Mins' },
            { step: 2, title: 'Step 2: Full Deep Session', price: Number(updatedFields.price || service.price), duration: updatedFields.duration || service.duration }
          ]
        }

        const merged = {
          ...service,
          ...updatedFields,
          steps: updatedSteps || service.steps,
          formattedPrice: `₹${Number(updatedFields.price || service.price).toLocaleString('en-IN')}`
        }
        payloadToSave = merged
        return merged
      }
      return service
    })

    localStorage.setItem(SERVICES_STORAGE_KEY, JSON.stringify(updated))
    window.dispatchEvent(new Event('pastlife_services_updated'))

    // Asynchronously update in MongoDB
    if (payloadToSave) {
      updateServiceInDB(serviceId, payloadToSave)
    }

    return true
  } catch (err) {
    console.error('Error updating service:', err)
    return false
  }
}

/**
 * Update consultation service
 */
export const updateDynamicConsultation = (updatedFields) => {
  try {
    const current = getDynamicConsultation()
    const updated = {
      ...current,
      ...updatedFields,
      formattedPrice: `₹${Number(updatedFields.price || current.price).toLocaleString('en-IN')}`
    }
    localStorage.setItem(CONSULTATION_STORAGE_KEY, JSON.stringify(updated))
    window.dispatchEvent(new Event('pastlife_services_updated'))

    // Asynchronously update in MongoDB
    updateServiceInDB('consultation', updated)

    return true
  } catch (err) {
    console.error('Error updating consultation service:', err)
    return false
  }
}

/**
 * Reset all services and prices to default initial values
 */
export const resetDynamicServicesToDefault = () => {
  try {
    localStorage.setItem(SERVICES_STORAGE_KEY, JSON.stringify(initialServices))
    localStorage.setItem(CONSULTATION_STORAGE_KEY, JSON.stringify(initialConsultation))
    window.dispatchEvent(new Event('pastlife_services_updated'))
    return true
  } catch (err) {
    console.error('Error resetting services:', err)
    return false
  }
}
