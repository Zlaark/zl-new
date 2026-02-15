"use client";
import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import HeroBackground from './HeroBackground';

export default function Hero() {
    const containerRef = useRef(null);
    const { scrollY } = useScroll();

    // Parallax Transforms
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const opacity = useTransform(scrollY, [0, 300], [1, 0]);
    const scale = useTransform(scrollY, [0, 500], [1, 0.9]);

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

    const MagneticButton = ({ children, href, variant = 'primary' }) => {
        const ref = useRef(null);
        const [position, setPosition] = useState({ x: 0, y: 0 });

        const handleMouse = (e) => {
            const { clientX, clientY } = e;
            const { height, width, left, top } = ref.current.getBoundingClientRect();
            const middleX = clientX - (left + width / 2);
            const middleY = clientY - (top + height / 2);
            setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
        };

        const reset = () => {
            setPosition({ x: 0, y: 0 });
        };

        return (
            <motion.div
                ref={ref}
                onMouseMove={handleMouse}
                onMouseLeave={reset}
                animate={{ x: position.x, y: position.y }}
                transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
                className="relative"
            >
                <Link
                    href={href}
                    className={cn(
                        'group relative flex items-center justify-center px-8 py-4 rounded-full font-bold text-sm tracking-widest uppercase transition-all duration-300 overflow-hidden',
                        variant === 'primary'
                            ? 'bg-orange-500 text-white shadow-lg shadow-orange-500/30 hover:shadow-xl hover:shadow-orange-500/40 hover:-translate-y-1'
                            : 'bg-[#1a1c2e] text-white shadow-lg shadow-blue-900/20 hover:shadow-xl hover:shadow-blue-900/30 hover:-translate-y-1'
                    )}
                >
                    <span className="relative z-10 flex items-center gap-2">
                        {children}
                        {variant === 'primary' && <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />}
                    </span>
                </Link>
            </motion.div>
        );
    };

    return (
        <section ref={containerRef} className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-transparent pt-32 pb-20">
            {/* Animated Background */}
            <HeroBackground />

            <motion.div
                style={{ y: y1, opacity, scale }}
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
                        <motion.div variants={fadeInUp} className='mb-8'>
                            <span className='inline-flex items-center gap-3 py-2 px-6 rounded-full border border-orange-100 bg-orange-50/50 backdrop-blur-sm text-xs font-bold tracking-[0.2em] uppercase text-orange-500'>
                                <span className='w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse' />
                                Digital Agency
                            </span>
                        </motion.div>

                        {/* Headline */}
                        <motion.h1
                            variants={fadeInUp}
                            className='text-6xl md:text-8xl lg:text-9xl font-extrabold tracking-tight text-slate-900 mb-8 leading-[0.9] flex flex-col items-center'
                        >
                            <span className="block">WE CRAFT</span>
                            <span className='text-orange-500 italic font-black relative'>
                                DIGITAL LEGACIES
                            </span>
                        </motion.h1>

                        {/* Description */}
                        <motion.p
                            variants={fadeInUp}
                            className='text-lg md:text-xl text-slate-600 max-w-2xl mb-12 leading-relaxed font-medium'
                        >
                            We combine strategy, design, and technology to help ambitious brands stand out & create meaningful digital experiences.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div variants={fadeInUp} className='flex flex-col sm:flex-row gap-6 mt-4'>
                            <MagneticButton href='/contact'>
                                Discuss your ideas
                            </MagneticButton>
                            <MagneticButton href='/services' variant='secondary'>
                                View services
                            </MagneticButton>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}
