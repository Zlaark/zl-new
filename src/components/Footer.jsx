import { footer } from '@/data/content';
import '@/styles/components.css';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <a href="#home" className="logo-container">
              <Image 
                src="/images/zlaark.jpeg" 
                alt="Zlaark Logo" 
                width={100} 
                height={33} 
                className="logo-image" 
                style={{ objectFit: 'contain' }}
              />
            </a>
            <p>{footer.description}</p>
          </div>

          <div>
            <h4 className="footer-heading">Quick Links</h4>
            <div className="footer-links">
              {footer.quickLinks.map((link, index) => (
                <a key={index} href={link.href} className="footer-link">
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="footer-heading">Services</h4>
            <div className="footer-links">
              {footer.services.map((service, index) => (
                <a key={index} href={service.href} className="footer-link">
                  {service.name}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="footer-heading">Legal</h4>
            <div className="footer-links">
              {footer.legal.map((item, index) => (
                <a key={index} href={item.href} className="footer-link">
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">{footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
