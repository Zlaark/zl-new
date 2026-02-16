'use client';

import { useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { MetallicShape } from '@/components/ui/MetallicShape';
import { FloatingElement } from '@/components/ui/FloatingElement';

export default function CTA() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end end']
    });

    const y = useTransform(scrollYProgress, [0, 1], [50, 0]);

    const MagneticButton = ({ children, href }) => {
        const ref = useRef(null);
        const [position, setPosition] = useState({ x: 0, y: 0 });

        const handleMouse = (e) => {
            const { clientX, clientY } = e;
            const { height, width, left, top } = ref.current.getBoundingClientRect();
            const middleX = clientX - (left + width / 2);
            const middleY = clientY - (top + height / 2);
            setPosition({ x: middleX * 0.5, y: middleY * 0.5 });
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
                    className='group relative flex items-center justify-center gap-3 px-10 py-5 rounded-full font-semibold text-lg bg-black text-white hover:bg-black/90 shadow-2xl hover:shadow-orange-500/20 transition-all duration-300 overflow-hidden'
                >
                    <span className='relative z-10'>{children}</span>
                    <motion.span
                        initial={{ x: 0 }}
                        whileHover={{ x: 5 }}
                        className='relative z-10'
                    >
                        <ArrowRight size={20} />
                    </motion.span>
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </Link>
            </motion.div>
        );
    };

    return (
        <section ref={containerRef} className='py-32 bg-white relative overflow-hidden flex items-center justify-center'>
            {/* Background Elements */}
            <FloatingElement color="bg-orange-100" size="500px" top="-10%" right="-5%" delay={0} />
            <FloatingElement color="bg-purple-100" size="400px" bottom="-10%" left="-5%" delay={2} />
            <MetallicShape className="bottom-0 right-0 transform translate-x-1/4 translate-y-1/4" delay={0} size={500} />
            <MetallicShape className="top-0 left-0 transform -translate-x-1/4 -translate-y-1/4 rotate-180" delay={5} size={400} />

            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[100px]' />

            <div className='container relative z-10 text-center px-6'>
                <motion.div style={{ y }} className='max-w-4xl mx-auto'>
                    <h2 className='text-5xl md:text-7xl font-bold text-black mb-8 leading-[1.1] tracking-tight'>
                        Ready to transform your <br />
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-orange-600 to-amber-500'>digital presence?</span>
                    </h2>
                    <p className='text-xl text-black/60 mb-12 max-w-2xl mx-auto leading-relaxed'>
                        Let&apos;s build something extraordinary together. From concept to launch, we are your partners in digital innovation.
                    </p>

                    <div className='flex justify-center'>
                        <MagneticButton href='/contact'>Start Your Project</MagneticButton>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
