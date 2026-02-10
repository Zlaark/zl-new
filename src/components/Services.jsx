"use client";
import { services } from '@/data/content';
import '@/styles/components.css';
import TextReveal from './ui/TextReveal';

export default function Services() {
    return (
        <section id="services" className="section">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">
                        <TextReveal>{services.title}</TextReveal>
                    </h2>
                    <p className="section-subtitle">{services.subtitle}</p>
                </div>

                <div className="services-grid">
                    {services.items.map((service) => (
                        <div key={service.id} className="service-card group hover:border-orange-200 hover:shadow-lg transition-all duration-300">
                            <span className="service-icon group-hover:scale-110 transition-transform duration-300 inline-block">{service.icon}</span>
                            <h3 className="service-title group-hover:text-orange-600 transition-colors">{service.title}</h3>
                            <p className="service-description">{service.description}</p>
                            <div className="service-features">
                                {service.features.map((feature, index) => (
                                    <span key={index} className="service-feature">{feature}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
