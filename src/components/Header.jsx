'use client';
import { useState, useEffect } from 'react';
import { navigation } from '@/data/content';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const menuItems = [
        { name: 'About', href: '/about' },
        { name: 'Work', href: '/work' },
        { name: 'Services', href: '/services' },
        { name: 'Contact', href: '/contact' },
    ];

    return (
        <>
            <header className="fixed top-8 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
                <div className="bg-white rounded-md shadow-sm px-4 py-3 flex items-center border border-black/5 pointer-events-auto">
                    {/* Logo Section */}
                    <Link href="/" className="flex items-center gap-3 pl-2 pr-6 py-2 hover:bg-black/5 rounded-md transition-colors group">
                        <div className="relative w-6 h-6">
                            <Image
                                src='/logo.jpg'
                                alt='Zlaark'
                                fill
                                className='object-contain'
                                priority
                            />
                        </div>
                        <span className="font-bold text-lg tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-amber-500 group-hover:opacity-80 transition-opacity">Zlaark</span>
                    </Link>

                    {/* Divider */}
                    <div className="w-px h-7 bg-black/10 mx-4"></div>

                    {/* Menu Section */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="px-4 py-3 hover:bg-black/5 rounded-md transition-colors text-black relative group"
                        aria-label="Toggle Menu"
                    >
                        <Menu className="w-5 h-5" />
                    </button>

                    {/* Divider */}
                    <div className="w-px h-7 bg-black/10 mx-4"></div>

                    {/* CTA Section */}
                    <Link
                        href="/contact"
                        className="bg-black text-white px-8 py-3 rounded-md font-medium text-sm hover:bg-black/80 transition-colors"
                    >
                        Get started
                    </Link>
                </div>
            </header>

            {/* Menu Overlay */}
            <AnimatePresence>
                {isMenuOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMenuOpen(false)}
                            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: -20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: -20 }}
                            className="fixed top-28 left-0 right-0 max-w-sm mx-auto z-50 px-4"
                        >
                            <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-black/5 p-2">
                                <nav className="flex flex-col gap-1">
                                    {menuItems.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            onClick={() => setIsMenuOpen(false)}
                                            className={cn(
                                                "px-4 py-3 rounded-xl text-base font-medium transition-colors flex items-center justify-between group",
                                                pathname === item.href
                                                    ? "bg-black/5 text-black"
                                                    : "text-stone-600 hover:text-black hover:bg-black/5"
                                            )}
                                        >
                                            {item.name}
                                            {pathname === item.href && (
                                                <motion.div layoutId="activeDot" className="w-1.5 h-1.5 bg-black rounded-md" />
                                            )}
                                        </Link>
                                    ))}
                                </nav>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}

