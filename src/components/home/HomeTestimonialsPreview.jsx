"use client";
import { testimonials } from '@/data/content';
import FadeIn from '@/components/ui/FadeIn';
import '@/styles/components.css';

export default function HomeTestimonialsPreview() {
    const featured = testimonials.items.slice(0, 2);
    return (
        <section className="section">
            <div className="container">
                <div className="section-header">
                    <FadeIn><h2 className="section-title">{testimonials.title}</h2></FadeIn>
                    <FadeIn delay={0.1}><p className="section-subtitle">{testimonials.subtitle}</p></FadeIn>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {featured.map((t, i) => (
                        <FadeIn key={t.id} delay={i * 0.15}>
                            <div className="testimonial-card">
                                <div className="testimonial-rating">{'★'.repeat(t.rating)}</div>
                                <p className="testimonial-content">&quot;{t.content}&quot;</p>
                                <div className="testimonial-author">
                                    <div className="testimonial-avatar">{t.name.charAt(0)}</div>
                                    <div>
                                        <div className="testimonial-name">{t.name}</div>
                                        <div className="testimonial-role">{t.role}</div>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
