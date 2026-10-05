import { useState } from 'react';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="shell nav-container">
        <a className="monogram" href="#main-content" aria-label="Maharshi Vyas home">
          MV
        </a>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* Right action button */}
        <div className="header-actions">
          <a
            className="button button--primary"
            href="/Maharshi_Resume.pdf"
            download="Maharshi_Vyas_Resume.pdf"
          >
            Download Resume
          </a>

          {/* Mobile menu toggle */}
          <button
            type="button"
            className="mobile-menu-btn"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-expanded={menuOpen}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3A46D6" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3A46D6" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {menuOpen && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          <div className="shell mobile-nav-inner">
            <a href="#projects" onClick={() => setMenuOpen(false)}>Projects</a>
            <a href="#education" onClick={() => setMenuOpen(false)}>Education</a>
            <a href="#skills" onClick={() => setMenuOpen(false)}>Skills</a>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </div>
        </nav>
      )}
    </header>
  );
}
