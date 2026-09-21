import React from 'react'
import { CheckCircle2, AlertTriangle, Headphones, MessageSquare, ShieldCheck, ArrowRight } from 'lucide-react'

function JourneySection() {
  const steps = [
    {
      number: 'STEP 01',
      title: '1:1 Pre-Session Consultation',
      subtitle: 'Mandatory First Step',
      fee: 'Fee: $30 or ₹2,500/-',
      desc: 'Not everyone is suited for Past Life Regression (PLR). That’s why we start with a 30-minute private consultation to assess if PLR is the right path for you.',
      whatHappens: [
        'We discuss your goals, concerns & expectations.',
        'We assess whether you process memories visually or kinaesthetically.',
        'You get a clear explanation of the PLR process + answers to doubts.'
      ],
      warning: "If PLR isn’t a fit for you, we’ll guide you toward other healing methods to ensure the most effective experience for your journey.",
      howToBook: [
        'Make the ₹2,500 / $30 payment.',
        'Send a WhatsApp screenshot of payment.',
        'Fill out the intake form you receive.',
        'Book your 30-min consultation.'
      ]
    },
    {
      number: 'STEP 02',
      title: 'Preparation Phase',
      subtitle: 'Preparing Your Mind',
      fee: 'Conditioning Phase',
      desc: 'Before accessing past-life memories, your subconscious mind needs conditioning. We use a guided meditation technique to prepare you.',
      tasks: [
        { icon: Headphones, text: 'Listen to the provided meditation audio once daily for 2-3 days.' },
        { icon: MessageSquare, text: 'Send a quick voice note via WhatsApp after each session to assess readiness.' }
      ],
      results: [
        { label: 'If Visual', desc: 'Proceed directly with Past Life Regression.' },
        { label: 'If Kinesthetic', desc: 'Hypnotherapy may be recommended for better results.' }
      ],
      readyNote: 'Once we confirm your readiness, you’re all set for the main session! 😊'
    },
    {
      number: 'STEP 03',
      title: 'The Main PLR Session',
      subtitle: '2-Hour Deep Exploration',
      fee: 'Fee: $265 or ₹25,000/-',
      desc: 'This is where the transformation happens. In this 2-hour immersive private online session, we guide you into a deep subconscious state to explore past lives and heal unresolved emotions.',
      highlights: [
        'Premium PLR Online Session with Sonika Gupta',
        '8+ Years of Practice & 500+ Transformational Sessions',
        'Conducted Privately & Safely via Zoom'
      ],
      howToBook: [
        'Confirm your preferred date & time.',
        'Make the main session payment.',
        'Send a WhatsApp screenshot of payment.',
        'Your session is scheduled & conducted via Zoom.'
      ]
    }
  ]

  return (
    <section id="journey" className="journey-section">
      <div className="journey-container">
        
        {/* Section Header */}
        <div className="journey-header">
          <div className="journey-eyebrow">
            <span>SIMPLE &amp; SACRED PROCESS</span>
          </div>
          <h2 className="journey-title">
            Your 3-Step Past Life <br />
            <span className="journey-title-gradient">Regression Journey</span>
          </h2>
          <p className="journey-subtitle">
            A structured, guided step-by-step process designed to ensure your readiness, safety, and deep transformational success.
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="journey-steps-grid">
          
          {/* Step 1 */}
          <div className="journey-card step-card-1">
            <div className="journey-card-top">
              <span className="step-badge">{steps[0].number}</span>
              <span className="price-pill">{steps[0].fee}</span>
            </div>
            
            <h3 className="step-title">{steps[0].title}</h3>
            <span className="step-subhead">{steps[0].subtitle}</span>
            
            <p className="step-desc">{steps[0].desc}</p>

            <div className="journey-block">
              <h4 className="block-label">What Happens in This Step?</h4>
              <ul className="check-list">
                {steps[0].whatHappens.map((item, i) => (
                  <li key={i}>
                    <CheckCircle2 size={15} className="gold-check" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="warning-box">
              <AlertTriangle size={16} className="warning-icon" />
              <p>{steps[0].warning}</p>
            </div>

            <div className="journey-block booking-block">
              <h4 className="block-label">How to Book:</h4>
              <ol className="num-list">
                {steps[0].howToBook.map((b, i) => (
                  <li key={i}>
                    <span className="num-badge">{i + 1}</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

          {/* Step 2 */}
          <div className="journey-card step-card-2">
            <div className="journey-card-top">
              <span className="step-badge purple-badge">{steps[1].number}</span>
              <span className="price-pill purple-pill">{steps[1].fee}</span>
            </div>

            <h3 className="step-title">{steps[1].title}</h3>
            <span className="step-subhead">{steps[1].subtitle}</span>

            <p className="step-desc">{steps[1].desc}</p>

            <div className="journey-block">
              <h4 className="block-label">What You Need to Do:</h4>
              <div className="task-list">
                {steps[1].tasks.map((task, i) => {
                  const TaskIcon = task.icon
                  return (
                    <div key={i} className="task-item">
                      <TaskIcon size={16} className="task-icon" />
                      <span>{task.text}</span>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="journey-block">
              <h4 className="block-label">Results After This Step:</h4>
              <div className="results-list">
                {steps[1].results.map((res, i) => (
                  <div key={i} className="result-item">
                    <strong>🔹 {res.label}:</strong> {res.desc}
                  </div>
                ))}
              </div>
            </div>

            <div className="ready-note">
              <CheckCircle2 size={16} className="ready-icon" />
              <span>{steps[1].readyNote}</span>
            </div>
          </div>

          {/* Step 3 */}
          <div className="journey-card step-card-3">
            <div className="journey-card-top">
              <span className="step-badge gold-badge">{steps[2].number}</span>
              <span className="price-pill gold-pill">{steps[2].fee}</span>
            </div>

            <h3 className="step-title">{steps[2].title}</h3>
            <span className="step-subhead">{steps[2].subtitle}</span>

            <p className="step-desc">{steps[2].desc}</p>

            <div className="journey-block">
              <h4 className="block-label">Session Highlights:</h4>
              <ul className="check-list">
                {steps[2].highlights.map((h, i) => (
                  <li key={i}>
                    <ShieldCheck size={15} className="gold-check" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="journey-block booking-block">
              <h4 className="block-label">How to Book:</h4>
              <ol className="num-list">
                {steps[2].howToBook.map((b, i) => (
                  <li key={i}>
                    <span className="num-badge">{i + 1}</span>
                    <span>{b}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>

        </div>

        {/* Bottom Booking CTA Banner */}
        <div className="journey-cta-banner">
          <div className="banner-text">
            <h3>Ready to Begin Your Healing Journey?</h3>
            <p>Start with Step 1 Mandatory Consultation (₹2,500 / $30)</p>
          </div>
          <a href="tel:9915896655" className="journey-start-btn">
            <span>Begin Step 1 Consultation</span>
            <ArrowRight size={18} />
          </a>
        </div>

      </div>
    </section>
  )
}

export default JourneySection
