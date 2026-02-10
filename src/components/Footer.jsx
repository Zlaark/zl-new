"use client";
import { footer } from '@/data/content';
import '@/styles/components.css';
import Image from 'next/image';
import TextReveal from './ui/TextReveal';
import { motion } from 'framer-motion';

export default function Footer() {
    return (
        <footer className="footer relative overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500/20 via-orange-500/50 to-orange-500/20"></div>

            <div className="container relative z-10">
                <div className="footer-grid">
                    <div className="footer-brand">
                        <a href="#home" className="logo-container block mb-6">
                            <Image
                                src="/images/zlaark.jpeg"
                                alt="Zlaark Logo"
                                width={120}
                                height={40}
                                className="logo-image object-contain"
                            />
                        </a>
                        <div className="text-stone-500 leading-relaxed max-w-sm">
                            <TextReveal delay={0.2}>{footer.description}</TextReveal>
                        </div>
                    </div>

                    <div>
                        <h4 className="footer-heading text-stone-900">Quick Links</h4>
                        <div className="footer-links">
                            {footer.quickLinks.map((link, index) => (
                                <motion.a
                                    key={index}
                                    href={link.href}
                                    className="footer-link hover:text-orange-600 hover:translate-x-1 block transition-all duration-300"
                                    whileHover={{ x: 5 }}
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="footer-heading text-stone-900">Services</h4>
                        <div className="footer-links">
                            {footer.services.map((service, index) => (
                                <motion.a
                                    key={index}
                                    href={service.href}
                                    className="footer-link hover:text-orange-600 hover:translate-x-1 block transition-all duration-300"
                                    whileHover={{ x: 5 }}
                                >
                                    {service.name}
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="footer-heading text-stone-900">Legal</h4>
                        <div className="footer-links">
                            {footer.legal.map((item, index) => (
                                <motion.a
                                    key={index}
                                    href={item.href}
                                    className="footer-link hover:text-orange-600 hover:translate-x-1 block transition-all duration-300"
                                    whileHover={{ x: 5 }}
                                >
                                    {item.name}
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="footer-bottom mt-16 pt-8 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="footer-copyright text-stone-400 text-sm">
                        &copy; {new Date().getFullYear()} {footer.copyright}
                    </p>
                    <div className="flex gap-6">
                        {/* Optional: Add social icons here if needed or separate component */}
                    </div>
                </div>
            </div>
        </footer>
    );
}
