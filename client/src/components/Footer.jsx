import { profile } from '../data/content';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-inner">
        <a className="monogram footer-monogram" href="#main-content" aria-label="Maharshi Vyas home">
          MV
        </a>

        <p className="footer-copyright">
          © {new Date().getFullYear()} {profile.name}
        </p>

        <div className="footer-social-links">
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            GitHub <span aria-hidden="true">↗</span>
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="footer-link"
          >
            LinkedIn <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
