"use client";
import { footer } from '@/data/content';
import '@/styles/components.css';
import Image from 'next/image';
import Link from 'next/link';
import TextReveal from './ui/TextReveal';
import { motion } from 'framer-motion';

export default function Footer() {
    return (
        <footer className="footer relative overflow-hidden bg-slate-50 border-t border-slate-200">
            <div className="container relative z-10 pt-20 pb-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    <div className="footer-brand">
                        <Link href="/" className="logo-container block mb-6">
                            <Image src="/images/zlaark.jpeg" alt="Zlaark Logo" width={120} height={40} className="logo-image object-contain mix-blend-multiply" />
                        </Link>
                        <div className="text-slate-500 leading-relaxed max-w-sm">
                            <TextReveal delay={0.2}>{footer.description}</TextReveal>
                        </div>
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900 mb-6">Quick Links</h4>
                        <div className="flex flex-col gap-3">
                            {footer.quickLinks.map((link, index) => (
                                <motion.div key={index} whileHover={{ x: 5 }}>
                                    <Link href={link.href} className="text-slate-600 hover:text-orange-600 transition-colors duration-300">{link.name}</Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900 mb-6">Services</h4>
                        <div className="flex flex-col gap-3">
                            {footer.services.map((service, index) => (
                                <motion.div key={index} whileHover={{ x: 5 }}>
                                    <Link href={service.href} className="text-slate-600 hover:text-orange-600 transition-colors duration-300">{service.name}</Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h4 className="font-bold text-slate-900 mb-6">Legal</h4>
                        <div className="flex flex-col gap-3">
                            {footer.legal.map((item, index) => (
                                <motion.div key={index} whileHover={{ x: 5 }}>
                                    <Link href={item.href} className="text-slate-600 hover:text-orange-600 transition-colors duration-300">{item.name}</Link>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-slate-400 text-sm">&copy; {footer.copyright}</p>
                </div>
            </div>
        </footer>
    );
}
