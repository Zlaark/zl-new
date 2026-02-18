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
            <header className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
                <div className="bg-white rounded-[10px] shadow-[0_4px_20px_rgba(0,0,0,0.08)] flex items-center border border-black/[0.03] pointer-events-auto">
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
                        className="px-6 py-4 hover:bg-black/[0.03] transition-colors text-black relative group"
                        aria-label="Toggle Menu"
                    >
                        <div className="flex flex-col gap-[3px] w-5">
                            <div className="h-[1.5px] w-full bg-black"></div>
                            <div className="h-[1.5px] w-full bg-black"></div>
                        </div>
                    </button>

                    {/* Divider */}
                    <div className="w-px h-7 bg-black/10 mx-4"></div>

                    {/* CTA Section */}
                    <div className="pl-6 pr-2 py-1">
                        <Link
                            href="/contact"
                            className="bg-[#23232A] text-white px-7 py-2.5 rounded-[4px] font-bold text-xs tracking-wider uppercase hover:bg-[#23232A] hover:outline hover:outline-2 hover:outline-dashed hover:outline-[#FFFFFF] hover:outline-offset-2 transition-all"
                        >
                            Get started
                        </Link>
                    </div>
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

