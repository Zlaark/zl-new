"use client";
import '@/styles/components.css';
import { motion } from 'framer-motion';
import TextReveal from './ui/TextReveal';
import { hero } from '@/data/content';
import Image from 'next/image';

export default function Hero() {
    return (
        <section className="hero">
            {/* Background Elements */}
            <div className="hero-orb hero-orb-1" />
            <div className="hero-orb hero-orb-2" />

            <div className="container relative z-10">
                <div className="flex flex-col items-center justify-center text-center pt-32">

                    {/* Logo */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="mb-8"
                    >
                        <Image
                            src="/logo.jpg"
                            alt="Zlaark Logo"
                            width={100}
                            height={100}
                            className="w-24 h-24 object-contain"
                        />
                    </motion.div>

                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 border border-orange-100 mb-12"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
                        </span>
                        <span className="text-sm font-medium text-orange-600 tracking-wide uppercase">Welcome to the Future</span>
                    </motion.div>

                    {/* Headline - Refined V3 (Medium Weight - "Thinner") */}
                    <div className="flex flex-col items-center leading-[0.95]">
                        {/* Line 1 */}
                        <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] xl:text-[7.5rem] font-medium text-stone-900 tracking-tight -mb-2 md:-mb-3 lg:-mb-4">
                            <TextReveal>{hero.headline}</TextReveal>
                        </h1>

                        {/* Line 2 */}
                        <h1 className="text-5xl md:text-7xl lg:text-[6.5rem] xl:text-[7.5rem] font-medium tracking-tight pb-4">
                            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                                <TextReveal delay={0.4}>{hero.headlineAccent}</TextReveal>
                            </span>
                        </h1>

                        {/* Subheadline */}
                        {hero.subheadline && (
                            <TextReveal delay={0.8} className="text-xl mt-4 font-light text-stone-400">{hero.subheadline}</TextReveal>
                        )}
                    </div>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="mt-10 text-lg md:text-xl text-stone-500 max-w-2xl font-light leading-relaxed"
                    >
                        {hero.description}
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="mt-10 flex flex-wrap justify-center gap-6"
                    >
                        <a href={hero.primaryCTA.href} className="px-10 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full font-medium text-lg hover:shadow-lg hover:shadow-orange-500/30 transition-all transform hover:-translate-y-1">
                            {hero.primaryCTA.text} &rarr;
                        </a>
                        <a href={hero.secondaryCTA.href} className="px-10 py-4 bg-white border border-stone-200 text-stone-600 rounded-full font-medium text-lg hover:bg-stone-50 hover:border-stone-300 transition-all transform hover:-translate-y-1">
                            {hero.secondaryCTA.text}
                        </a>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                        className="mt-20 pt-10 border-t border-stone-100 grid grid-cols-2 md:grid-cols-4 gap-12"
                    >
                        {hero.stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-3xl md:text-4xl font-bold text-stone-900 mb-1">{stat.value}</div>
                                <div className="text-xs md:text-sm text-stone-400 uppercase tracking-wider">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
