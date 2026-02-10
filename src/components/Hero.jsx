"use client";

import { motion } from "framer-motion";
import { hero } from '@/data/content';
import AnimatedBackground from './ui/AnimatedBackground';
import '@/styles/components.css';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1,
            delayChildren: 0.3,
        },
    },
};

const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 10,
        },
    },
};

export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Animated Background */}
            <AnimatedBackground />

            <div className="container relative z-10 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center h-full">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="text-center max-w-6xl mx-auto flex flex-col items-center"
                >
                    <motion.div variants={itemVariants} className="mb-8 flex justify-center">
                        <span className="inline-block py-1.5 px-4 rounded-full bg-white/10 border border-white/20 backdrop-blur-md text-sm font-medium tracking-wide text-blue-200 shadow-lg">
                            Welcome to the Future
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        variants={itemVariants}
                        className="text-5xl md:text-7xl lg:text-7xl font-bold tracking-tight mb-10 leading-tight text-white drop-shadow-2xl text-center"
                    >
                        {hero.headline} <br className="hidden md:block" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">
                            {hero.headlineAccent}
                        </span>{" "}
                        {hero.subheadline}
                    </motion.h1>

                    {/* Description */}
                    <motion.p
                        variants={itemVariants}
                        className="text-lg md:text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed text-center"
                    >
                        {hero.description}
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        variants={itemVariants}
                        className="flex flex-col sm:flex-row gap-6 justify-center items-center w-full"
                    >
                        <a
                            href={hero.primaryCTA.href}
                            className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-semibold text-lg overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(79,70,229,0.5)] min-w-[200px] text-center"
                        >
                            <span className="relative z-10">{hero.primaryCTA.text}</span>
                            <div className="absolute inset-0 bg-white/20 translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
                        </a>

                        <a
                            href={hero.secondaryCTA.href}
                            className="px-10 py-5 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-white font-semibold text-lg transition-all hover:bg-white/10 hover:border-white/40 min-w-[200px] text-center"
                        >
                            {hero.secondaryCTA.text}
                        </a>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        variants={itemVariants}
                        className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-white/10 pt-12 w-full max-w-4xl"
                    >
                        {hero.stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="text-3xl md:text-5xl font-bold text-white mb-2 bg-gradient-to-b from-white to-white/70 bg-clip-text text-transparent">{stat.value}</div>
                                <div className="text-sm text-gray-400 uppercase tracking-widest font-medium">{stat.label}</div>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>
            </div>

            {/* Floating Elements / Decoration */}
            <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-20 left-10 w-24 h-24 rounded-full border border-white/10 md:block hidden opacity-50"
            />
            <motion.div
                animate={{ y: [0, 30, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-20 right-10 w-40 h-40 rounded-full border border-white/10 md:block hidden opacity-50"
            />
        </section>
    );
}
