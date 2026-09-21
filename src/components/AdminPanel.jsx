import React, { useState, useEffect } from 'react'
import {
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  CreditCard,
  Search,
  Filter,
  Download,
  Plus,
  Trash2,
  ExternalLink,
  CheckCircle2,
  AlertCircle,
  X,
  LogOut,
  ArrowLeft,
  DollarSign,
  TrendingUp,
  FileText,
  Video,
  Edit3,
  Copy,
  Check,
  ShieldCheck,
  Lock,
  Sparkles,
  RefreshCw,
  Globe,
  Settings,
  Layers,
  RotateCcw,
  Eye,
  EyeOff
} from 'lucide-react'
import WhatsAppIcon from './WhatsAppIcon'
import {
  getStoredAppointments,
  saveNewAppointment,
  updateStoredAppointment,
  deleteStoredAppointment,
  syncAppointmentsFromCloud,
  checkAdminAuth,
  setAdminAuth
} from '../utils/appointmentStorage'
import {
  getDynamicServices,
  getDynamicConsultation,
  updateDynamicService,
  updateDynamicConsultation,
  resetDynamicServicesToDefault,
  syncServicesFromCloud
} from '../utils/serviceStorage'

function AdminPanel({ onNavigateHome }) {
  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState(checkAdminAuth())
  const [loginEmail, setLoginEmail] = useState('')
  const [loginPassword, setLoginPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [loginError, setLoginError] = useState('')

  // Navigation sidebar tab state: 'appointments' or 'services'
  const [activeSidebarTab, setActiveSidebarTab] = useState('appointments')

  // Appointments State
  const [appointments, setAppointments] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedServiceFilter, setSelectedServiceFilter] = useState('all')
  const [selectedStatusFilter, setSelectedStatusFilter] = useState('all')

  // Dynamic Services State
  const [servicesList, setServicesList] = useState(getDynamicServices())
  const [consultationData, setConsultationData] = useState(getDynamicConsultation())
  const [editingService, setEditingService] = useState(null) // service object to edit
  const [editFormData, setEditFormData] = useState({})

  // Modals
  const [selectedAppointment, setSelectedAppointment] = useState(null)
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [copiedId, setCopiedId] = useState('')
  const [toastMessage, setToastMessage] = useState('')

  // New Appointment Form State
  const [newApt, setNewApt] = useState({
    customerName: '',
    customerPhone: '',
    customerEmail: '',
    serviceTitle: 'Past Life Regression Therapy (Step 2: Deep Session)',
    serviceId: 'plr-therapy',
    step: 2,
    amount: 25000,
    preferredDate: new Date().toISOString().split('T')[0],
    timeSlot: 'Morning (10 AM – 1 PM)',
    duration: '2.5 Hours Deep Session',
    notes: '',
    zoomLink: '',
    paymentStatus: 'Paid'
  })

  // Load appointments & services
  const refreshAppointments = () => {
    const list = getStoredAppointments()
    setAppointments(list)
  }

  const refreshServices = () => {
    setServicesList(getDynamicServices())
    setConsultationData(getDynamicConsultation())
  }

  useEffect(() => {
    refreshAppointments()
    refreshServices()

    // Sync with MongoDB backend in background
    syncAppointmentsFromCloud()
    syncServicesFromCloud()

    const handleAptUpdate = () => refreshAppointments()
    const handleSvcUpdate = () => refreshServices()

    window.addEventListener('pastlife_appointment_updated', handleAptUpdate)
    window.addEventListener('pastlife_services_updated', handleSvcUpdate)
    return () => {
      window.removeEventListener('pastlife_appointment_updated', handleAptUpdate)
      window.removeEventListener('pastlife_services_updated', handleSvcUpdate)
    }
  }, [])

  const showToast = (msg) => {
    setToastMessage(msg)
    setTimeout(() => setToastMessage(''), 3000)
  }

  // Handle Login
  const handleLogin = (e) => {
    e.preventDefault()
    const email = loginEmail.trim().toLowerCase()
    const pass = loginPassword.trim()

    const validUsers = ['admin', 'sonika', 'sonika@pastlife.com', 'admin@pastlife.com']
    const validPasswords = ['Sonika@Healing#2026', 'Sonika@2026#Secure', 'admin123']

    if (validUsers.includes(email) && validPasswords.includes(pass)) {
      setAdminAuth(true)
      setIsAuthenticated(true)
      setLoginError('')
      showToast('Welcome back, Sonika Gupta!')
    } else {
      setLoginError('Invalid username or password. Please try again.')
    }
  }

  // Handle Logout
  const handleLogout = () => {
    setAdminAuth(false)
    setIsAuthenticated(false)
    showToast('Logged out successfully.')
  }

  // Status Change
  const handleStatusChange = (id, newStatus) => {
    updateStoredAppointment(id, { status: newStatus })
    refreshAppointments()
    showToast(`Status updated to "${newStatus}"`)
  }

  // Delete Appointment
  const handleDelete = (id, clientName) => {
    if (window.confirm(`Are you sure you want to delete appointment for ${clientName}?`)) {
      deleteStoredAppointment(id)
      refreshAppointments()
      if (selectedAppointment?.id === id) setSelectedAppointment(null)
      showToast(`Appointment for ${clientName} deleted.`)
    }
  }

  // Copy helper
  const handleCopy = (text, id) => {
    navigator.clipboard.writeText(text)
    setCopiedId(id)
    setTimeout(() => setCopiedId(''), 2000)
    showToast('Copied to clipboard!')
  }

  // Export CSV
  const handleExportCSV = () => {
    if (appointments.length === 0) {
      alert('No appointments to export.')
      return
    }

    const headers = [
      'ID',
      'Customer Name',
      'WhatsApp Phone',
      'Email',
      'Service',
      'Amount (INR)',
      'Payment ID',
      'Preferred Date',
      'Time Slot',
      'Duration',
      'Status',
      'Booking Date',
      'Notes',
      'Zoom Link'
    ]

    const rows = appointments.map(a => [
      `"${a.id}"`,
      `"${a.customerName.replace(/"/g, '""')}"`,
      `"${a.customerPhone}"`,
      `"${a.customerEmail}"`,
      `"${a.serviceTitle.replace(/"/g, '""')}"`,
      `"${a.amount}"`,
      `"${a.paymentId}"`,
      `"${a.preferredDate}"`,
      `"${a.timeSlot}"`,
      `"${a.duration}"`,
      `"${a.status}"`,
      `"${a.bookingDate} ${a.bookingTime}"`,
      `"${(a.notes || '').replace(/"/g, '""')}"`,
      `"${a.zoomLink || ''}"`
    ])

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n')
    const encodedUri = encodeURI(csvContent)
    const link = document.createElement('a')
    link.setAttribute('href', encodedUri)
    link.setAttribute('download', `Appointments_PastLife_${new Date().toISOString().split('T')[0]}.csv`)
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
    showToast('Appointments exported to CSV!')
  }

  // Add Manual Appointment
  const handleCreateAppointment = (e) => {
    e.preventDefault()
    if (!newApt.customerName || !newApt.customerPhone) {
      alert('Please enter client name and phone number.')
      return
    }

    saveNewAppointment({
      ...newApt,
      paymentId: `pay_DIRECT_${Date.now().toString().slice(-6)}`
    })

    setIsAddModalOpen(false)
    refreshAppointments()
    showToast('New appointment created successfully!')
    
    // Reset form
    setNewApt({
      customerName: '',
      customerPhone: '',
      customerEmail: '',
      serviceTitle: 'Past Life Regression Therapy (Step 2: Deep Session)',
      serviceId: 'plr-therapy',
      step: 2,
      amount: 25000,
      preferredDate: new Date().toISOString().split('T')[0],
      timeSlot: 'Morning (10 AM – 1 PM)',
      duration: '2.5 Hours Deep Session',
      notes: '',
      zoomLink: '',
      paymentStatus: 'Paid'
    })
  }

  // Open Service Edit Modal
  const handleOpenEditService = (service) => {
    setEditingService(service)
    setEditFormData({
      title: service.title,
      price: service.price || 5999,
      originalPrice: service.originalPrice || 7500,
      consultationPrice: service.consultationPrice || 2500,
      duration: service.duration || '',
      tagline: service.tagline || ''
    })
  }

  // Open Consultation Edit Modal
  const handleOpenEditConsultation = () => {
    setEditingService('consultation')
    setEditFormData({
      title: consultationData.title,
      price: consultationData.price || 2500,
      originalPrice: consultationData.originalPrice || 3500,
      duration: consultationData.duration || '30-45 Mins Online',
      tagline: consultationData.tagline || ''
    })
  }

  // Save Service Changes
  const handleSaveService = (e) => {
    e.preventDefault()
    if (editingService === 'consultation') {
      updateDynamicConsultation({
        title: editFormData.title,
        price: Number(editFormData.price),
        originalPrice: Number(editFormData.originalPrice),
        duration: editFormData.duration,
        tagline: editFormData.tagline
      })
      showToast('1-on-1 Consultation price & details updated!')
    } else if (editingService?.id) {
      updateDynamicService(editingService.id, {
        title: editFormData.title,
        price: Number(editFormData.price),
        originalPrice: Number(editFormData.originalPrice),
        consultationPrice: editingService.hasSteps ? Number(editFormData.consultationPrice) : undefined,
        duration: editFormData.duration,
        tagline: editFormData.tagline
      })
      showToast(`${editingService.title} pricing & details updated!`)
    }
    setEditingService(null)
    refreshServices()
  }

  // Reset to Defaults
  const handleResetServices = () => {
    if (window.confirm('Reset all therapy prices and descriptions to initial defaults?')) {
      resetDynamicServicesToDefault()
      refreshServices()
      showToast('All services reset to standard default pricing.')
    }
  }

  // Filter Appointments
  const filteredAppointments = appointments.filter(apt => {
    const q = searchQuery.toLowerCase().trim()
    const matchesSearch = 
      !q ||
      apt.customerName?.toLowerCase().includes(q) ||
      apt.customerPhone?.includes(q) ||
      apt.customerEmail?.toLowerCase().includes(q) ||
      apt.paymentId?.toLowerCase().includes(q) ||
      apt.serviceTitle?.toLowerCase().includes(q)

    const matchesService = selectedServiceFilter === 'all' || apt.serviceId === selectedServiceFilter
    const matchesStatus = selectedStatusFilter === 'all' || apt.status === selectedStatusFilter

    return matchesSearch && matchesService && matchesStatus
  })

  // KPI Calculations
  const totalRevenue = appointments.reduce((sum, a) => sum + (Number(a.amount) || 0), 0)
  const totalBookings = appointments.length
  const confirmedCount = appointments.filter(a => a.status === 'Confirmed').length
  const completedCount = appointments.filter(a => a.status === 'Completed').length

  // If not logged in, show Admin Login Portal (White Theme)
  if (!isAuthenticated) {
    return (
      <div className="admin-light-login-screen">
        <div className="admin-light-login-card">
          <div className="admin-light-login-header">
            <div className="admin-light-logo-icon">
              <ShieldCheck size={28} />
            </div>
            <h2>Admin Portal Sign-In</h2>
            <p>Past Life With Sonika • Management Dashboard</p>
          </div>

          {loginError && (
            <div className="admin-light-error">
              <AlertCircle size={16} />
              <span>{loginError}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="admin-light-login-form">
            <div className="admin-light-form-group">
              <label>Username / Email</label>
              <div className="admin-light-input-wrap">
                <User size={18} className="input-icon" />
                <input
                  type="text"
                  placeholder="Enter username or email"
                  value={loginEmail}
                  onChange={(e) => setLoginEmail(e.target.value)}
                  required
                  autoComplete="username"
                />
              </div>
            </div>

            <div className="admin-light-form-group">
              <label>Password</label>
              <div className="admin-light-input-wrap">
                <Lock size={18} className="input-icon" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter password"
                  value={loginPassword}
                  onChange={(e) => setLoginPassword(e.target.value)}
                  required
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="btn-toggle-password"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? <EyeOff size={17} /> : <Eye size={17} />}
                </button>
              </div>
            </div>

            <button type="submit" className="btn-admin-light-submit">
              Sign In to Dashboard
            </button>
          </form>

          <div className="admin-light-login-footer">
            <button 
              type="button" 
              onClick={onNavigateHome}
              className="btn-light-back"
            >
              <ArrowLeft size={14} />
              <span>Back to Main Website</span>
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="admin-white-layout">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="admin-white-toast">
          <CheckCircle2 size={18} />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* ========================================================
          LEFT SIDEBAR NAVIGATION
          ======================================================== */}
      <aside className="admin-white-sidebar">
        
        {/* Brand Header */}
        <div className="sidebar-brand-box">
          <div className="sidebar-brand-avatar">
            <img src="/past life logo.jpeg" alt="Sonika Gupta" />
          </div>
          <div className="sidebar-brand-text">
            <h3>Sonika Gupta</h3>
            <span>Admin Portal</span>
          </div>
        </div>

        {/* Sidebar Menu Links */}
        <nav className="sidebar-nav-menu">
          <div className="sidebar-menu-category">MAIN NAVIGATION</div>

          <button 
            className={`sidebar-nav-item ${activeSidebarTab === 'appointments' ? 'active' : ''}`}
            onClick={() => setActiveSidebarTab('appointments')}
          >
            <Calendar size={18} />
            <span className="nav-label">Appointments</span>
            <span className="sidebar-count-pill">{totalBookings}</span>
          </button>

          <button 
            className={`sidebar-nav-item ${activeSidebarTab === 'services' ? 'active' : ''}`}
            onClick={() => setActiveSidebarTab('services')}
          >
            <Layers size={18} />
            <span className="nav-label">Services &amp; Pricing</span>
            <span className="sidebar-count-pill secondary">7</span>
          </button>

          <div className="sidebar-menu-category">QUICK ACTIONS</div>

          <button 
            onClick={() => setIsAddModalOpen(true)}
            className="sidebar-action-btn"
          >
            <Plus size={16} />
            <span>Add Appointment</span>
          </button>

          <button 
            onClick={onNavigateHome}
            className="sidebar-nav-item link-website"
          >
            <Globe size={18} />
            <span className="nav-label">View Website</span>
          </button>
        </nav>

        {/* Sidebar User Footer */}
        <div className="sidebar-user-footer">
          <div className="sidebar-user-details">
            <div className="user-indicator-dot" />
            <div className="user-name-role">
              <strong>Sonika Gupta</strong>
              <span>Lead Therapist</span>
            </div>
          </div>
          <button onClick={handleLogout} className="btn-sidebar-logout" title="Log Out">
            <LogOut size={16} />
          </button>
        </div>

      </aside>

      {/* ========================================================
          RIGHT MAIN CONTENT AREA
          ======================================================== */}
      <main className="admin-white-main">
        
        {activeSidebarTab === 'appointments' ? (
          /* ========================================================
             TAB 1: APPOINTMENTS & BOOKINGS
             ======================================================== */
          <>
            {/* Top Header Bar */}
            <header className="admin-white-topbar">
              <div className="topbar-title-section">
                <h1 className="topbar-main-title">Appointments &amp; Bookings</h1>
                <p className="topbar-subtext">
                  Real-time client schedule, customer inquiries, and Razorpay transaction records
                </p>
              </div>

              <div className="topbar-actions-section">
                <button onClick={refreshAppointments} className="btn-white-secondary" title="Refresh list">
                  <RefreshCw size={15} />
                  <span>Refresh</span>
                </button>

                <button onClick={handleExportCSV} className="btn-white-secondary" title="Download Excel/CSV Spreadsheet">
                  <Download size={15} />
                  <span>Export CSV</span>
                </button>

                <button onClick={() => setIsAddModalOpen(true)} className="btn-white-primary" title="Add manual booking">
                  <Plus size={16} />
                  <span>New Appointment</span>
                </button>
              </div>
            </header>

            {/* KPI Metrics Cards (Clean White Cards) */}
            <section className="white-kpi-grid">
              <div className="white-kpi-card revenue">
                <div className="white-kpi-icon">
                  <DollarSign size={22} />
                </div>
                <div className="white-kpi-body">
                  <span className="white-kpi-title">Total Revenue</span>
                  <strong className="white-kpi-number">₹{totalRevenue.toLocaleString('en-IN')}</strong>
                  <span className="white-kpi-meta">{totalBookings} Total Bookings</span>
                </div>
              </div>

              <div className="white-kpi-card bookings">
                <div className="white-kpi-icon">
                  <Calendar size={22} />
                </div>
                <div className="white-kpi-body">
                  <span className="white-kpi-title">All Appointments</span>
                  <strong className="white-kpi-number">{totalBookings}</strong>
                  <span className="white-kpi-meta">Lifetime Bookings</span>
                </div>
              </div>

              <div className="white-kpi-card confirmed">
                <div className="white-kpi-icon">
                  <Clock size={22} />
                </div>
                <div className="white-kpi-body">
                  <span className="white-kpi-title">Confirmed Slots</span>
                  <strong className="white-kpi-number">{confirmedCount}</strong>
                  <span className="white-kpi-meta">Active &amp; Scheduled</span>
                </div>
              </div>

              <div className="white-kpi-card completed">
                <div className="white-kpi-icon">
                  <CheckCircle2 size={22} />
                </div>
                <div className="white-kpi-body">
                  <span className="white-kpi-title">Completed Sessions</span>
                  <strong className="white-kpi-number">{completedCount}</strong>
                  <span className="white-kpi-meta">Delivered &amp; Healed</span>
                </div>
              </div>
            </section>

            {/* Toolbar: Search & Service Filters */}
            <section className="white-toolbar">
              <div className="white-search-box">
                <Search size={17} className="search-icon" />
                <input
                  type="text"
                  placeholder="Search by client name, WhatsApp, email, payment ID..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="white-search-input"
                />
                {searchQuery && (
                  <button onClick={() => setSearchQuery('')} className="white-search-clear">
                    <X size={14} />
                  </button>
                )}
              </div>

              <div className="white-filters-group">
                <div className="white-select-wrap">
                  <Filter size={14} className="select-icon" />
                  <select
                    value={selectedServiceFilter}
                    onChange={(e) => setSelectedServiceFilter(e.target.value)}
                    className="white-select"
                  >
                    <option value="all">All Services</option>
                    <option value="plr-therapy">Past Life Regression</option>
                    <option value="beyond-life-regression">Beyond Life Regression</option>
                    <option value="hypnoheal-therapy">Hypnoheal Therapy</option>
                    <option value="inner-child-healing">Inner Child Healing</option>
                    <option value="emotional-trauma-healing">Emotional Trauma Healing</option>
                    <option value="soul-energy">Soul &amp; Energy Healing</option>
                    <option value="consultation">1-on-1 Consultation</option>
                  </select>
                </div>

                <div className="white-select-wrap">
                  <select
                    value={selectedStatusFilter}
                    onChange={(e) => setSelectedStatusFilter(e.target.value)}
                    className="white-select"
                  >
                    <option value="all">All Statuses</option>
                    <option value="Confirmed">Confirmed</option>
                    <option value="Completed">Completed</option>
                    <option value="Rescheduled">Rescheduled</option>
                    <option value="Cancelled">Cancelled</option>
                  </select>
                </div>
              </div>
            </section>

            {/* Appointments Table (Clean White Card Layout) */}
            <section className="white-table-card">
              <div className="white-table-header">
                <div className="table-header-left">
                  <h3>Client Bookings List</h3>
                  <span className="badge-count-tag">{filteredAppointments.length} Bookings</span>
                </div>
                <span className="table-header-hint">Click WhatsApp button to message client instantly</span>
              </div>

              {filteredAppointments.length === 0 ? (
                <div className="white-empty-state">
                  <Calendar size={44} className="empty-icon-white" />
                  <h4>{appointments.length === 0 ? 'No Appointments Yet' : 'No Matching Appointments Found'}</h4>
                  <p>
                    {appointments.length === 0 
                      ? 'Client bookings completed via Razorpay or added manually will appear here.' 
                      : 'Try adjusting your search query or filter options.'}
                  </p>
                  {appointments.length === 0 ? (
                    <button 
                      onClick={() => setIsAddModalOpen(true)}
                      className="btn-white-primary"
                      style={{ marginTop: '8px' }}
                    >
                      <Plus size={16} />
                      <span>Add New Appointment</span>
                    </button>
                  ) : (
                    <button 
                      onClick={() => { setSearchQuery(''); setSelectedServiceFilter('all'); setSelectedStatusFilter('all'); }}
                      className="btn-white-clear-filter"
                    >
                      Reset Filters
                    </button>
                  )}
                </div>
              ) : (
                <div className="white-table-container">
                  <table className="white-table">
                    <thead>
                      <tr>
                        <th>Client Information</th>
                        <th>Therapy / Session</th>
                        <th>Date &amp; Time Slot</th>
                        <th>Payment Details</th>
                        <th>Status</th>
                        <th className="text-right">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredAppointments.map((apt) => {
                        const waLink = `https://wa.me/91${apt.customerPhone.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(apt.customerName)},%20this%20is%20Sonika%20Gupta%20regarding%20your%20${encodeURIComponent(apt.serviceTitle)}%20session%20scheduled%20for%20${apt.preferredDate}.`

                        return (
                          <tr key={apt.id}>
                            
                            {/* Client Info */}
                            <td>
                              <div className="cell-client-block">
                                <div className="client-name-row">
                                  <strong className="client-full-name">{apt.customerName}</strong>
                                </div>
                                <div className="client-wa-action">
                                  <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn-wa-pill" title="Message on WhatsApp">
                                    <WhatsAppIcon size={13} />
                                    <span>+91 {apt.customerPhone}</span>
                                  </a>
                                </div>
                                <span className="client-email-text">{apt.customerEmail}</span>
                              </div>
                            </td>

                            {/* Therapy Service */}
                            <td>
                              <div className="cell-service-block">
                                <strong className="service-title-dark">{apt.serviceTitle}</strong>
                                <span className="service-dur-text">{apt.duration}</span>
                                {apt.zoomLink ? (
                                  <a href={apt.zoomLink} target="_blank" rel="noopener noreferrer" className="pill-zoom-ready">
                                    <Video size={12} />
                                    <span>Zoom Ready</span>
                                  </a>
                                ) : (
                                  <span className="pill-zoom-none">Zoom link pending</span>
                                )}
                              </div>
                            </td>

                            {/* Preferred Date & Slot */}
                            <td>
                              <div className="cell-date-block">
                                <div className="date-badge-white">
                                  <Calendar size={13} />
                                  <strong>{apt.preferredDate}</strong>
                                </div>
                                <span className="slot-badge-white">{apt.timeSlot}</span>
                                <span className="booking-time-sub">Booked: {apt.bookingDate}</span>
                              </div>
                            </td>

                            {/* Payment Details */}
                            <td>
                              <div className="cell-payment-block">
                                <strong className="payment-amount-text">₹{Number(apt.amount).toLocaleString('en-IN')}/-</strong>
                                <div className="payment-id-white-badge">
                                  <code>{apt.paymentId}</code>
                                  <button 
                                    onClick={() => handleCopy(apt.paymentId, apt.id)}
                                    className="btn-copy-white"
                                    title="Copy Payment ID"
                                  >
                                    {copiedId === apt.id ? <Check size={12} className="text-emerald" /> : <Copy size={12} />}
                                  </button>
                                </div>
                                <span className="paid-tag-green">Razorpay Paid</span>
                              </div>
                            </td>

                            {/* Status Select */}
                            <td>
                              <select
                                value={apt.status}
                                onChange={(e) => handleStatusChange(apt.id, e.target.value)}
                                className={`white-status-select status-${apt.status.toLowerCase()}`}
                              >
                                <option value="Confirmed">Confirmed</option>
                                <option value="Completed">Completed</option>
                                <option value="Rescheduled">Rescheduled</option>
                                <option value="Cancelled">Cancelled</option>
                              </select>
                            </td>

                            {/* Actions */}
                            <td className="text-right">
                              <div className="white-row-actions">
                                <button
                                  onClick={() => setSelectedAppointment(apt)}
                                  className="btn-white-view"
                                  title="View Details"
                                >
                                  <FileText size={14} />
                                  <span>Details</span>
                                </button>

                                <button
                                  onClick={() => handleDelete(apt.id, apt.customerName)}
                                  className="btn-white-delete"
                                  title="Delete"
                                >
                                  <Trash2 size={14} />
                                </button>
                              </div>
                            </td>

                          </tr>
                        )
                      })}
                    </tbody>
                  </table>
                </div>
              )}
            </section>
          </>
        ) : (
          /* ========================================================
             TAB 2: SERVICES & PRICING MANAGER
             ======================================================== */
          <>
            {/* Top Header Bar */}
            <header className="admin-white-topbar">
              <div className="topbar-title-section">
                <h1 className="topbar-main-title">Therapy Services &amp; Pricing Manager</h1>
                <p className="topbar-subtext">
                  Modify therapy prices, step consultation fees, session durations, and descriptions. Updates propagate instantly to the live website and Razorpay gateway.
                </p>
              </div>

              <div className="topbar-actions-section">
                <button onClick={handleResetServices} className="btn-white-secondary" title="Reset all prices to defaults">
                  <RotateCcw size={15} />
                  <span>Reset to Defaults</span>
                </button>
              </div>
            </header>

            {/* 1-on-1 Consultation Banner Card */}
            <section className="services-admin-banner-card">
              <div className="svc-banner-left">
                <div className="svc-banner-badge">DIRECT CONSULTATION</div>
                <h2 className="svc-banner-title">{consultationData.title}</h2>
                <p className="svc-banner-desc">{consultationData.tagline}</p>
                <div className="svc-banner-meta">
                  <span className="svc-meta-pill">Duration: {consultationData.duration}</span>
                  <span className="svc-meta-pill">Format: 1-on-1 Zoom</span>
                </div>
              </div>

              <div className="svc-banner-right">
                <div className="svc-price-box">
                  <span className="svc-orig-strike">₹{consultationData.originalPrice}</span>
                  <strong className="svc-main-price">₹{consultationData.price?.toLocaleString('en-IN')}/-</strong>
                </div>
                <button 
                  onClick={handleOpenEditConsultation}
                  className="btn-edit-svc-primary"
                >
                  <Edit3 size={15} />
                  <span>Edit Consultation Price</span>
                </button>
              </div>
            </section>

            {/* Services Grid */}
            <section className="services-admin-grid">
              {servicesList.map((service) => {
                return (
                  <div key={service.id} className="svc-admin-card">
                    
                    <div className="svc-admin-card-header">
                      <div className="svc-card-badge-row">
                        <span className={`svc-tag-badge ${service.badgeClass || 'badge-purple'}`}>
                          {service.badge || 'THERAPY'}
                        </span>
                        <span className="svc-duration-label">
                          <Clock size={13} />
                          <span>{service.duration}</span>
                        </span>
                      </div>
                      <h3 className="svc-card-title">{service.title}</h3>
                      <p className="svc-card-tagline">{service.tagline}</p>
                    </div>

                    {/* Step Pricing details if multi-step */}
                    {service.hasSteps ? (
                      <div className="svc-steps-breakdown-box">
                        <div className="step-price-row">
                          <div className="step-label-group">
                            <span className="step-num-badge">Step 1</span>
                            <span className="step-name-text">Consultation:</span>
                          </div>
                          <strong className="step-amt-text">₹{service.consultationPrice?.toLocaleString('en-IN') || '2,500'}</strong>
                        </div>
                        <div className="step-price-row">
                          <div className="step-label-group">
                            <span className="step-num-badge gold">Step 2</span>
                            <span className="step-name-text">Full Deep Session:</span>
                          </div>
                          <strong className="step-amt-text gold">₹{service.price?.toLocaleString('en-IN') || '25,000'}</strong>
                        </div>
                      </div>
                    ) : (
                      <div className="svc-single-price-box">
                        <span className="single-price-lbl">Session Fee:</span>
                        <div className="single-price-val">
                          {service.originalPrice && <span className="single-strike">₹{service.originalPrice}</span>}
                          <strong className="single-main-amt">₹{service.price?.toLocaleString('en-IN')}/-</strong>
                        </div>
                      </div>
                    )}

                    <div className="svc-admin-card-footer">
                      <button 
                        onClick={() => handleOpenEditService(service)}
                        className="btn-svc-edit-action"
                      >
                        <Edit3 size={14} />
                        <span>Edit Pricing &amp; Details</span>
                      </button>
                    </div>

                  </div>
                )
              })}
            </section>
          </>
        )}

      </main>

      {/* ========================================================
          EDIT SERVICE / PRICING MODAL
          ======================================================== */}
      {editingService && (
        <div className="white-modal-backdrop" onClick={() => setEditingService(null)}>
          <div className="white-modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="white-modal-close" onClick={() => setEditingService(null)}>
              <X size={18} />
            </button>

            <div className="white-modal-header">
              <span className="modal-eyebrow">SERVICES &amp; PRICING EDITOR</span>
              <h2>{editingService === 'consultation' ? 'Edit 1-on-1 Consultation' : editingService.title}</h2>
              <span className="modal-subtitle-text">Changes update live on the website and Razorpay gateway</span>
            </div>

            <form onSubmit={handleSaveService} className="white-modal-form">
              
              <div className="white-modal-field">
                <label>Service Title *</label>
                <input
                  type="text"
                  required
                  value={editFormData.title}
                  onChange={(e) => setEditFormData({ ...editFormData, title: e.target.value })}
                  className="white-input"
                />
              </div>

              {/* Multi-step inputs if applicable */}
              {editingService !== 'consultation' && editingService?.hasSteps ? (
                <div className="form-grid-2">
                  <div className="white-modal-field">
                    <label>Step 1 (Consultation Price in INR) *</label>
                    <input
                      type="number"
                      required
                      value={editFormData.consultationPrice}
                      onChange={(e) => setEditFormData({ ...editFormData, consultationPrice: e.target.value })}
                      className="white-input"
                    />
                  </div>

                  <div className="white-modal-field">
                    <label>Step 2 (Full Session Price in INR) *</label>
                    <input
                      type="number"
                      required
                      value={editFormData.price}
                      onChange={(e) => setEditFormData({ ...editFormData, price: e.target.value })}
                      className="white-input"
                    />
                  </div>
                </div>
              ) : (
                <div className="form-grid-2">
                  <div className="white-modal-field">
                    <label>Session Price (INR) *</label>
                    <input
                      type="number"
                      required
                      value={editFormData.price}
                      onChange={(e) => setEditFormData({ ...editFormData, price: e.target.value })}
                      className="white-input"
                    />
                  </div>

                  <div className="white-modal-field">
                    <label>Original Strike Price (INR)</label>
                    <input
                      type="number"
                      value={editFormData.originalPrice}
                      onChange={(e) => setEditFormData({ ...editFormData, originalPrice: e.target.value })}
                      className="white-input"
                    />
                  </div>
                </div>
              )}

              <div className="white-modal-field">
                <label>Session Duration *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 2.5 Hours Deep Session or 90 Minutes"
                  value={editFormData.duration}
                  onChange={(e) => setEditFormData({ ...editFormData, duration: e.target.value })}
                  className="white-input"
                />
              </div>

              <div className="white-modal-field">
                <label>Tagline / Brief Summary</label>
                <textarea
                  rows="3"
                  value={editFormData.tagline}
                  onChange={(e) => setEditFormData({ ...editFormData, tagline: e.target.value })}
                  className="white-textarea"
                />
              </div>

              <div className="white-modal-buttons">
                <button type="button" onClick={() => setEditingService(null)} className="btn-modal-cancel">
                  Cancel
                </button>
                <button type="submit" className="btn-modal-save">
                  Save &amp; Update Live
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

      {/* ========================================================
          APPOINTMENT DETAILS MODAL (White Theme)
          ======================================================== */}
      {selectedAppointment && (
        <div className="white-modal-backdrop" onClick={() => setSelectedAppointment(null)}>
          <div className="white-modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="white-modal-close" onClick={() => setSelectedAppointment(null)}>
              <X size={18} />
            </button>

            <div className="white-modal-header">
              <span className="modal-eyebrow">APPOINTMENT DOSSIER</span>
              <h2>{selectedAppointment.customerName}</h2>
              <span className="modal-subtitle-text">{selectedAppointment.serviceTitle}</span>
            </div>

            <div className="white-modal-body">
              <div className="modal-info-cards-grid">
                
                <div className="white-info-card">
                  <span className="info-card-label">WhatsApp Contact</span>
                  <div className="info-card-row">
                    <strong>+91 {selectedAppointment.customerPhone}</strong>
                    <a
                      href={`https://wa.me/91${selectedAppointment.customerPhone.replace(/[^0-9]/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-wa-modal-pill"
                    >
                      <WhatsAppIcon size={14} />
                      <span>WhatsApp Client</span>
                    </a>
                  </div>
                </div>

                <div className="white-info-card">
                  <span className="info-card-label">Email Address</span>
                  <strong>{selectedAppointment.customerEmail}</strong>
                </div>

                <div className="white-info-card">
                  <span className="info-card-label">Preferred Session Date &amp; Slot</span>
                  <strong>{selectedAppointment.preferredDate} • {selectedAppointment.timeSlot}</strong>
                </div>

                <div className="white-info-card">
                  <span className="info-card-label">Payment &amp; Amount</span>
                  <div className="info-card-row">
                    <strong className="text-purple-accent">₹{Number(selectedAppointment.amount).toLocaleString('en-IN')}/-</strong>
                    <code className="payment-id-code">{selectedAppointment.paymentId}</code>
                  </div>
                </div>

              </div>

              {/* Client Notes */}
              <div className="white-modal-field">
                <label>Client Problem / Notes provided during booking:</label>
                <div className="white-notes-box">
                  {selectedAppointment.notes || 'No specific notes mentioned during booking.'}
                </div>
              </div>

              {/* Zoom Link Input */}
              <div className="white-modal-field">
                <label>Zoom Meeting Link (Auto-shared on WhatsApp):</label>
                <div className="zoom-input-wrapper">
                  <input
                    type="url"
                    placeholder="https://zoom.us/j/..."
                    defaultValue={selectedAppointment.zoomLink || ''}
                    onBlur={(e) => {
                      updateStoredAppointment(selectedAppointment.id, { zoomLink: e.target.value })
                      setSelectedAppointment(prev => ({ ...prev, zoomLink: e.target.value }))
                      refreshAppointments()
                      showToast('Zoom link saved!')
                    }}
                    className="white-input"
                  />
                  {selectedAppointment.zoomLink && (
                    <a
                      href={selectedAppointment.zoomLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-zoom-open"
                    >
                      <ExternalLink size={14} />
                      <span>Open</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Quick WhatsApp Send Action */}
              <div className="white-modal-actions-bar">
                <a
                  href={`https://wa.me/91${selectedAppointment.customerPhone.replace(/[^0-9]/g, '')}?text=*Past%20Life%20With%20Sonika%20-%20Session%20Confirmation*%0A%0ADear%20${encodeURIComponent(selectedAppointment.customerName)},%0AYour%20${encodeURIComponent(selectedAppointment.serviceTitle)}%20is%20confirmed%20for%20*${selectedAppointment.preferredDate}*%20(${encodeURIComponent(selectedAppointment.timeSlot)}).%0A%0A*Zoom%20Link:*%20${encodeURIComponent(selectedAppointment.zoomLink || 'Will be shared shortly')}%0A%0AWarmly,%0ASonika%20Gupta`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-wa-send-full"
                >
                  <WhatsAppIcon size={18} />
                  <span>Send Zoom Link &amp; Confirmation on WhatsApp</span>
                </a>
              </div>

            </div>
          </div>
        </div>
      )}

      {/* ========================================================
          ADD MANUAL APPOINTMENT MODAL (White Theme)
          ======================================================== */}
      {isAddModalOpen && (
        <div className="white-modal-backdrop" onClick={() => setIsAddModalOpen(false)}>
          <div className="white-modal-box" onClick={(e) => e.stopPropagation()}>
            <button className="white-modal-close" onClick={() => setIsAddModalOpen(false)}>
              <X size={18} />
            </button>

            <div className="white-modal-header">
              <span className="modal-eyebrow">DIRECT BOOKING</span>
              <h2>Add New Appointment</h2>
              <span className="modal-subtitle-text">Register an offline or telephone client booking</span>
            </div>

            <form onSubmit={handleCreateAppointment} className="white-modal-form">
              <div className="form-grid-2">
                <div className="white-modal-field">
                  <label>Client Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Priya Sharma"
                    value={newApt.customerName}
                    onChange={(e) => setNewApt({ ...newApt, customerName: e.target.value })}
                    className="white-input"
                  />
                </div>

                <div className="white-modal-field">
                  <label>WhatsApp / Mobile Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="9876543210"
                    value={newApt.customerPhone}
                    onChange={(e) => setNewApt({ ...newApt, customerPhone: e.target.value })}
                    className="white-input"
                  />
                </div>
              </div>

              <div className="form-grid-2">
                <div className="white-modal-field">
                  <label>Email Address</label>
                  <input
                    type="email"
                    placeholder="client@gmail.com"
                    value={newApt.customerEmail}
                    onChange={(e) => setNewApt({ ...newApt, customerEmail: e.target.value })}
                    className="white-input"
                  />
                </div>

                <div className="white-modal-field">
                  <label>Therapy Service *</label>
                  <select
                    value={newApt.serviceId}
                    onChange={(e) => {
                      const sId = e.target.value
                      const matched = servicesList.find(s => s.id === sId)
                      let title = matched ? matched.title : 'Past Life Regression Therapy'
                      let price = matched ? matched.price : 25000
                      let duration = matched ? matched.duration : '2.5 Hours Deep Session'
                      
                      if (sId === 'consultation') {
                        title = consultationData.title
                        price = consultationData.price
                        duration = consultationData.duration
                      }

                      setNewApt({
                        ...newApt,
                        serviceId: sId,
                        serviceTitle: title,
                        amount: price,
                        duration: duration
                      })
                    }}
                    className="white-select"
                  >
                    {servicesList.map(s => (
                      <option key={s.id} value={s.id}>
                        {s.title} (₹{s.price?.toLocaleString('en-IN')})
                      </option>
                    ))}
                    <option value="consultation">
                      {consultationData.title} (₹{consultationData.price?.toLocaleString('en-IN')})
                    </option>
                  </select>
                </div>
              </div>

              <div className="form-grid-2">
                <div className="white-modal-field">
                  <label>Session Date *</label>
                  <input
                    type="date"
                    required
                    value={newApt.preferredDate}
                    onChange={(e) => setNewApt({ ...newApt, preferredDate: e.target.value })}
                    className="white-input"
                  />
                </div>

                <div className="white-modal-field">
                  <label>Time Slot *</label>
                  <select
                    value={newApt.timeSlot}
                    onChange={(e) => setNewApt({ ...newApt, timeSlot: e.target.value })}
                    className="white-select"
                  >
                    <option value="Morning (10 AM – 1 PM)">Morning (10 AM – 1 PM)</option>
                    <option value="Afternoon (2 PM – 5 PM)">Afternoon (2 PM – 5 PM)</option>
                    <option value="Evening (5 PM – 7 PM)">Evening (5 PM – 7 PM)</option>
                  </select>
                </div>
              </div>

              <div className="white-modal-field">
                <label>Amount (INR) *</label>
                <input
                  type="number"
                  required
                  value={newApt.amount}
                  onChange={(e) => setNewApt({ ...newApt, amount: Number(e.target.value) })}
                  className="white-input"
                />
              </div>

              <div className="white-modal-field">
                <label>Client Case Notes</label>
                <textarea
                  rows="3"
                  placeholder="Notes on client symptoms, fears, or goals..."
                  value={newApt.notes}
                  onChange={(e) => setNewApt({ ...newApt, notes: e.target.value })}
                  className="white-textarea"
                />
              </div>

              <div className="white-modal-buttons">
                <button type="button" onClick={() => setIsAddModalOpen(false)} className="btn-modal-cancel">
                  Cancel
                </button>
                <button type="submit" className="btn-modal-save">
                  Save Appointment
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

    </div>
  )
}

export default AdminPanel
