import { projects } from '../data/content';
import { NebulaCard, OrbitXCard, StandardCard } from './ProjectCard';

export default function Projects() {
  const nebula = projects.find((p) => p.title === 'Nebula');
  const orbitx = projects.find((p) => p.title === 'OrbitX');
  const cashier = projects.find((p) => p.title === 'The Cashier');
  const sitesentinel = projects.find((p) => p.title === 'SiteSentinel');
  const netsentry = projects.find((p) => p.title === 'Net-Sentry');

  return (
    <section id="projects" className="section shell" aria-labelledby="projects-heading">
      <h2 id="projects-heading" className="section-title">
        Featured Applications and Deployments
      </h2>

      <div className="projects-grid">
        {/* Row 1: Highlighted cards */}
        {nebula && <NebulaCard project={nebula} />}
        {orbitx && <OrbitXCard project={orbitx} />}

        {/* Row 2: Standard cards */}
        {cashier && <StandardCard project={cashier} />}
        {sitesentinel && <StandardCard project={sitesentinel} />}
        {netsentry && <StandardCard project={netsentry} />}
      </div>
    </section>
  );
}
