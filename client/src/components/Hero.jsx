import { useState, useEffect, useRef } from 'react';
import { profile } from '../data/content';

export default function Hero() {
  const [modalOpen, setModalOpen] = useState(false);
  const [photoError, setPhotoError] = useState(false);
  const photoTriggerRef = useRef(null);
  const modalCloseRef = useRef(null);
  const modalRef = useRef(null);

  // Focus management & Escape key listener for accessible modal
  useEffect(() => {
    function handleKeyDown(e) {
      if (!modalOpen) return;
      if (e.key === 'Escape') {
        setModalOpen(false);
      } else if (e.key === 'Tab' && modalRef.current) {
        // Focus trap inside modal
        const focusableElements = modalRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey) {
          if (document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
          }
        } else {
          if (document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
          }
        }
      }
    }

    if (modalOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
      // Focus the close button when opened
      setTimeout(() => {
        if (modalCloseRef.current) {
          modalCloseRef.current.focus();
        }
      }, 50);
    } else {
      document.body.style.overflow = '';
      if (photoTriggerRef.current) {
        photoTriggerRef.current.focus();
      }
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [modalOpen]);

  return (
    <section className="hero-section shell" aria-labelledby="hero-main-title">
      <div className="hero-grid">
        {/* Left: Large lavender gradient panel */}
        <div className="hero-panel-left">
          <div className="status-label">
            <span className="status-dot" aria-hidden="true" />
            <span>OPEN TO INTERNSHIPS</span>
          </div>

          <h1 id="hero-main-title" className="hero-headline">
            Full-Stack Developer building AI and data-driven web apps
          </h1>

          <p className="hero-intro-text">
            Hi, I'm <strong>Maharshi Vyas</strong>. I'm a Computer Science student in Ahmedabad who
            builds web apps with React, Node.js and Python, from the interface to the database.
          </p>

          <a className="button button--primary hero-cta-btn" href="#projects">
            <span>View Portfolio Projects</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="12" y1="5" x2="12" y2="19" />
              <polyline points="19 12 12 19 5 12" />
            </svg>
          </a>
        </div>

        {/* Right: Profile card */}
        <aside className="hero-card-right" aria-label="Personal overview">
          <button
            ref={photoTriggerRef}
            type="button"
            className="photo-interactive-btn"
            onClick={() => setModalOpen(true)}
            aria-haspopup="dialog"
            aria-expanded={modalOpen}
            aria-label="Click photo to view personal summary"
          >
            {!photoError ? (
              <img
                className="profile-photo-circle"
                src="/images/profile.jpg"
                alt="Portrait of Maharshi Vyas"
                width="170"
                height="170"
                loading="eager"
                onError={() => setPhotoError(true)}
              />
            ) : (
              <div className="profile-photo-placeholder" aria-label="Maharshi Vyas">
                <span>MV</span>
              </div>
            )}
          </button>

          <h2 className="profile-card-name">{profile.name}</h2>
          <p className="profile-card-role">{profile.role}</p>

          <div className="profile-card-location">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3A46D6" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>{profile.location}</span>
          </div>

          <p className="profile-card-hint">Click photo to view personal summary</p>
        </aside>
      </div>

      {/* Accessible Personal Summary Modal */}
      {modalOpen && (
        <div
          className="modal-backdrop"
          onClick={() => setModalOpen(false)}
          role="presentation"
        >
          <div
            ref={modalRef}
            className="modal-dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <h3 id="modal-title" className="modal-title">{profile.name}</h3>
              <button
                ref={modalCloseRef}
                type="button"
                className="modal-close-btn"
                onClick={() => setModalOpen(false)}
                aria-label="Close summary modal"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>

            <p className="modal-subtitle">Computer Science student, Ahmedabad</p>

            <div className="modal-body">
              <p className="modal-summary-text">{profile.summary}</p>

              <div className="modal-detail-group">
                <span className="modal-detail-label">LANGUAGES</span>
                <p className="modal-detail-value">{profile.languages.join(', ')}</p>
              </div>

              <div className="modal-detail-group">
                <span className="modal-detail-label">EMAIL</span>
                <p className="modal-detail-value">
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
