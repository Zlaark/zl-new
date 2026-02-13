'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '@/lib/utils';
import { MetallicShape } from '@/components/ui/MetallicShape';
import { FloatingElement } from '@/components/ui/FloatingElement';

const steps = [
    {
        id: '01',
        title: 'Discover',
        description: 'We dive deep into your brand, goals, and audience to uncover insights that drive the project forward.',
    },
    {
        id: '02',
        title: 'Design',
        description: 'We craft visually stunning, user-centric designs that embody your brand identity and captivate users.',
    },
    {
        id: '03',
        title: 'Develop',
        description: 'We bring designs to life with clean, efficient code using the latest technologies for optimal performance.',
    },
    {
        id: '04',
        title: 'Launch',
        description: 'We rigorously test and deploy your project, ensuring a flawless launch and providing ongoing support.',
    }
];

export default function Process() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start end', 'end start']
    });

    const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <section ref={containerRef} className='section bg-[#fafafa] relative py-32 overflow-hidden'>
            <FloatingElement color="bg-orange-400" size="400px" top="-10%" left="-5%" delay={0} />
            <FloatingElement color="bg-blue-400" size="300px" top="60%" left="80%" delay={2} />
            <FloatingElement color="bg-purple-400" size="250px" top="20%" left="70%" delay={4} />

            <MetallicShape className="-top-20 -right-20" delay={0} size={500} />
            <MetallicShape className="top-1/2 -left-32" delay={5} size={400} />
            <MetallicShape className="-bottom-32 right-1/4" delay={10} size={300} />

            <div className='container mx-auto px-6 relative z-10'>
                <div className='mb-20 text-center max-w-2xl mx-auto'>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className='inline-block px-4 py-1.5 mb-6 rounded-full bg-black/5 text-sm font-medium text-black/60 tracking-wider uppercase'
                    >
                        How We Work
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className='text-5xl md:text-6xl font-bold text-black leading-[1.1] tracking-tighter mb-8'
                    >
                        <span className="relative inline-block">
                            <span className="metallic-shine">Streamlined</span>
                        </span>{" "}
                        <span className='text-orange-500'>Process</span>
                        <span className="period-glow text-orange-500">.</span>

                        <style jsx>{`
                            .metallic-shine {
                                background: linear-gradient(
                                    90deg, 
                                    rgb(0, 0, 0) 0%, 
                                    rgb(0, 0, 0) 45%, 
                                    rgb(226, 232, 240) 50%, 
                                    rgb(0, 0, 0) 55%, 
                                    rgb(0, 0, 0) 100%
                                );
                                background-size: 200% 100%;
                                -webkit-background-clip: text;
                                -webkit-text-fill-color: transparent;
                                animation: shine 3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
                                animation-iteration-count: 1;
                                animation-delay: 0.5s;
                                display: inline-block;
                            }

                            .period-glow {
                                color: #ffedd5;
                                text-shadow: 0 0 10px rgba(249, 115, 22, 0.4), 0 0 20px rgba(249, 115, 22, 0.2);
                                font-weight: 900;
                            }

                            @keyframes shine {
                                0% {
                                    background-position: 200% 0%;
                                }
                                100% {
                                    background-position: -200% 0%;
                                }
                            }
                        `}</style>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className='text-lg md:text-xl text-black/60 leading-relaxed'
                    >
                        A proven approach designed to deliver exceptional results, every time.
                    </motion.p>
                </div>

                <div className='relative max-w-5xl mx-auto'>
                    {/* Vertical central line */}
                    <div className='absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-white/10 transform md:-translate-x-1/2' />

                    <motion.div
                        style={{ scaleY, originY: 0 }}
                        className='absolute left-[20px] md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-accent to-purple-500 transform md:-translate-x-1/2 origin-top'
                    />

                    <div className='space-y-20'>
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-100px' }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={cn(
                                    'flex flex-col md:flex-row gap-8 md:gap-0 items-start md:items-center relative',
                                    index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                )}
                            >
                                {/* Content Block */}
                                <div className='md:w-1/2 pl-16 md:pl-0 md:px-16'>
                                    <div className={cn(
                                        'text-left',
                                        index % 2 === 0 ? 'md:text-left' : 'md:text-right'
                                    )}>
                                        <div className='flex items-center gap-4 mb-4 md:hidden'>
                                            <span className='text-accent font-mono text-sm'>Step {step.id}</span>
                                        </div>
                                        <h3 className='text-2xl font-bold text-black mb-4'>
                                            {step.title}
                                        </h3>
                                        <p className='text-black/60 leading-relaxed'>
                                            {step.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Center Point */}
                                <div className='absolute left-[20px] md:left-1/2 transform -translate-x-[19.5px] md:-translate-x-1/2 flex items-center justify-center'>
                                    <div className='w-10 h-10 rounded-full bg-white border border-black/5 shadow-xl flex items-center justify-center z-10 group-hover:border-accent transition-colors duration-300'>
                                        <div className='w-2 h-2 rounded-full bg-accent animate-pulse' />
                                    </div>
                                </div>

                                {/* Number Display (Opposite Side) */}
                                <div className='hidden md:block md:w-1/2 px-16'>
                                    <div className={cn(
                                        'text-9xl font-black text-white/5 select-none font-mono',
                                        index % 2 === 0 ? 'text-right' : 'text-left'
                                    )}>
                                        {step.id}
                                    </div>
                                </div>

                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
