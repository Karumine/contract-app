import type { FC } from 'react';

export const LetterheadTop: FC = () => (
  <div className="letterhead-top">
    <svg viewBox="0 0 800 100" preserveAspectRatio="none">
      <defs>
        <linearGradient id="curveGrad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#9ca3af" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#4b5563" stopOpacity="0.7" />
        </linearGradient>
      </defs>
      <path
        d="M0,0 Q200,80 400,40 T800,30 L800,0 Z"
        fill="url(#curveGrad1)"
        opacity="0.6"
      />
      <path
        d="M0,0 Q150,60 350,30 T800,20 L800,0 Z"
        fill="url(#curveGrad1)"
        opacity="0.4"
      />
      <path
        d="M0,0 Q250,50 500,25 T800,15 L800,0 Z"
        fill="#1f2937"
        opacity="0.3"
      />
    </svg>

    <div className="letterhead-content">
      <div className="logo-block">
        <div className="logo-mark">
          <span>AA</span>
        </div>
        <div className="logo-text">
          <div className="name">AGILE ASSETS</div>
          <div className="tagline">COMPANY LIMITED</div>
        </div>
      </div>

      <div className="contact-block">
        <div className="contact-row">
          <span>0 2000 9392</span>
          <span className="contact-icon">📞</span>
        </div>
        <div className="contact-row">
          <span>0115558012195</span>
          <span className="contact-icon tax">TAX</span>
        </div>
        <div className="contact-row">
          <span>www.agileassets.co.th</span>
          <span className="contact-icon">🌐</span>
        </div>
        <div className="address-block">
          20 Moo1 Sukhumvit Road
          <br />
          Bangmuangmai, Muang
          <br />
          Samut Prakan 10270 📍
        </div>
      </div>
    </div>
  </div>
);

export const LetterheadBottom: FC = () => (
  <div className="letterhead-bottom">
    <svg viewBox="0 0 800 80" preserveAspectRatio="none">
      <defs>
        <linearGradient id="curveGradB1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#4b5563" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#9ca3af" stopOpacity="0.3" />
        </linearGradient>
      </defs>
      <path
        d="M0,80 Q200,0 400,40 T800,50 L800,80 Z"
        fill="url(#curveGradB1)"
        opacity="0.5"
      />
      <path
        d="M0,80 Q300,30 600,50 T800,60 L800,80 Z"
        fill="#1f2937"
        opacity="0.25"
      />
    </svg>
  </div>
);
