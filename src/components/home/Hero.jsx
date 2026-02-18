"use client";
import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import HeroBackground from './HeroBackground';

const HeroButton = ({ children, href, variant = 'primary' }) => {
    return (
        <div className="relative">
            <Link
                href={href}
                className={cn(
                    'group relative flex items-center justify-center px-6 py-3 rounded-[8px] font-bold text-[15px] tracking-wider transition-all duration-300 overflow-hidden',
                    variant === 'primary'
                        ? 'bg-[#FF6727] text-[#FEFBFA] hover:bg-gradient-to-b hover:from-[#b94a19] hover:to-[#FF6727] shadow-none transition-all duration-300'
                        : 'bg-[#14141D] text-[#F8F8F8] hover:bg-gradient-to-b hover:from-[#2a2a35] hover:to-[#14141D] hover:shadow-[0_2px_15px_rgba(0,0,0,0.3)] transition-all duration-300'
                )}
            >
                <span className="relative z-10 flex items-center gap-2">
                    {children}
                    
                </span>
            </Link>
        </div>
    );
};

const PixelArrow = ({ direction = 'right' }) => (
    <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-slate-400">
        {direction === 'right' ? (
            <path d="M0 0H2V2H0V0ZM2 2H4V4H2V2ZM4 4H6V6H4V4ZM2 6H4V8H2V6ZM0 8H2V10H0V8Z" fill="currentColor" />
        ) : (
            <path d="M6 0H4V2H6V0ZM4 2H2V4H4V2ZM2 4H0V6H2V4ZM4 6H2V8H4V6ZM6 8H4V10H6V8Z" fill="currentColor" />
        )}
    </svg>
);

export default function Hero() {
    const containerRef = useRef(null);

    const fadeInUp = {
        hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
        visible: {
            opacity: 1,
            y: 0,
            filter: 'blur(0px)',
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
        },
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2,
            },
        },
    };

    return (
        <section ref={containerRef} className="relative min-h-[90vh] flex justify-center overflow-hidden bg-transparent pt-60 pb-20">
            {/* Animated Background */}
            <HeroBackground />

            <motion.div
                className='container relative z-10 px-6 mx-auto'
            >
                <div className='flex flex-col items-center text-center'>
                    <motion.div
                        initial='hidden'
                        animate='visible'
                        variants={staggerContainer}
                        className='flex flex-col items-center max-w-5xl mx-auto'
                    >
                        {/* Badge */}
                        <motion.div variants={fadeInUp} className='mb-[19.2px]'>
                            <span className='inline-flex items-center gap-[6px] py-[4px] px-[16px] border border-[#EDEBEA] bg-[#F4F2F0] text-[10px] font-bold tracking-[0.25em] uppercase text-[#747379]'>
                                <span style={{ color: "#C4C2C0" }}>❯</span>
                                DIGITAL AGENCY
                                <span style={{ color: "#C4C2C0" }}>❮</span>
                            </span>
                        </motion.div>

                        {/* Headline */}
                        <motion.h1
                            variants={fadeInUp}
                            className='text-[34px] md:text-[58px] lg:text-[70px] font-medium tracking-[-0.02em] text-[#060612] mb-4 leading-[1.1] flex flex-col items-center'
                        >
                            <span className="block">We design brands</span>
                            <span className="flex items-center justify-center gap-x-4">
                                <span>that move</span>
                                <span className='text-[#FF6321]'>people</span>
                            </span>
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                            variants={fadeInUp}
                            className='text-[15px] md:text-[17px] text-slate-600 max-w-2xl mb-4 leading-[1.1] font-medium'
                        >
                            We combine strategy, design, and technology to help ambitious <br className="hidden md:block" /> brands stand out & create meaningful digital experiences.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div variants={fadeInUp} className='flex flex-col sm:flex-row gap-6 mt-6 relative'>
                            {/* Callout Arrow & Text */}
                            <div className="hidden md:block absolute -left-[220px] top-[60%] -translate-y-1/2 w-[220px] pointer-events-none">
                                <div className="relative h-24 w-full">
                                    <span
                                        className="absolute right-8 bottom-0 text-orange-500 text-2xl whitespace-nowrap"
                                        style={{ fontFamily: 'var(--font-reenie)' }}
                                    >
                                        Schedule a free call now
                                    </span>
                                    <svg
                                        className="absolute right-4 top-0 w-16 h-16 text-orange-400 transform rotate-12"
                                        viewBox="0 0 100 100"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path d="M20,70 Q60,20 95,40" strokeLinecap="round" />
                                        <path d="M88,35 L95,40 L90,48" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>

                            <HeroButton href='/contact'>
                                Discuss your ideas
                            </HeroButton>
                            <HeroButton href='/services' variant='secondary'>
                                View services
                            </HeroButton>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
