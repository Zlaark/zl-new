"use client";
import { about } from '@/data/content';
import '@/styles/components.css';
import TextReveal from './ui/TextReveal';

export default function About() {
    return (
        <section id="about" className="section">
            <div className="container">
                <div className="about-grid">
                    <div className="about-content">
                        <h2>
                            <TextReveal>{about.title}</TextReveal>
                        </h2>
                        <h3>{about.subtitle}</h3>
                        <p>{about.description}</p>
                        <p>{about.longDescription}</p>

                        <div className="about-values">
                            {about.values.map((value, index) => (
                                <div key={index} className="about-value">
                                    <span className="about-value-icon text-orange-500">{value.icon}</span>
                                    <div>
                                        <div className="about-value-title">{value.title}</div>
                                        <div className="about-value-desc">{value.description}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="about-achievements">
                        {about.achievements.map((achievement, index) => (
                            <div key={index} className="about-achievement">
                                <div className="about-achievement-value">{achievement.value}</div>
                                <div className="about-achievement-label">{achievement.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
