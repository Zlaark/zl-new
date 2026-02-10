"use client";
import { portfolio } from '@/data/content';
import '@/styles/components.css';
import TextReveal from './ui/TextReveal';

export default function Portfolio() {
    return (
        <section id="portfolio" className="section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">
                        <TextReveal>{portfolio.title}</TextReveal>
                    </h2>
                    <p className="section-subtitle">{portfolio.subtitle}</p>
                </div>

                <div className="portfolio-grid">
                    {portfolio.projects.map((project) => (
                        <div key={project.id} className="portfolio-card group hover:-translate-y-2 transition-transform duration-300">
                            <div
                                className="portfolio-image"
                                style={{ background: project.color }}
                            >
                                <div className="portfolio-image-placeholder group-hover:scale-110 transition-transform duration-500">
                                    {project.title.charAt(0)}
                                </div>
                            </div>
                            <div className="portfolio-info">
                                <div className="portfolio-category text-orange-500 font-medium">{project.category}</div>
                                <h3 className="portfolio-title group-hover:text-orange-600 transition-colors">{project.title}</h3>
                                <p className="portfolio-description">{project.description}</p>
                                <div className="portfolio-tags">
                                    {project.tags.map((tag, index) => (
                                        <span key={index} className="portfolio-tag hover:bg-orange-50 hover:text-orange-600 transition-colors">{tag}</span>
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
