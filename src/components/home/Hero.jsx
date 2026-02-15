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
        hidden: { opacity: 0, y: 60, filter: 'blur(10px)' },
        visible: { 
            opacity: 1, 
            y: 0, 
            filter: 'blur(0px)',
            transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } 
        },
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.3,
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
            setPosition({ x: middleX * 0.35, y: middleY * 0.35 });
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
                transition={{ type: 'spring', stiffness: 200, damping: 20, mass: 0.1 }}
                className="relative"
            >
                <Link
                    href={href}
                    className={cn(
                        'group relative flex items-center justify-center px-10 py-4 rounded-full font-bold text-sm tracking-widest uppercase transition-all duration-500 overflow-hidden',
                        variant === 'primary'
                            ? 'bg-orange-500 text-white shadow-[0_0_20px_rgba(249,115,22,0.4)] hover:shadow-[0_0_30px_rgba(249,115,22,0.6)]'
                            : 'bg-white/5 border border-white/10 text-white hover:bg-white/10 backdrop-blur-xl'
                    )}
                >
                    <span className="relative z-10 flex items-center gap-2">
                        {children}
                        {variant === 'primary' && <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />}
                    </span>
                    
                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </Link>
            </motion.div>
        );
    };

    return (
        <section ref={containerRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
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
                            <span className='inline-flex items-center gap-3 py-2.5 px-6 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-[10px] font-bold tracking-[0.4em] uppercase text-orange-500 shadow-[0_0_15px_rgba(249,115,22,0.1)]'>
                                <span className='w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse' />
                                Digital Evolution
                            </span>
                        </motion.div>

                        {/* Headline */}
                        <motion.h1 
                            variants={fadeInUp} 
                            className='text-6xl md:text-9xl font-bold tracking-tighter text-white mb-8 leading-[0.9] flex flex-col items-center'
                        >
                            <span className="opacity-90">WE CRAFT</span>
                            <span className='text-orange-500 italic relative'>
                                DIGITAL LEGACIES
                                <div className="absolute -bottom-4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />
                            </span>
                        </motion.h1>

                        {/* Description */}
                        <motion.p 
                            variants={fadeInUp} 
                            className='text-lg md:text-xl text-white/50 max-w-2xl mb-16 leading-relaxed font-medium tracking-wide'
                        >
                            Transforming visionary ideas into immersive digital experiences through advanced design and neural technology.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div variants={fadeInUp} className='flex flex-col sm:flex-row gap-8 sm:gap-16'>
                            <MagneticButton href='/contact'>
                                Start Project
                            </MagneticButton>
                            <MagneticButton href='/services' variant='secondary'>
                                Capabilities
                            </MagneticButton>
                        </motion.div>
                    </motion.div>
                </div>
            </motion.div>

        </section>
    );
}
