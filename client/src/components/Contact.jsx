import { useState } from 'react';
import { contactIntro, profile } from '../data/content';

const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5000';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '', website: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle');

  const onChange = (event) => setForm({ ...form, [event.target.name]: event.target.value });

  async function submit(event) {
    event.preventDefault();
    setStatus('sending');
    setErrors({});
    try {
      const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await response.json();
      if (!response.ok) {
        setErrors(data.errors || {});
        setStatus('error');
        return;
      }
      setForm({ name: '', email: '', message: '', website: '' });
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  return (
    <section id="contact" className="section shell" aria-labelledby="contact-heading">
      <div className="contact-lavender-panel">
        <div className="contact-panel-header">
          <div className="contact-icon-circle" aria-hidden="true">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#3A46D6" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
          </div>
          <h2 id="contact-heading" className="contact-panel-title">Let's Connect</h2>
          <p className="contact-panel-subtitle">{contactIntro}</p>
        </div>

        <form noValidate onSubmit={submit} className="contact-styled-form">
          {/* Two inputs side by side */}
          <div className="contact-form-row">
            <div className="form-field">
              <label htmlFor="name" className="field-label">YOUR NAME</label>
              <input
                id="name"
                name="name"
                value={form.name}
                onChange={onChange}
                autoComplete="name"
                placeholder="Maharshi Vyas"
                aria-describedby={errors.name ? 'name-error' : undefined}
              />
              {errors.name && (
                <p id="name-error" className="field-error">{errors.name}</p>
              )}
            </div>

            <div className="form-field">
              <label htmlFor="email" className="field-label">YOUR EMAIL</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={onChange}
                autoComplete="email"
                placeholder="you@example.com"
                aria-describedby={errors.email ? 'email-error' : undefined}
              />
              {errors.email && (
                <p id="email-error" className="field-error">{errors.email}</p>
              )}
            </div>
          </div>

          {/* Full-width Message textarea */}
          <div className="form-field">
            <label htmlFor="message" className="field-label">MESSAGE</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={form.message}
              onChange={onChange}
              placeholder="Write your message here..."
              aria-describedby={errors.message ? 'message-error' : undefined}
            />
            {errors.message && (
              <p id="message-error" className="field-error">{errors.message}</p>
            )}
          </div>

          {/* Honeypot field */}
          <div className="honeypot" aria-hidden="true">
            <label htmlFor="website">Website</label>
            <input
              id="website"
              name="website"
              tabIndex="-1"
              autoComplete="off"
              value={form.website}
              onChange={onChange}
            />
          </div>

          {/* Centered Send Message button with send icon */}
          <div className="contact-submit-wrap">
            <button
              className="button button--primary submit-send-btn"
              type="submit"
              disabled={status === 'sending'}
            >
              <span>{status === 'sending' ? 'Sending…' : 'Send Message'}</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="m22 2-7 20-4-9-9-4Z" />
                <path d="M22 2 11 13" />
              </svg>
            </button>
          </div>

          {status === 'success' && (
            <p className="form-status-msg form-success" role="status">
              Thanks — your message was sent successfully.
            </p>
          )}
          {status === 'error' && (
            <p className="form-status-msg form-error" role="alert">
              Your message could not be sent. Please email{' '}
              <a href={`mailto:${profile.email}`}>{profile.email}</a> directly.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
