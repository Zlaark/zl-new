"use client";
import '@/styles/components.css';
import { motion } from 'framer-motion';
import TextReveal from './ui/TextReveal';

export default function Hero() {
    return (
        <section className="hero">
            {/* Background Elements */}
            <div className="hero-orb hero-orb-1" />
            <div className="hero-orb hero-orb-2" />

            <div className="container relative z-10">
                <div className="flex flex-col items-center justify-center text-center pt-32">

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

                    {/* Headline - Agnos Style Refined (Less Bold) */}
                    <div className="flex flex-col items-center leading-[0.9]">
                        {/* Line 1 */}
                        <h1 className="text-6xl md:text-8xl lg:text-[7.5rem] xl:text-[9rem] font-semibold text-stone-900 tracking-tight -mb-2 md:-mb-4 lg:-mb-6">
                            <TextReveal>We Build Digital</TextReveal>
                        </h1>

                        {/* Line 2 */}
                        <h1 className="text-6xl md:text-8xl lg:text-[7.5rem] xl:text-[9rem] font-semibold tracking-tight pb-2">
                            <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                                <TextReveal delay={0.4}>Experiences That Inspire</TextReveal>
                            </span>
                        </h1>
                    </div>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="mt-12 text-lg md:text-xl text-stone-500 max-w-2xl font-light leading-relaxed"
                    >
                        Transform your vision into reality with stunning websites and powerful applications. We combine creativity with cutting-edge technology.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="mt-12 flex flex-wrap justify-center gap-6"
                    >
                        <a href="#contact" className="px-10 py-4 bg-gradient-to-r from-orange-500 to-amber-500 text-white rounded-full font-medium text-lg hover:shadow-lg hover:shadow-orange-500/30 transition-all transform hover:-translate-y-1">
                            Start Your Project &rarr;
                        </a>
                        <a href="#portfolio" className="px-10 py-4 bg-white border border-stone-200 text-stone-600 rounded-full font-medium text-lg hover:bg-stone-50 hover:border-stone-300 transition-all transform hover:-translate-y-1">
                            View Our Work
                        </a>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 1 }}
                        className="mt-20 pt-10 border-t border-stone-100 grid grid-cols-2 md:grid-cols-4 gap-12"
                    >
                        {[
                            { value: "150+", label: "Projects Delivered" },
                            { value: "50+", label: "Happy Clients" },
                            { value: "5+", label: "Years Experience" },
                            { value: "99%", label: "Client Satisfaction" }
                        ].map((stat, index) => (
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
