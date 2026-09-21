import React from 'react';
import { Sparkles, Moon, Sun, Heart, Globe, Compass, ShieldCheck } from 'lucide-react';

const marqueeItems = [
  { icon: Sparkles, text: "Certified Past Life Regression Therapist" },
  { icon: Moon, text: "Subconscious Mind & Karma Healing" },
  { icon: Heart, text: "Inner Child & Emotional Trauma Release" },
  { icon: Globe, text: "Online 1-on-1 Sessions Worldwide" },
  { icon: Compass, text: "Soul & Energy Healing Therapy" },
  { icon: ShieldCheck, text: "Safe, Confidential & Deeply Transformative" },
  { icon: Sun, text: "Heal Your Past, Awaken Your Soul 💜" }
];

function TopMarquee() {
  return (
    <div className="top-marquee-bar">
      <div className="marquee-track">
        {/* Render twice for continuous infinite seamless loop */}
        {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="marquee-item">
              <Icon size={14} className="marquee-icon" />
              <span className="marquee-text">{item.text}</span>
              <span className="marquee-separator">•</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default TopMarquee;
