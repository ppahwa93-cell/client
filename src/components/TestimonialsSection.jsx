import React, { useState } from 'react'
import { Star, Quote, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react'

function TestimonialsSection() {
  const testimonials = [
    {
      id: 1,
      name: 'Priyanka Sharma',
      location: 'Delhi, India',
      therapy: 'Past Life Regression Therapy',
      rating: 5,
      story: 'For years I carried an unexplained fear of water and deep anxiety. In just one PLR session with Sonika, I re-experienced a memory from a previous lifetime. The moment we released that trauma, a heavy weight lifted off my chest. Today, I feel completely liberated and at peace.',
      date: '2 weeks ago',
      avatarColor: 'badge-gold-avatar'
    },
    {
      id: 2,
      name: 'Rahul Verma',
      location: 'Mumbai, India',
      therapy: 'Hypnoheal Therapy',
      rating: 5,
      story: 'I was stuck in negative thought loops and chronic stress for almost 3 years. Sonika’s Hypnoheal session helped me reprogram my subconscious mind. Within a week, my mental clarity returned and I slept peacefully for the first time in years. Truly life-changing!',
      date: '1 month ago',
      avatarColor: 'badge-purple-avatar'
    },
    {
      id: 3,
      name: 'Ananya Roy',
      location: 'Bengaluru, India',
      therapy: 'Inner Child Healing Therapy',
      rating: 5,
      story: 'Inner child healing with Sonika felt like reuniting with my lost self. I dissolved years of silent fear of rejection and self-doubt. Sonika’s gentle, compassionate guidance created the safest sacred space I have ever experienced.',
      date: '3 weeks ago',
      avatarColor: 'badge-pink-avatar'
    },
    {
      id: 4,
      name: 'Meera Malhotra',
      location: 'London, UK',
      therapy: 'Emotional & Trauma Healing',
      rating: 5,
      story: 'I booked the session from the UK via Zoom. Sonika’s voice and presence during the 2-hour exploration guided me to release deep emotional heartbreak I had held for over a decade. I am forever grateful for her divine gift.',
      date: '1 month ago',
      avatarColor: 'badge-teal-avatar'
    }
  ]

  return (
    <section id="testimonials" className="testimonials-section">
      <div className="testimonials-container">
        
        {/* Section Header */}
        <div className="testimonials-header">
          <div className="testimonials-eyebrow">
            <span>HEALED SOUL STORIES</span>
          </div>
          <h2 className="testimonials-title">
            Transformational <br />
            <span className="testimonials-title-gradient">Healing Experiences</span>
          </h2>
          <p className="testimonials-subtitle">
            Real stories of clarity, inner peace, and emotional freedom shared by clients across the globe.
          </p>
        </div>

        {/* Testimonials Grid (2x2 on Desktop) */}
        <div className="testimonials-grid">
          {testimonials.map((t) => (
            <div key={t.id} className="testimonial-card">
              
              <div className="card-top-bar">
                <div className="stars-row">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={16} className="star-gold" fill="#f3ca65" />
                  ))}
                </div>
                <span className="verified-badge">
                  <CheckCircle2 size={13} className="check-icon" />
                  <span>Verified Client</span>
                </span>
              </div>

              <p className="testimonial-text">
                "{t.story}"
              </p>

              <div className="testimonial-footer">
                <div className="client-info">
                  <div className={`client-avatar ${t.avatarColor}`}>
                    {t.name.charAt(0)}
                  </div>
                  <div className="client-meta">
                    <strong className="client-name">{t.name}</strong>
                    <span className="client-loc">{t.location}</span>
                  </div>
                </div>

                <div className="therapy-tag">
                  <span>{t.therapy}</span>
                </div>
              </div>

              <Quote className="quote-watermark" size={70} />
            </div>
          ))}
        </div>

        {/* Bottom Trust Stats Bar */}
        <div className="testimonials-trust-bar">
          <div className="trust-stat-item">
            <strong className="trust-num">500+</strong>
            <span className="trust-lbl">Transformations Guided</span>
          </div>
          <div className="trust-divider" />
          <div className="trust-stat-item">
            <strong className="trust-num">4.9 / 5.0</strong>
            <span className="trust-lbl">Average Client Rating</span>
          </div>
          <div className="trust-divider" />
          <div className="trust-stat-item">
            <strong className="trust-num">100%</strong>
            <span className="trust-lbl">Confidential &amp; Safe Space</span>
          </div>
        </div>

      </div>
    </section>
  )
}

export default TestimonialsSection
