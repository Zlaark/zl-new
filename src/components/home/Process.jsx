'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '@/lib/utils';

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
        <section ref={containerRef} className='section bg-background relative py-32'>
            <div className='container mx-auto px-6 relative z-10'>
                <div className='mb-20 text-center max-w-2xl mx-auto'>
                    <motion.span 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className='text-accent text-sm font-medium tracking-wider uppercase mb-4 block'
                    >
                        How We Work
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className='text-4xl md:text-5xl font-bold text-foreground mb-4'
                    >
                        Streamlined Process
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className='text-muted-foreground'
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
                                        <h3 className='text-2xl font-bold text-foreground mb-4'>
                                            {step.title}
                                        </h3>
                                        <p className='text-muted-foreground leading-relaxed'>
                                            {step.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Center Point */}
                                <div className='absolute left-[20px] md:left-1/2 transform -translate-x-[19.5px] md:-translate-x-1/2 flex items-center justify-center'>
                                    <div className='w-10 h-10 rounded-full bg-background border border-white/10 shadow-xl flex items-center justify-center z-10 group-hover:border-accent transition-colors duration-300'>
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
