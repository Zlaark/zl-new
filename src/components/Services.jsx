import { services } from '@/data/content';
import '@/styles/components.css';

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{services.title}</h2>
          <p className="section-subtitle">{services.subtitle}</p>
        </div>

        <div className="services-grid">
          {services.items.map((service) => (
            <div key={service.id} className="service-card">
              <span className="service-icon">{service.icon}</span>
              <h3 className="service-title">{service.title}</h3>
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
