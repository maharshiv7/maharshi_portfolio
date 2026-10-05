import { skillGroups } from '../data/content';

export default function Skills() {
  return (
    <section id="skills" className="section shell" aria-labelledby="skills-heading">
      <div className="skills-container-card">
        <h2 id="skills-heading" className="skills-main-title">
          Skills
        </h2>

        <div className="skills-columns-grid">
          {skillGroups.map(([groupName, items]) => (
            <div key={groupName} className="skill-column">
              <span className="skill-group-label">{groupName}</span>
              <ul className="skill-pills-list" aria-label={`${groupName} skills`}>
                {items.map((skill) => (
                  <li key={skill} className="tag-pill">
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
