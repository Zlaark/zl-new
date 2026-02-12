"use client";
import { useState, useEffect } from 'react';
import { navigation } from '@/data/content';
import '@/styles/components.css';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [hoveredIndex, setHoveredIndex] = useState(null);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`fixed top-4 left-0 right-0 z-50 transition-all duration-500 border-b border-transparent ${isScrolled ? 'py-3 bg-white/80 backdrop-blur-xl shadow-sm border-slate-200/50 mx-4 rounded-2xl' : 'py-5 bg-transparent'}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
                    <Link href="/" className="flex-shrink-0 relative group">
                        <div className="relative w-[100px] h-[35px] transition-transform duration-300 group-hover:scale-105">
                            <Image src="/images/zlaark.jpeg" alt="Zlaark Logo" fill className="object-contain mix-blend-multiply" sizes="100px" priority />
                        </div>
                    </Link>
                </motion.div>

                <nav className="hidden md:flex items-center gap-8" onMouseLeave={() => setHoveredIndex(null)}>
                    {navigation.map((item, index) => (
                        <Link key={item.name} href={item.href} className={`relative px-3 py-1 text-sm font-medium transition-colors ${pathname === item.href ? 'text-orange-600' : 'text-slate-600 hover:text-orange-600'}`} onMouseEnter={() => setHoveredIndex(index)}>
                            <span className="relative z-10">{item.name}</span>
                            {hoveredIndex === index && (
                                <motion.span layoutId="nav-hover" className="absolute inset-0 bg-slate-100/50 -z-0 rounded-md" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ type: "spring", bounce: 0.2, duration: 0.3 }} />
                            )}
                        </Link>
                    ))}
                    <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
                        <Link href="/contact" className="px-6 py-2.5 text-sm font-bold text-white bg-slate-900 rounded-full hover:shadow-lg hover:bg-slate-800 transition-all min-w-[140px] text-center border border-transparent hover:border-orange-500/20">
                            Get Started
                        </Link>
                    </motion.div>
                </nav>

                <button className="md:hidden p-2 text-slate-600 hover:text-orange-600 focus:outline-none" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
                    <div className="w-6 h-5 relative flex flex-col justify-between">
                        <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                        <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`} />
                        <span className={`w-full h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                    </div>
                </button>
            </div>

            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-white/95 backdrop-blur-xl border-b border-orange-100 overflow-hidden absolute top-full left-0 right-0 mt-2 mx-4 rounded-2xl shadow-xl border border-slate-100">
                        <nav className="flex flex-col p-4 space-y-2">
                            {navigation.map((item) => (
                                <Link key={item.name} href={item.href} onClick={() => setIsMobileMenuOpen(false)} className={`text-base font-medium px-4 py-3 hover:bg-slate-50 rounded-xl transition-colors ${pathname === item.href ? 'text-orange-600 bg-orange-50/50' : 'text-slate-600'}`}>
                                    {item.name}
                                </Link>
                            ))}
                            <div className="pt-2">
                                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="block w-full text-center px-5 py-3 text-base font-bold text-white bg-slate-900 rounded-xl shadow-lg">
                                    Get Started
                                </Link>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
