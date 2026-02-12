"use client";
import { services } from '@/data/content';
import Link from 'next/link';
import FadeIn from '@/components/ui/FadeIn';
import '@/styles/components.css';

export default function HomeServicesPreview() {
    const preview = services.items.slice(0, 3);
    return (
        <section className="section">
            <div className="container">
                <div className="section-header">
                    <FadeIn><h2 className="section-title">{services.title}</h2></FadeIn>
                    <FadeIn delay={0.1}><p className="section-subtitle">{services.subtitle}</p></FadeIn>
                </div>
                <div className="services-grid">
                    {preview.map((service, i) => (
                        <FadeIn key={service.id} delay={i * 0.1}>
                            <div className="service-card group hover:border-orange-200 hover:shadow-lg transition-all duration-300 h-full">
                                <span className="service-icon group-hover:scale-110 transition-transform duration-300 inline-block">{service.icon}</span>
                                <h3 className="service-title group-hover:text-orange-600 transition-colors">{service.title}</h3>
                                <p className="service-description">{service.description}</p>
                                <div className="service-features">
                                    {service.features.map((feature, index) => (
                                        <span key={index} className="service-feature">{feature}</span>
                                    ))}
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
                <FadeIn delay={0.4}>
                    <div className="text-center mt-12">
                        <Link href="/services" className="inline-flex items-center gap-2 text-lg font-semibold text-orange-600 hover:text-orange-700 transition-colors group">
                            View All Services <span className="group-hover:translate-x-1 transition-transform">&rarr;</span>
                        </Link>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
