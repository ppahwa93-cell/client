import React, { useState, useEffect } from 'react'
import { Sparkles } from 'lucide-react'

function Preloader({ onLoaded }) {
  const [progress, setProgress] = useState(0)
  const [isFadingOut, setIsFadingOut] = useState(false)

  useEffect(() => {
    // Smooth progress counter animation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval)
          setTimeout(() => {
            setIsFadingOut(true)
            setTimeout(() => {
              if (onLoaded) onLoaded()
            }, 600) // Match fade-out duration
          }, 300)
          return 100
        }
        return prev + Math.floor(Math.random() * 12) + 8
      })
    }, 90)

    return () => clearInterval(interval)
  }, [onLoaded])

  return (
    <div className={`preloader-overlay ${isFadingOut ? 'fade-out' : ''}`}>
      
      {/* Background Ambient Glow Orbs */}
      <div className="preloader-orb preloader-orb-1" />
      <div className="preloader-orb preloader-orb-2" />

      <div className="preloader-content">
        
        {/* Pulsing Avatar Frame */}
        <div className="preloader-avatar-container">
          <div className="preloader-ring-pulse" />
          <div className="preloader-ring-spin" />
          <div className="preloader-avatar-frame">
            <img src="/sonika gupta.png" alt="Sonika Gupta" className="preloader-avatar-img" />
          </div>
        </div>

        {/* Brand Titles */}
        <h2 className="preloader-brand-title">
          Sonika Gupta
        </h2>
        <span className="preloader-brand-subtitle">
          Past Life Regression &amp; Healing
        </span>

        {/* Progress Bar Container */}
        <div className="preloader-bar-wrapper">
          <div
            className="preloader-bar-fill"
            style={{ width: `${progress > 100 ? 100 : progress}%` }}
          />
        </div>

        {/* Progress Percentage */}
        <div className="preloader-percentage">
          <span>{progress > 100 ? 100 : progress}%</span>
        </div>

        {/* Spiritual Quote */}
        <p className="preloader-quote">
          Illuminating your past to gently empower your present...
        </p>

      </div>
    </div>
  )
}

export default Preloader
