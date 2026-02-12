"use client";
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function PageHero({ title, subtitle, breadcrumbs = [] }) {
    return (
        <section className="relative pt-48 pb-24 overflow-hidden bg-bg-primary">
            {/* Animated Background - Matches Homepage Hero but subtler */}
            <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-100/40 rounded-full blur-3xl opacity-60 translate-x-1/2 -translate-y-1/2" />
                <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-orange-100/40 rounded-full blur-3xl opacity-60 -translate-x-1/2 -translate-y-1/2" />
                <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {breadcrumbs.length > 0 && (
                    <motion.nav
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="flex items-center gap-2 text-sm text-slate-500 mb-8 font-medium"
                    >
                        <Link href="/" className="hover:text-orange-600 transition-colors">Home</Link>
                        {breadcrumbs.map((crumb, i) => (
                            <span key={i} className="flex items-center gap-2">
                                <span className="text-slate-300">/</span>
                                {crumb.href ? (
                                    <Link href={crumb.href} className="hover:text-orange-600 transition-colors">{crumb.label}</Link>
                                ) : (
                                    <span className="text-slate-900">{crumb.label}</span>
                                )}
                            </span>
                        ))}
                    </motion.nav>
                )}

                <div className="max-w-4xl">
                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold text-slate-900 mb-8 tracking-tight"
                    >
                        {title}
                    </motion.h1>

                    {subtitle && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="relative"
                        >
                            <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-500 to-amber-500 rounded-full" />
                            <p className="text-xl md:text-2xl text-slate-600 font-light leading-relaxed pl-6">
                                {subtitle}
                            </p>
                        </motion.div>
                    )}
                </div>
            </div>
        </section>
    );
}
