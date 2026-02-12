'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

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
        offset: ["start end", "end start"]
    });

    const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

    return (
        <section ref={containerRef} className="section bg-white relative">
            <div className="container mx-auto px-6">
                <div className="section-header">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="section-title"
                    >
                        How We Work
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="section-subtitle"
                    >
                        A streamlined process designed to deliver exceptional results, every time.
                    </motion.p>
                </div>

                <div className="relative max-w-4xl mx-auto mt-20">
                    {/* Vertical central line (Mobile/Desktop consistent layout for vertical flow) */}
                    <div className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-0.5 bg-slate-100 transform md:-translate-x-1/2" />

                    <motion.div
                        style={{ scaleY, originY: 0 }}
                        className="absolute left-[20px] md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-400 to-amber-500 transform md:-translate-x-1/2 origin-top"
                    />

                    <div className="space-y-16 md:space-y-24">
                        {steps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className={`flex flex-col md:flex-row gap-8 md:gap-0 items-start md:items-center relative ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Content Block */}
                                <div className="md:w-1/2 pl-16 md:pl-0 md:px-12">
                                    <div className={`text-left ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                                        <h3 className="text-2xl font-bold text-slate-900 mb-2 flex items-center gap-3 md:block">
                                            <span className="md:hidden text-orange-500 text-sm font-bold tracking-widest uppercase mb-1 block">Step {step.id}</span>
                                            {step.title}
                                        </h3>
                                        <p className="text-slate-600 leading-relaxed max-w-md ml-0 md:ml-auto md:mr-0 inline-block">
                                            {step.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Center Point */}
                                <div className="absolute left-[20px] md:left-1/2 transform -translate-x-[19px] md:-translate-x-1/2 flex items-center justify-center">
                                    <div className="w-10 h-10 rounded-full bg-white border-4 border-slate-100 shadow-sm flex items-center justify-center z-10 group-hover:border-orange-400 transition-colors duration-300">
                                        <div className="w-3 h-3 rounded-full bg-slate-300 group-hover:bg-orange-500" />
                                    </div>
                                </div>

                                {/* Number Display (Opposite Side) */}
                                <div className="hidden md:block md:w-1/2 px-12">
                                    <div className={`text-8xl font-black text-slate-100 select-none ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
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
