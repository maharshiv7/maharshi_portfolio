import { useState } from 'react';

// Framed uncropped image in 12px rounded container with #05070F background and 16:9 ratio
export function FramedCover({ src, alt, width = 1920, height = 1080 }) {
  const [error, setError] = useState(false);
  if (!src || error) return null;

  return (
    <div className="project-cover-frame">
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        onError={() => setError(true)}
      />
    </div>
  );
}

// 1. Nebula Highlighted Card (spans 2 columns on desktop)
export function NebulaCard({ project }) {
  return (
    <article className="project-card project-card--highlighted nebula-card">
      <span className="featured-badge" aria-label="Featured project">Featured</span>

      <div className="nebula-layout">
        {/* Left half: Copy */}
        <div className="nebula-copy">
          <span className="project-category-label">{project.label}</span>
          <h3 className="project-headline">{project.title}</h3>
          <p className="project-desc">{project.description}</p>

          <ul className="tag-pills" aria-label={`${project.title} technologies`}>
            {project.tags.map((tag) => (
              <li key={tag} className="tag-pill">{tag}</li>
            ))}
          </ul>

          <div className="project-btn-group">
            <a
              className="button button--outlined"
              href={project.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub ↗
            </a>
            <a
              className="button button--primary"
              href={project.demo}
              target="_blank"
              rel="noreferrer"
            >
              Live Demo ↗
            </a>
          </div>
        </div>

        {/* Right half: Image */}
        <div className="nebula-media">
          <FramedCover src={project.cover} alt={project.alt} />
        </div>
      </div>
    </article>
  );
}

// 2. OrbitX Highlighted Card (spans 1 column on desktop)
export function OrbitXCard({ project }) {
  return (
    <article className="project-card project-card--highlighted orbitx-card">
      <span className="featured-badge" aria-label="Featured project">Featured</span>

      <div className="orbitx-media">
        <FramedCover src={project.cover} alt={project.alt} />
      </div>

      <div className="orbitx-body">
        <span className="project-category-label">{project.label}</span>
        <h3 className="project-headline">{project.title}</h3>
        <p className="project-desc">{project.description}</p>

        <ul className="tag-pills" aria-label={`${project.title} technologies`}>
          {project.tags.map((tag) => (
            <li key={tag} className="tag-pill">{tag}</li>
          ))}
        </ul>

        {project.note && (
          <p className="project-notice">{project.note}</p>
        )}

        <div className="project-btn-group orbitx-actions">
          <a
            className="button button--outlined"
            href={project.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
          <a
            className="button button--primary"
            href={project.demo}
            target="_blank"
            rel="noreferrer"
          >
            Live Demo ↗
          </a>
        </div>
      </div>
    </article>
  );
}

// 3. Standard Cards (The Cashier, SiteSentinel, Net-Sentry)
export function StandardCard({ project }) {
  const getIcon = (title) => {
    if (title === 'The Cashier') {
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3A46D6" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect width="20" height="14" x="2" y="3" rx="2" />
          <line x1="8" x2="16" y1="21" y2="21" />
          <line x1="12" x2="12" y1="17" y2="21" />
        </svg>
      );
    }
    if (title === 'SiteSentinel') {
      return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3A46D6" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
        </svg>
      );
    }
    // Net-Sentry
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#3A46D6" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="16" y="16" width="6" height="6" rx="1" />
        <rect x="2" y="16" width="6" height="6" rx="1" />
        <rect x="9" y="2" width="6" height="6" rx="1" />
        <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
        <path d="M12 12V8" />
      </svg>
    );
  };

  return (
    <article className="project-card project-card--standard">
      <div className="standard-media">
        <FramedCover src={project.cover} alt={project.alt} />
      </div>

      <div className="standard-card-body">
        <div className="standard-header">
          <div className="standard-title-wrap">
            {getIcon(project.title)}
            <h3 className="standard-card-title">{project.title}</h3>
          </div>
          {project.category && (
            <span className="security-tag">{project.category}</span>
          )}
        </div>

        <p className="project-desc standard-desc">{project.description}</p>

        <ul className="tag-pills" aria-label={`${project.title} technologies`}>
          {project.tags.map((tag) => (
            <li key={tag} className="tag-pill">{tag}</li>
          ))}
        </ul>

        {project.notice && (
          <p className="project-notice standard-notice">{project.notice}</p>
        )}

        <div className="standard-actions">
          <a
            className="button button--outlined button--full"
            href={project.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </article>
  );
}
