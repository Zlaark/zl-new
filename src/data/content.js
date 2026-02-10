// Zlaark Website Content Data
// This file contains all the website content following DRY principles

export const siteMetadata = {
  title: 'Zlaark | Professional Websites & Apps',
  description: 'We craft stunning, high-performance websites and applications that elevate your digital presence.',
  keywords: 'web development, app development, UI/UX design, digital agency',
  author: 'Zlaark',
  siteUrl: 'https://zlaark.com',
};

export const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'Services', href: '#services' },
  { name: 'About', href: '#about' },
  { name: 'Portfolio', href: '#portfolio' },
  { name: 'Testimonials', href: '#testimonials' },
  { name: 'Contact', href: '#contact' },
];

export const hero = {
  headline: 'We Build Digital',
  headlineAccent: 'Experiences',
  subheadline: 'That Inspire',
  description: 'Transform your vision into reality with stunning websites and powerful applications. We combine creativity with cutting-edge technology.',
  primaryCTA: { text: 'Start Your Project', href: '#contact' },
  secondaryCTA: { text: 'View Our Work', href: '#portfolio' },
  stats: [
    { value: '150+', label: 'Projects Delivered' },
    { value: '50+', label: 'Happy Clients' },
    { value: '5+', label: 'Years Experience' },
    { value: '99%', label: 'Client Satisfaction' },
  ],
};

export const services = {
  title: 'Our Services',
  subtitle: 'Comprehensive digital solutions tailored to your needs',
  items: [
    { id: 1, icon: '🌐', title: 'Web Development', description: 'Custom websites built with modern technologies. Fast, responsive, and optimized for search engines.', features: ['React / Next.js', 'Responsive Design', 'SEO Optimized', 'Performance Focused'] },
    { id: 2, icon: '📱', title: 'App Development', description: 'Native and cross-platform mobile applications that deliver seamless user experiences.', features: ['iOS & Android', 'React Native', 'Flutter', 'App Store Optimization'] },
    { id: 3, icon: '🎨', title: 'UI/UX Design', description: 'Beautiful, intuitive designs that captivate users and drive engagement.', features: ['User Research', 'Wireframing', 'Prototyping', 'Design Systems'] },
    { id: 4, icon: '🚀', title: 'E-Commerce Solutions', description: 'Powerful online stores that convert visitors into customers.', features: ['Shopify / WooCommerce', 'Payment Integration', 'Inventory Management', 'Analytics'] },
    { id: 5, icon: '⚡', title: 'Performance Optimization', description: 'Speed up your existing website for better user experience.', features: ['Core Web Vitals', 'Image Optimization', 'Code Splitting', 'CDN Setup'] },
    { id: 6, icon: '🔧', title: 'Maintenance & Support', description: 'Ongoing support to keep your digital products running smoothly.', features: ['24/7 Monitoring', 'Security Updates', 'Bug Fixes', 'Feature Updates'] },
  ],
};

export const about = {
  title: 'About Zlaark',
  subtitle: 'Your Partner in Digital Excellence',
  description: 'At Zlaark, we are passionate about creating digital experiences that matter. With a team of skilled developers, designers, and strategists, we transform complex challenges into elegant solutions.',
  longDescription: 'Founded on the belief that great design meets powerful functionality, we have helped businesses of all sizes establish their digital presence.',
  values: [
    { icon: '💡', title: 'Innovation', description: 'We stay ahead of trends and embrace cutting-edge technologies.' },
    { icon: '🎯', title: 'Precision', description: 'Every pixel, every line of code is crafted with meticulous attention.' },
    { icon: '🤝', title: 'Partnership', description: 'We work closely with clients as true partners in their success.' },
    { icon: '⭐', title: 'Excellence', description: 'We never compromise on quality and always strive to exceed expectations.' },
  ],
  achievements: [
    { value: '150+', label: 'Projects Completed' },
    { value: '50+', label: 'Happy Clients' },
    { value: '15+', label: 'Team Members' },
    { value: '10+', label: 'Industry Awards' },
  ],
};

export const portfolio = {
  title: 'Our Work',
  subtitle: 'Featured projects that showcase our expertise',
  projects: [
    { id: 1, title: 'FinTech Dashboard', category: 'Web Application', description: 'A comprehensive financial analytics dashboard with real-time data visualization.', tags: ['React', 'Node.js', 'D3.js'], color: '#6366f1' },
    { id: 2, title: 'E-Commerce Platform', category: 'E-Commerce', description: 'Modern online store with seamless checkout and inventory management.', tags: ['Next.js', 'Stripe', 'PostgreSQL'], color: '#8b5cf6' },
    { id: 3, title: 'Fitness Mobile App', category: 'Mobile App', description: 'Cross-platform fitness tracking app with personalized workout plans.', tags: ['React Native', 'Firebase', 'AI'], color: '#06b6d4' },
    { id: 4, title: 'Corporate Website', category: 'Website', description: 'Elegant corporate website with CMS integration and multi-language support.', tags: ['Next.js', 'Sanity', 'Vercel'], color: '#10b981' },
    { id: 5, title: 'SaaS Platform', category: 'Web Application', description: 'Cloud-based project management tool with team collaboration features.', tags: ['Vue.js', 'GraphQL', 'AWS'], color: '#f59e0b' },
    { id: 6, title: 'Healthcare Portal', category: 'Web Application', description: 'Secure patient portal with appointment scheduling and telemedicine.', tags: ['React', 'HIPAA', 'WebRTC'], color: '#ec4899' },
  ],
};

export const testimonials = {
  title: 'Client Testimonials',
  subtitle: 'What our clients say about working with us',
  items: [
    { id: 1, name: 'Sarah Mitchell', role: 'CEO, TechStart Inc.', content: 'Zlaark transformed our outdated website into a modern, high-converting platform. Our online leads increased by 300% within three months!', rating: 5 },
    { id: 2, name: 'Michael Chen', role: 'Founder, GrowthLabs', content: 'The team attention to detail and commitment to quality exceeded our expectations. They delivered a stunning app that our users love.', rating: 5 },
    { id: 3, name: 'Emily Rodriguez', role: 'Marketing Director, Bloom Co.', content: 'Working with Zlaark was a game-changer. Their expertise in UX design helped us create an intuitive experience.', rating: 5 },
    { id: 4, name: 'David Park', role: 'CTO, InnovateTech', content: 'Professional, responsive, and incredibly talented. Zlaark is our go-to partner for all digital projects.', rating: 5 },
  ],
};

export const contact = {
  title: 'Let us Work Together',
  subtitle: 'Ready to start your project? Get in touch with us today.',
  info: { email: 'hello@zlark.com', phone: '+1 (555) 123-4567', address: '123 Innovation Street, Tech City, TC 12345' },
  form: { namePlaceholder: 'Your Name', emailPlaceholder: 'your@email.com', messagePlaceholder: 'Tell us about your project...', submitText: 'Send Message' },
  socialLinks: [
    { name: 'Twitter', href: 'https://twitter.com/zlaark', icon: 'twitter' },
    { name: 'LinkedIn', href: 'https://linkedin.com/company/zlaark', icon: 'linkedin' },
    { name: 'GitHub', href: 'https://github.com/zlaark', icon: 'github' },
    { name: 'Dribbble', href: 'https://dribbble.com/zlaark', icon: 'dribbble' },
  ],
};

export const footer = {
  description: 'Crafting exceptional digital experiences that drive business growth and user engagement.',
  quickLinks: [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'About', href: '#about' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ],
  services: [
    { name: 'Web Development', href: '#services' },
    { name: 'App Development', href: '#services' },
    { name: 'UI/UX Design', href: '#services' },
    { name: 'E-Commerce', href: '#services' },
  ],
  legal: [{ name: 'Privacy Policy', href: '#' }, { name: 'Terms of Service', href: '#' }],
  copyright: '© 2026 Zlaark. All rights reserved.',
};
