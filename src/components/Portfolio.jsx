import { portfolio } from '@/data/content';
import '@/styles/components.css';

export default function Portfolio() {
  return (
    <section id="portfolio" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{portfolio.title}</h2>
          <p className="section-subtitle">{portfolio.subtitle}</p>
        </div>

        <div className="portfolio-grid">
          {portfolio.projects.map((project) => (
            <div key={project.id} className="portfolio-card">
              <div 
                className="portfolio-image"
                style={{ background: project.color }}
              >
                <div className="portfolio-image-placeholder">
                  {project.title.charAt(0)}
                </div>
              </div>
              <div className="portfolio-info">
                <div className="portfolio-category">{project.category}</div>
                <h3 className="portfolio-title">{project.title}</h3>
                <p className="portfolio-description">{project.description}</p>
                <div className="portfolio-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="portfolio-tag">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
