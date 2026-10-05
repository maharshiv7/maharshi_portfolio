import { certifications, education } from '../data/content';

export default function Education() {
  return (
    <section id="education" className="section shell" aria-labelledby="education-heading">
      <h2 id="education-heading" className="section-title">
        Education and Learning
      </h2>

      <div className="education-grid">
        {/* Left: Wide white card for Certifications and Workshops */}
        <div className="education-card education-card--certifications">
          <div className="card-header-with-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3A46D6" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="12" cy="8" r="6" />
              <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
            </svg>
            <h3 className="card-inner-title">Certifications and Workshops</h3>
          </div>

          <div className="certifications-timeline">
            {certifications.map((item, idx) => (
              <div key={idx} className="cert-item">
                <span className="cert-date">{item.date}</span>
                <p className="cert-title">{item.title}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Narrow tint card for Academic Studies */}
        <div className="education-card education-card--academic">
          <div className="card-header-with-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3A46D6" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" />
              <path d="M22 10v6" />
              <path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" />
            </svg>
            <h3 className="card-inner-title">Academic Studies</h3>
          </div>

          <div className="academic-content">
            <h4 className="academic-degree">{education.degree}</h4>
            <p className="academic-institution">{education.institution}</p>
            <div className="academic-badge">
              <span>{education.gpa}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
