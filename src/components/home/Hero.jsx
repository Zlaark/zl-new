"use client";
import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue } from 'framer-motion';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const containerRef = useRef(null);

    useEffect(() => {
        const handleMouseMove = (e) => {
            mouseX.set(e.clientX / window.innerWidth);
            mouseY.set(e.clientY / window.innerHeight);
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [mouseX, mouseY]);

    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
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
            setPosition({ x: middleX * 0.3, y: middleY * 0.3 });
        };

        const reset = () => {
            setPosition({ x: 0, y: 0 });
        };

        const { x, y } = position;

        return (
            <motion.div
                ref={ref}
                onMouseMove={handleMouse}
                onMouseLeave={reset}
                animate={{ x, y }}
                transition={{ type: 'spring', stiffness: 150, damping: 15, mass: 0.1 }}
            >
                <Link
                    href={href}
                    className={cn(
                        'relative flex items-center justify-center px-6 py-3 rounded-full font-medium text-sm transition-all duration-300',
                        variant === 'primary'
                            ? 'bg-orange-500 text-white hover:bg-orange-600 shadow-lg hover:shadow-orange-500/20'
                            : 'bg-[#1a1a2e] text-white hover:bg-[#16162a] shadow-lg'
                    )}
                >
                    {children}
                </Link>
            </motion.div>
        );
    };

    return (
        <section ref={containerRef} className='relative min-h-screen flex items-center justify-center overflow-hidden bg-white pt-48'>
            {/* Subtle Background */}
            <div className='absolute inset-0 z-0 overflow-hidden pointer-events-none'>
                <div className='absolute inset-0 bg-[url(/grid.svg)] bg-center opacity-[0.03]' />
            </div>

            <div className='container relative z-10 px-6 mx-auto'>
                <div className='flex flex-col items-center text-center'>
                    <motion.div
                        initial='hidden'
                        animate='visible'
                        variants={staggerContainer}
                        className='flex flex-col items-center max-w-4xl mx-auto'
                    >
                        {/* Badge */}
                        <motion.div variants={fadeInUp} className='mb-4'>
                            <span className='inline-flex items-center gap-2 py-2 px-5 rounded-full border border-black/10 text-xs font-semibold tracking-[0.2em] uppercase text-black/60'>
                                <span className='text-orange-500'>›</span>
                                Digital Agency
                                <span className='text-orange-500'>‹</span>
                            </span>
                        </motion.div>

                        {/* Headline */}
                        <motion.h1 variants={fadeInUp} className='text-4xl md:text-6xl font-medium tracking-tight text-black mb-6 leading-tight'>
                            We Craft<br />
                            <span className='text-orange-500 italic'>Digital Legacies</span>
                        </motion.h1>

                        {/* Description */}
                        <motion.p variants={fadeInUp} className='text-sm md:text-base text-black/60 max-w-xl mb-12 leading-relaxed font-normal'>
                            We combine strategy, design, and technology to help ambitious brands stand out & create meaningful digital experiences.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div variants={fadeInUp} className='flex flex-col sm:flex-row gap-12'>
                            <MagneticButton href='/contact'>
                                Discuss your ideas
                            </MagneticButton>
                            <MagneticButton href='/services' variant='secondary'>
                                View services
                            </MagneticButton>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
