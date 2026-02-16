import { testimonials } from '@/data/content';
import '@/styles/components.css';

export default function Testimonials() {
  return (
    <section id="testimonials" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{testimonials.title}</h2>
          <p className="section-subtitle">{testimonials.subtitle}</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.items.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-rating">
                {'★'.repeat(testimonial.rating)}
              </div>
              <p className="testimonial-content">&quot;{testimonial.content}&quot;</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="testimonial-name">{testimonial.name}</div>
                  <div className="testimonial-role">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
